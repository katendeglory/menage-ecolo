<script>
  import YoutubeVideo from "./YoutubeVideo.svelte";
  import VideoWebinar from "./VideoWebinar.svelte";
  import Modal from "./../utils/Modal.svelte";
  import { onMount } from "svelte";
  import config from "../../stores/config";
  import get from "lodash.get";
  import axios from "axios";
  import PayPalNow from "./PayPalNow.svelte";
  import PayNow from "./PayNow.svelte";

  let showVideoModal = false;

  let headers = {
    headers: { authorization: localStorage.getItem("jwt") },
  };

  let showPayModal = false;
  let hasPaid = false;

  export let isLoggedIn;
  export let _id;
  export let ID;
  // export let password;
  // export let hours;
  export let title;
  export let description;
  export let amount;
  export let webinarN;
  export let poster;
  export let tyype;

  let tel;
  let userN;

  let videoLength = "";

  onMount(async () => {
    tel = $config.currentUser.tel;
    userN = $config.currentUser.userN;

    if (amount <= 0) {
      isLoggedIn = true;
      hasPaid = true;
    }

    try {
      let me = await axios.get(`${$config.backendURL}/me`, headers);
      config.update((prev) => ({ ...prev, currentUser: me.data }));
      let conf = me.data.conferences.find((con) => con == _id) || false;
      hasPaid = conf ? true : false;

      if (amount == 0) {
        hasPaid = true;
      }
    } catch (error) {
      // console.log(error);
    }
  });
</script>

<div class="">
  <div class="bg-brand-white-light rounded-xl shadow-lg overflow-hidden">
    <div
      style={`background-image: url(${poster}); background-size: cover; background-position: center;`}
    >
      <div
        class="px-3 pt-4 no-h-[12.5rem] aspect-[16/9] flex flex-col justify-between overlay-thin"
      >
        <div class="">
          {#if amount > 0}
            <div
              class="h-font py-1 px-2 mr-3 rounded-lg text-white text-base inline-block bg-gradient-to-r from-brand-primary to-brand-primary"
            >
              ${amount}
            </div>
          {/if}
        </div>
      </div>
    </div>
    <div class="px-3 py-2">
      <h1
        class="flex items-center pb-2 k-font font-bold uppercase text-base text-transparent fill-current bg-clip-text bg-gradient-to-r from-brand-primary to-brand-primary"
      >
        <div
          class="rounded-md bg-gradient-to-r from-brand-primary/75 to-brand-primary/75 mr-2 shadow-md px-1 flex items-center justify-center"
        >
          {#if tyype == "activité"}
            <span class="material-symbols-outlined text-white text-3xl">
              calendar_month
            </span>
          {:else if tyype == "podcast"}
            <span class="material-symbols-outlined text-white text-3xl">
              mic
            </span>
          {:else if tyype == "video"}
            <span class="material-symbols-outlined text-white text-3xl">
              video_library
            </span>
          {:else if tyype == "pdf"}
            <span class="material-symbols-outlined text-white text-3xl">
              picture_as_pdf
            </span>
          {/if}
        </div>
        {title}
      </h1>
      <div
        class="mb-2 text-gray-700 !text-sm tracking-wider line-clamp-5 overflow-hidden"
      >
        {@html description.replaceAll("\n", `<div class="mt-2"/>`)}
      </div>

      {#if isLoggedIn}
        <div class="">
          {#if !hasPaid}
            <button
              class="btn btn-black !w-full"
              on:click={() => (showPayModal = true)}
            >
              Cliquez Pour Payer
              <span class="material-symbols-outlined text-3xl ml-2">
                shopping_cart_checkout
              </span>
            </button>
            <!-- HERE HERE -->
            <!-- <Modal
              {title}
              show={showPayModal}
              on:modalClose={() => (showPayModal = false)}
            >
              <PayNow {amount} {tel} {userN} {webinarN} {_id} />
            </Modal> -->
            <Modal
              withHeight
              {title}
              show={showPayModal}
              on:modalClose={() => (showPayModal = false)}
            >
              <PayPalNow
                AMOUNT={amount}
                {webinarN}
                userN={$config.currentUser.userN}
              />
            </Modal>
          {:else}
            <div class="">
              {#if tyype == "activité"}
                <a href="/#contact" class="btn btn-third !w-full">
                  Nous Contacter
                  <span class="material-symbols-outlined ml-2 text-2xl">
                    link
                  </span>
                </a>
              {:else}
                <button
                  class="btn btn-third !w-full"
                  on:click={() => (showVideoModal = true)}
                >
                  Regarder
                  <span class="material-symbols-outlined ml-2 text-2xl">
                    play_circle
                  </span>
                </button>
              {/if}
            </div>
          {/if}
        </div>
      {:else}
        <a href="/register" class="!w-full btn btn-black">
          Inscription
          <span class="material-symbols-outlined ml-2 text-3xl">
            app_registration
          </span>
        </a>
      {/if}
    </div>
  </div>
</div>

<VideoWebinar
  on:modalClose={() => (showVideoModal = false)}
  show={showVideoModal}
>
  <YoutubeVideo {description} {title} videoURL={ID} />
</VideoWebinar>
