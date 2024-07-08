<script>
  import Container from "./../utils/Container.svelte";
  import { scale } from "svelte/transition";
  import { createEventDispatcher } from "svelte";

  export let show = false;

  const dispatch = createEventDispatcher();

  const onClose = () => {
    dispatch("modalClose");
  };
</script>

{#if show}
  <div
    on:click|self={onClose}
    transition:scale
    class="fixed top-0 left-0 md:bottom-0 right-0 h-[130vh] md:h-full w-full z-[999] bg-brand-white"
  >
    <button
      class="fixed top-[.5rem] right-[.5rem] z-[998] btn btn-aurora !px-3 !py-0 !h-[2.5rem] !text-brand-primary"
      title="Fermer"
      on:click={() => onClose()}
    >
      <span class="material-symbols-outlined text-2xl">
        do_not_disturb_on
      </span>
    </button>

    <div class="w-full">
      <slot />
    </div>
  </div>
{/if}
