<script>
  import LangButton from "./../components/utils/LangButton.svelte";
  /* STYLES IMPORTS */
  import "../styles/app.css";
  import "../styles/tailwind-output.css";
  /* JS IMPORTS */
  import NavBar from "../components/layout/NavBar.svelte";
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
