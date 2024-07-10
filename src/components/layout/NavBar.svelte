<script>
  import Container from "./../utils/Container.svelte";
  import { onMount } from "svelte";
  import get from "lodash.get";
  import config from "../../stores/config";
  import { slide, fly } from "svelte/transition";

  let PWAInstallBtn;
  let clickListener;
  let showSideMenu = false;

  $: {
    if (PWAInstallBtn) {
      /*
        Attach the click event listener to the install button when it is shown,
        as on page load it's still hidden and waiting for the PWA to be ready. 
        The button will be rendered as soon as we have caught the beforeinstallprompt event.
        The event prompt will have to be manually triggered with the click of the button. 
        The beforeinstallprompt event will only trigger after the worker is installed, activated & ready.
        Otherwise it'll throw an exception and won't trigger.
      */
      PWAInstallBtn.addEventListener("click", clickListener);
    }
  }

  onMount(() => {
    window.onscroll = (e) => {
      scrollFunction();
    };

    const scrollFunction = () => {
      let innerHeader = document.getElementById("inner-header");

      if (
        document.body.scrollTop > 40 ||
        document.documentElement.scrollTop > 40
      ) {
        innerHeader.classList.replace("sm:h-32", "sm:h-28");
      } else {
        innerHeader.classList.replace("sm:h-28", "sm:h-32");
      }
    };

    let deferredPrompt;

    window.addEventListener("beforeinstallprompt", (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI notify the user they can install the PWA
      // showInstallPromotion();
      // Show button when app can be installed, it can now be installed
      is_chrome = !!window.chrome;
    });

    clickListener = (e) => {
      // Hide the app provided install promotion on click
      // hideMyInstallPromotion();
      // Show the install prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt!");
        } else {
          console.log("User dismissed the install prompt!");
        }
      });
    };
  });

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    config.update((prev) => ({
      ...prev,
      currentUser: null,
    }));
    window.location = "/login";
  };
</script>

<div
  id="header"
  class="bg-[#111111] navbar text-gray-300 fixed top-0 left-0 w-full z-50 transition-all
    duration-250"
>
  <Container overflowHidden={false}>
    <div id="inner-header" class="h-16 sm:h-32 transition-all duration-500">
      <div class="h-1/2 hidden sm:flex justify-between items-center">
        <a class="flex items-center text-3xl sm:text-4xl h-font" href="/#home">
          <!-- <img src="/images/favicon.png" class="w-10 mr-2" alt="home" /> -->
          <span>menag </span>
          <span class="text-brand-primary">ecolo</span>
        </a>

        <div class="hidden lg:flex items-center">
          <a
            href="/#quote"
            target="_blank"
            class="!text-base h-font btn btn-secondary !px-4 !py-1 mr-2 !text-white"
          >
            Demander une quotation
            <span class="material-symbols-outlined text-2xl ml-2">
              export_notes
            </span>
          </a>
          <a
            href="/#contact"
            target="_blank"
            class="!text-base h-font btn btn-white !px-4 !py-1"
          >
            Nous contacter
            <span class="material-symbols-outlined text-2xl ml-2">
              phone_in_talk
            </span>
          </a>
        </div>
      </div>

      <div class="h-full sm:h-1/2 flex justify-between items-center">
        <a class="nav flex items-center" href="/#home">
          <span class="material-symbols-outlined text-4xl">
            home_app_logo
          </span>
          <!-- Acceuil  -->
        </a>

        <span class="flex items-center sm:hidden text-3xl sm:text-4xl h-font">
          <!-- <img src="/images/favicon.png" class="w-10 mr-2" alt="home" /> -->
          <span class="text-gray-100">menag </span>
          <span class="text-brand-primary">ecolo</span>
        </span>

        <div class="hidden lg:flex text-[0.9rem]">
          <a class="nav mr-6 manrope" href="/#about"> A propos </a>
          <a class="nav mr-6 manrope" href="/#mission"> Notre mission </a>
          <a class="nav mr-6 manrope" href="/#vision"> Notre vision </a>
          <a class="nav mr-6 manrope" href="/#valeurs"> Nos valeurs </a>
          <a class="nav mr-6 manrope" href="/#clientele"> Notre clientèle </a>
        </div>

        <div class="">
          <div class="flex items-center justify-center">
            <button
              on:click={() => (showSideMenu = true)}
              class="flex items-center justify-center nav"
            >
              <span id="side-menu" class="material-symbols-outlined text-4xl">
                apps
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </Container>
</div>

{#if showSideMenu}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="fixed top-0 left-0 right-0 bottom-0 h-screen w-screen bg-black/25 z-[3000]"
    on:click={() => (showSideMenu = false)}
    transition:fly={{ duration: 400, x: 500 }}
  >
    <div
      class="py-4 px-3 text-sm absolute right-0 top-0 bottom-0 bg-[#111111] w-[90vw] sm:w-[26rem] patterns"
    >
      <div class="grid grid-cols-2 gap-2">
        <a class="side-btn" href="/#home">
          <span class="material-symbols-outlined text-2xl mr-1">
            home_app_logo
          </span>
          Acceuil
        </a>

        <a class="side-btn" href="/#mission">
          <span class="material-symbols-outlined text-2xl mr-1">
            list_alt
          </span>
          Notre mission
        </a>

        <a class="side-btn" href="/#contact">
          <span class="material-symbols-outlined text-2xl mr-1">
            phone_in_talk
          </span>
          Contact
        </a>

        <a class="side-btn" href="/#about">
          <span class="material-symbols-outlined text-2xl mr-1">
            indeterminate_question_box
          </span>
          A propos
        </a>

        <a class="side-btn" href="/#vision">
          <span class="material-symbols-outlined text-2xl mr-1"> target </span>
          Notre vision
        </a>

        <a class="side-btn" href="/#methode">
          <span class="material-symbols-outlined text-2xl mr-1"> roofing </span>
          Méthode
        </a>

        <a class="side-btn col-span-full !bg-brand-primary" href="/#quote">
          Demander une quotation
          <span class="material-symbols-outlined text-2xl ml-2">
            export_notes
          </span>
        </a>

        <a class="side-btn" href="/#valeurs">
          <span class="material-symbols-outlined text-2xl mr-1"> trophy </span>
          Nos valeurs
        </a>
        <a class="side-btn" href="/#clientele">
          <span class="material-symbols-outlined text-2xl mr-1">
            speaker_notes
          </span>
          Clientèle
        </a>
      </div>

      <div
        class="mt-4 flex items-center justify-between space-x-2 !text-gray-50"
      >
        <span class="flex items-center text-3xl sm:text-4xl h-font">
          <!-- <img src="/images/favicon.png" class="w-10 mr-2" alt="home" /> -->
          <span class="text-gray-100">menag </span>
          <span class="text-brand-primary">ecolo</span>
        </span>

        <!-- <a target="blank" href="/#home">
          <ion-icon name="logo-youtube" class="text-xl" />
        </a>
        <a target="blank" href="/#home">
          <ion-icon name="logo-twitter" class="text-xl" />
        </a>
        <a target="blank" href="/#home">
          <ion-icon name="logo-instagram" class="text-xl" />
        </a>
        <a target="blank" href="/#home">
          <ion-icon name="logo-facebook" class="text-xl" />
        </a> -->
      </div>
    </div>
  </div>
{/if}

<style>
  .patterns {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.085' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  }
</style>
