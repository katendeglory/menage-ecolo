<script>
  export let icon;
  export let t1;
  export let t2;
  export let desc;
</script>

<div
  class="px-4 py-4 rounded-md bg-[#191919] border border-gray-700/20 shadow-lg"
>
  <div
    class="uppercase k-font flex items-center text-2xl sm:text-3xl flex-wrap tracking-widest"
  >
    <span class="text-3xl material-symbols-outlined text-brand-primary mr-2">
      {icon}
    </span>
    <span class="font-extralight mr-2">{t1}</span>
    <span class="font-medium underline underline-offset-8 decoration-white/25">
      {t2}
    </span>
  </div>
  <div class="mt-8 sm:mt-4 text-gray-300 text-[0.9rem] tracking-wide">
    {desc}
  </div>
</div>
