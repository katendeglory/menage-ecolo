<script>
  import axios from "axios";
  import { onMount } from "svelte";
  import config from "../../stores/config";
  export let AMOUNT;
  export let userN, webinarN;

  onMount(() => {
    paypal
      .Buttons({
        enableStandardCardFields: false,
        // fundingSource: paypal.FUNDING.PAYPAL,
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: AMOUNT,
                },
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            // handle post paiement here...
            axios
              .post(
                `${$config.backendURL}/flexpay/verify-paiement`,
                { userN, webinarN },
                {
                  headers: { authorization: localStorage.getItem("jwt") },
                },
              )
              .then((res) => {
                console.log("✅ Paiement effectué !");
                alert("✅ Paiement effectué !");
                window.location.reload();
              })
              .catch((err) => {
                console.log(err);
                alert("PayPal erreur: veuillez essayer a nouveau");
              });
          });
        },
        onError: function (err) {
          console.log("\n\n😞 ERROR:");
          console.log(err);
          console.log("\n\n");
          alert(
            "Veuillez reessayer SVP, une erreur est survenue du coté de Paypal",
          );
        },
      })
      .render(`#paypal-button-container-${webinarN}`);
  });
</script>

<div class="bg-white px-5 py-5 rounded-lg shadow-lg">
  <div class="py-2 flex">
    Cliquez sur le button payer en bas de page pour proceder au payment via
    carte ou Paypal.
  </div>

  <div
    class="mb-2 text-lg inline-block text-brand-yellow bg-[#2d2e30] rounded-md px-3 py-1"
  >
    €{AMOUNT}
  </div>

  <div
    id={`paypal-button-container-${webinarN}`}
    class="relative z-10"
    style="width: 100;"
  />
</div>
