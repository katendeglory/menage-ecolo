<script>
  /* STYLES IMPORTS */
  import "../styles/app.css";
  import "../styles/tailwind-output.css";
  /* JS IMPORTS */
  import NavBar from "../components/layout/NavBar.svelte";
  import Footer from "../components/layout/Footer.svelte";
</script>

<div
  class={`text-base bg-brand-white text-gray-700 tracking-wide w-full layout`}
  id="home"
>
  <NavBar />
  <slot />
  <Footer />
</div>

<!-- For tailwind purge -->
<div class="scroll-smooth" />

<style>
  .layout {
    width: 100%;
  }
</style>
