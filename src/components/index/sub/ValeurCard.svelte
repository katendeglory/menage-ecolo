<script>
  export let icon;
  export let t1;
  export let t2;
  export let desc;
  export let breakL = false;
</script>

<div class="patterns-2 px-2 py-2 rounded-md bg-white shadow-none">
  <div
    class="uppercase k-font flex flex-col items-center text-2xl sm:text-2xl flex-wrap tracking-wider"
  >
    <div
      class="text-6xl sm:text-7xl material-symbols-outlined text-brand-primary mr-2 drop-shadow-sm"
    >
      {icon}
    </div>
    <div
      class:flex-col={breakL}
      class="flex flex-col items-center justify-center mb-6 sm:mb-3"
    >
      <div class="font-light">{t1}</div>
      {#if t2}
        <div class="font-normal">{t2}</div>
      {/if}
    </div>
  </div>
  <div class="text-gray-600 text-[0.85rem] tracking-wide text-center">
    {desc}
  </div>
  <div class="mt-4 flex items-center justify-center">
    <div class="h-[1px] w-[8rem] bg-brand-primary/50"></div>
  </div>
</div>

<style>
  /* .patterns-2 {
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='12' viewBox='0 0 20 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 12c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 10 12c1.67 0 3.182-.683 4.27-1.785A5.998 5.998 0 0 0 14 12h2a4 4 0 0 1 4-4V6c-1.67 0-3.182.683-4.27 1.785C15.905 7.22 16 6.622 16 6c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 20 6V4a4 4 0 0 1-4-4h-2c0 .622.095 1.221.27 1.785A5.982 5.982 0 0 0 10 0C8.33 0 6.818.683 5.73 1.785 5.905 1.22 6 .622 6 0H4a4 4 0 0 1-4 4v2c1.67 0 3.182.683 4.27 1.785A5.998 5.998 0 0 1 4 6c0-.622.095-1.221.27-1.785A5.982 5.982 0 0 1 0 6v2a4 4 0 0 1 4 4h2zm-4 0a2 2 0 0 0-2-2v2h2zm16 0a2 2 0 0 1 2-2v2h-2zM0 2a2 2 0 0 0 2-2H0v2zm20 0a2 2 0 0 1-2-2h2v2zm-10 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' fill='%23000000' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E");
  } */
</style>
