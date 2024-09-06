<script>
  import { onMount } from "svelte";
  import LangButton from "./../components/utils/LangButton.svelte";
  /* STYLES IMPORTS */
  import "../styles/app.css";
  import "../styles/tailwind-output.css";
  /* JS IMPORTS */
  import NavBar from "../components/layout/NavBar.svelte";
  import t from "../utils/t";

  onMount(() => {
    const cc = CookiesConsentJS({
      expirationDays: 365,

      buttons: ["reject", "accept"],

      content: {
        title: t(
          `Ce site utilise des cookies.`,
          `This website is using Cookies!`,
          `¡Este sitio web utiliza cookies!`,
        ),
        message: t(
          `<p>Ce site Web utilise des cookies tiers à des fins statistiques qui nous aident à améliorer l'expérience utilisateur.</p>`,
          `<p>This web uses 3rd party cookies for statistical purposes that help us to improve the user experience.</p>`,
          `<p>Esta web utiliza cookies de terceros con fines estadísticos que nos ayudan a mejorar la experiencia del usuario.</p>`,
        ),
        policy: t(
          `Politique de confidentialité`,
          `Privacy Policy`,
          `Política de privacidad`,
        ),
        policyLink: "https://gdpr-info.eu",
      },

      cookies: {
        menage_ecolo: {
          name: "menage_ecolo",
          title: "Menage Ecolo",
          description: t(
            `<p>Ce site Web utilise des cookies tiers à des fins statistiques qui nous aident à améliorer l'expérience utilisateur.</p>`,
            `<p>This web uses 3rd party cookies for statistical purposes that help us to improve the user experience.</p>`,
            `<p>Esta web utiliza cookies de terceros con fines estadísticos que nos ayudan a mejorar la experiencia del usuario.</p>`,
          ),
        },
      },
    });

    document.getElementById("cc-btn-reject").innerText = t(
      `Rejeter`,
      `Reject`,
      `Rechazar`,
    );

    document.getElementById("cc-btn-accept").innerText = t(
      `Accepter`,
      `Accept`,
      `Aceptar`,
    );
  });
</script>

<div
  class={`text-base bg-brand-white text-gray-700 tracking-wide w-full layout`}
  id="home"
>
  <NavBar />
  <slot />
</div>

<LangButton />

<!-- For tailwind purge -->
<div class="scroll-smooth" />

<style>
  .layout {
    width: 100%;
  }
</style>
