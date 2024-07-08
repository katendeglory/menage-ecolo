<script>
  import { scale } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  export let show = false;
  export let title = "";
  export let withHeight = false;

  const dispatch = createEventDispatcher();

  const onClose = () => {
    dispatch("modalClose");
  };
</script>

{#if show}
  <div
    on:click|self={onClose}
    class="fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center z-[999] bg-black/50"
  >
    <div
      transition:scale
      class="w-11/12 md:w-[28rem] bg-brand-white patterns rounded-lg shadow-lg py-4 px-5
      border border-gray-600/50 overflow-auto"
      style={withHeight ? "height: 75vh !important;" : ""}
    >
      <!-- <div class="flex items-center pb-4 text-base">
        <span
          class="material-symbols-outlined mr-2 text-3xl text-brand-primary"
        >
          school
        </span>
        <div class="uppercase">{title}</div>
      </div> -->

      <div class="mb-4">
        <slot><!-- optional fallback --></slot>
      </div>

      <div class="flex items-center justify-center">
        <button class="btn btn-secondary !py-1" on:click={onClose}>
          <span class="material-symbols-outlined text-xl mr-2"> cancel </span>
          Annuler
        </button>
      </div>
    </div>
  </div>
{/if}

<style>
  .patterns {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23000000' fill-opacity='0.025' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
</style>
