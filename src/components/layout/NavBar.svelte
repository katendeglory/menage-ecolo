<script>
  import Container from "./../utils/Container.svelte";
  import { onMount } from "svelte";
  import get from "lodash.get";
  import config from "../../stores/config";
  import { slide, fly } from "svelte/transition";

  let PWAInstallBtn;
  let is_chrome = !!window.chrome;
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
      // let header = document.getElementById("header");
      let sideMenu = document.getElementById("side-menu");

      if (
        document.body.scrollTop > 40 ||
        document.documentElement.scrollTop > 40
      ) {
        innerHeader.classList.replace("h-32", "h-28");
        // header.classList.add("shadow-sm");
        // header.classList.add("bg-brand-white");
        // header.classList.replace("text-gray-400", "text-gray-600");
        sideMenu.classList.replace("text-gray-100", "text-gray-600");
      } else {
        innerHeader.classList.replace("h-28", "h-32");
        // header.classList.remove("shadow-sm");
        // header.classList.remove("bg-brand-white");
        // header.classList.replace("text-gray-600", "text-gray-400");
        sideMenu.classList.replace("text-gray-600", "text-gray-100");
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
    <div id="inner-header" class="h-32 transition-all duration-500">
      <div class="h-1/2 flex justify-between items-center">
        <a class="flex items-center text-4xl h-font" href="/#home">
          <!-- <img src="/images/man-gold.png" class="w-10 mr-2" alt="home" /> -->
          <span>menag </span>
          <span class="text-brand-primary">ecolo</span>
        </a>

        <div class="hidden lg:flex items-center">
          <a
            href="https://www.youtube.com/@mantv6688"
            target="_blank"
            class="btn btn-secondary !px-4 !py-1 mr-2"
          >
            Demander Une Quotation
            <span class="material-symbols-outlined text-2xl ml-2">
              double_arrow
            </span>
          </a>
          <a
            href="https://www.youtube.com/@mantv6688"
            target="_blank"
            class="btn btn-white !px-4 !py-1"
          >
            Nous Contacter
            <span class="material-symbols-outlined text-2xl ml-2">
              phone_in_talk
            </span>
          </a>
        </div>
      </div>
      <div class="h-1/2 flex justify-between items-center">
        <a class="flex items-center" href="/#home"> Acceuil </a>

        <div class="hidden lg:flex">
          <a class="mr-6" href="/#home">Hello</a>
          <a class="mr-6" href="/#about">Maison</a>
          <a class="mr-6" href="/#ministries">Ministères</a>
          <a class="mr-6" href="/#about">Extensions</a>
        </div>

        <div class="">
          <div class="flex items-center justify-center">
            <button
              on:click={() => (showSideMenu = true)}
              class="flex items-center justify-center"
            >
              <span
                id="side-menu"
                class="material-symbols-outlined text-gray-100 text-4xl"
              >
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
    transition:fly={{ duration: 100, x: 500 }}
  >
    <div
      class="py-4 px-4 text-sm absolute right-0 top-0 bottom-0 glassmorph-5 w-[85vw] sm:w-[26rem] patterns"
    >
      <div class="grid grid-cols-2 gap-2">
        <a class="side-btn" href="/#home">
          <span class="material-symbols-outlined text-2xl mr-2">
            home_app_logo
          </span>
          Acceuil
        </a>
        <a class="side-btn" href="/maison">
          <span class="material-symbols-outlined text-2xl mr-2"> church </span>
          Maison
        </a>

        <a class="side-btn" href="/#contact">
          <span class="material-symbols-outlined text-2xl mr-2">
            contact_mail
          </span>
          Contact
        </a>

        <a class="side-btn capitalize" href="/#ministries">
          <span class="material-symbols-outlined text-2xl mr-2"> hub </span>
          Ministères
        </a>

        <a class="side-btn capitalize" href="/#about">
          <span class="material-symbols-outlined text-2xl mr-2">
            share_location
          </span>
          Extensions
        </a>

        <a class="side-btn" href="/donate">
          <span class="material-symbols-outlined text-2xl mr-2">
            volunteer_activism
          </span>
          Don en ligne
        </a>

        <a class="side-btn col-span-full !bg-brand-primary" href="/#ressources">
          événements & Ressources
          <span class="material-symbols-outlined text-2xl ml-2">
            media_link
          </span>
        </a>

        <div
          class="!text-gray-800 mt-2 font-normal flex items-center text-lg tracking-wider"
        >
          <span class="material-symbols-outlined text-3xl mr-1">
            laptop_mac
          </span>
          Connecter:
        </div>

        <div class="col-span-full !w-full grid grid-cols-2 gap-2">
          <a href="/#ressources" class="side-btn-sm side-btn">
            <span class="material-symbols-outlined text-xl mr-2">
              headphones
            </span>
            <div class>Podcasts</div>
          </a>
          <a href="/#ressources" class="side-btn-sm side-btn">
            <span class="material-symbols-outlined text-xl mr-2">
              mic_external_on
            </span>
            <div class>Serments</div>
          </a>
          <a
            class="side-btn-sm side-btn"
            href="https://m.facebook.com/search/top?q=%C3%A9cris%20divins%20-%20israel%20kayembe"
            target="_blank"
          >
            <span class="material-symbols-outlined text-xl mr-2"> draw </span>
            <div class>écris divins</div>
          </a>
          <a
            href="https://www.youtube.com/results?search_query=J%E2%80%99ai+Appris+-+Israel+Kayembe"
            target="_blank"
            class="side-btn-sm side-btn"
          >
            <span class="material-symbols-outlined text-xl mr-2">
              emoji_objects
            </span>
            <div class>J'ai appris</div>
          </a>
          <a
            class="col-span-full side-btn-sm side-btn"
            href="https://m.facebook.com/search/top?q=j%27ai%20appris%20-%20israel%20kayembe"
            target="_blank"
          >
            <span class="material-symbols-outlined text-xl mr-2">
              health_metrics
            </span>
            <div class>Heures d'intimité</div>
          </a>
        </div>

        {#if get($config, "currentUser.role") == "super-admin"}
          <a class="side-btn col-span-full !bg-brand-primary" href="/adm">
            <span class="material-symbols-outlined text-2xl mr-2">
              admin_panel_settings
            </span>
            Admin
          </a>
        {/if}
        {#if get($config, "currentUser.username")}
          <a class="side-btn" href="/profile">
            <span class="material-symbols-outlined text-2xl mr-2">
              account_circle
            </span>
            Profile
          </a>
          <button on:click={handleLogout} class="side-btn">
            <span class="material-symbols-outlined text-2xl mr-2">
              logout
            </span>
            Quitter
          </button>
        {:else}
          <a
            class="side-btn !bg-brand-primary !w-full text-brand-white"
            href="/login"
          >
            Connexion
            <span class="material-symbols-outlined text-2xl ml-2"> send </span>
          </a>
          <a class="side-btn side-btn" href="/register">
            Inscription
            <span class="material-symbols-outlined text-2xl ml-2">
              edit_note
            </span>
          </a>
        {/if}
      </div>
      <div
        class="mt-4 flex items-center justify-between space-x-2 !text-gray-800"
      >
        <img src="/images/man-gold.png" class="w-10" alt="home" />
        <div class="flex items-center">
          <div class="h-[1px] w-[2.5rem] sm:w-[7rem]" />
        </div>
        <a target="blank" href="https://www.youtube.com/@mantv6688">
          <ion-icon name="logo-youtube" class="text-xl" />
        </a>
        <a target="blank" href="https://coachisraelkayembe.com">
          <ion-icon name="logo-twitter" class="text-xl" />
        </a>
        <a target="blank" href="https://www.instagram.com/maisondadoration_man">
          <ion-icon name="logo-instagram" class="text-xl" />
        </a>
        <a
          target="blank"
          href="https://web.facebook.com/Maisondadorationpourlesnations"
        >
          <ion-icon name="logo-facebook" class="text-xl" />
        </a>
      </div>
    </div>
  </div>
{/if}

<style>
  .patterns {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23000000' fill-opacity='0.085' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  }
</style>
