<script>
  import { fly } from "svelte/transition";
  let showLang = false;

  const setLang = (lang) => {
    localStorage.setItem("lang", lang);
    window.location.reload();
  };
</script>

<button
  on:click={() => (showLang = true)}
  class="fixed bottom-2 right-2 btn !px-2 !py-1 !bg-[#111111] !text-white shadow-md border border-gray-50/10"
>
  <span id="side-menu" class="material-symbols-outlined text-3xl">
    language
  </span>
</button>

{#if showLang}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="fixed top-0 left-0 right-0 bottom-0 h-screen w-screen bg-black/25 z-[3000]"
    on:click={() => (showLang = false)}
    transition:fly={{ duration: 400, x: 500 }}
  >
    <div
      class="py-2 px-2 text-sm absolute right-2 sm:right-4 bottom-[3.75rem] rounded-sm !text-gray-300 !bg-[#111111] shadow-md border border-gray-50/10"
    >
      <div class="flex flex-col space-y-2">
        <button
          class="!w-full shadow-md btn !bg-brand-black !px-4 !py-1 !capitalize"
          on:click={() => setLang("fr")}
        >
          <span class="fi fi-fr mr-2 text-base" />
          Français
        </button>
        <button
          class="!w-full shadow-md btn !bg-brand-black !px-4 !py-1 !capitalize"
          on:click={() => setLang("en")}
        >
          <span class="fi fi-gb mr-2 text-base" />
          English
        </button>
        <button
          class="!w-full shadow-md btn !bg-brand-black !px-4 !py-1 !capitalize"
          on:click={() => setLang("es")}
        >
          <span class="fi fi-es mr-2 text-base" />
          Español
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
</style>
