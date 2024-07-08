<script>
  import Loading from "./../utils/Loading.svelte";
  import config from "../../stores/config";
  import CardButton from "./CardButton.svelte";
  import { io } from "socket.io-client";
  import axios from "axios";

  let TIME_OUT_PAIEMENT = true;

  let headers = {
    headers: { authorization: localStorage.getItem("jwt") },
  };

  export let _id; //conference id
  export let amount;
  export let tel;
  export let userN;
  export let webinarN;
  let MPayLoading = false;

  const axiosPay = (data) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${$config.backendURL}/flexpay/pay`, data, headers)
        .then((res) => {
          let { message, success, orderNumber } = res.data;

          console.log("Paiement Info: 👇");
          console.log(res.data);

          if (!success) {
            console.log(message);
            resolve(true); // failed : true
          } else {
            setTimeout(
              () => {
                if (TIME_OUT_PAIEMENT) {
                  alert("❌ Paiement Timeout");
                  window.location.reload();
                }
              },
              3 * 60 * 1000,
            );
            resolve(false); // failed : false
          }
        })
        .catch((err) => {
          console.log(err);
          resolve(true); // failed : true
        });
    });
  };

  const handleMobilePay = async () => {
    // Open the socket here
    let socket = io($config.backendURL);

    socket.on("onPaiementSuccess", (user) => {
      if ($config.currentUser._id == user._id) {
        socket.close();
        console.log("✅ Paiement Success");
        alert("✅ Paiement Success");
        TIME_OUT_PAIEMENT = false;
        window.location.reload();
      }
    });

    socket.on("onPaiementFailure", (user) => {
      if ($config.currentUser._id == user._id) {
        socket.close();
        console.log("❌ Paiement Failed");
        alert("❌ Paiement Failed");
        window.location.reload();
      }
    });

    socket.on("disconnect", () => {
      console.log("❌ Socket disconnected");
    });

    // Do validation here
    if (!tel) {
      alert(`Veuillez mettre un numero de téléphone !`);
      return;
    }

    MPayLoading = true;

    let data = {
      userID: $config.currentUser._id,
      email: $config.currentUser.email,
      conferenceID: _id,
      tel: tel.replace(/\D/g, ""),
    };

    let failureCount = 0;
    let failed = false;

    do {
      failed = await axiosPay(data);
      console.log({ failed });
      failureCount++;
      console.log(`Try #${failureCount}`);
    } while (failureCount <= 10 && failed);

    if (failed) {
      let msg = `❌Erreur: La transaction ne peut être validée pour le moment, veuillez réessayer`;
      alert(msg);
      MPayLoading = false;
    }
  };
</script>

<div class="flex items-center">
  <div
    class="h-font py-1 px-2 mr-3 rounded-lg bg-brand-primary text-white text-xl inline-block"
  >
    ${amount}
  </div>
  <div class="border-b border-brand-primary w-full opacity-40 border-dotted" />
</div>

<div class="mt-2 flex items-center text-sm text-gray-500 tracking-wider">
  <span class="flex items-center">
    <ion-icon name="alert-circle" class="text-3xl mr-2 text-gray-600" />
  </span>
  Le cours sera immédiatement disponible après votre paiement.
</div>

<div class="mt-3 border-b border-gray-400 w-full opacity-40 border-dotted" />

<!-- Mobile Money -->
<div class="mt-3">
  <div class="mb-3 text-brand-primary">
    Vous avez un M-Pesa, Airtel Money, Orange Money ou AfriMoney ?
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
    <input type="text" bind:value={tel} />
    <button class="btn btn-aurora !w-full" on:click={handleMobilePay}>
      Cliquez Pour Payer
      <span class="material-symbols-outlined text-3xl ml-2">
        shopping_cart_checkout
      </span>
    </button>
  </div>
</div>

<div class="mt-5 border-b border-gray-400 w-full opacity-40 border-dotted" />

<!-- Credit Card -->
<div class="mt-5">
  <div class="mb-3 text-brand-primary">Vous avez une Carte bancaire ?</div>

  {#if userN}
    <div class="">
      <CardButton {amount} reference={`${userN}--${webinarN}`} />
    </div>
  {/if}
</div>

{#if MPayLoading}
  <div
    class="fixed top-0 left-0 flex items-center justify-center w-full h-screen z-[900] px-4"
  >
    <div class="bg-white px-5 py-2 rounded-2xl shadow-xl">
      <Loading
        text="Veuillez patienter"
        desc="Validez le push sur votre téléphone"
      />
    </div>
  </div>
{/if}
