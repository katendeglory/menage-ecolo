<script>
  import { BarLoader } from "svelte-loading-spinners";
  export let text = "Patientez";
  export let desc = null;
</script>

<div class="w-full h-64 flex flex-col items-center justify-center">
  <div class="flex items-center justify-center mb-6">
    <img src="/images/man-gold.png" class="w-[10rem]" alt="gold" />
  </div>
  <BarLoader size="100" unit="px" color="#222" />
</div>
