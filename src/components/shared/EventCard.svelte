<script>
  import { onMount } from "svelte";
  export let poster;

  onMount(async () => {});
</script>

<div class="p-[1px] border border-white/20 border-dotted shadow-lg">
  <img src={poster} alt={poster} />
</div>
