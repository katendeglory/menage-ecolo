<script>
  export let text = "Not Content Found";
</script>

<div class="w-full h-80 my-8 flex flex-col items-center justify-center">
  <h1
    class="mb-6 text-gray-500 flex items-center text-xl uppercase tracking-widest"
  >
    <span class="flex items-center">
      <ion-icon name="alert-circle" class="text-3xl text-brand-primary mr-2" />
    </span>
    {text}
  </h1>
  <!-- <img src="./images/not-found.svg" alt="notfound" class="max-w-xs" /> -->
  <img src="/favicon.png" alt="notfound" class="max-w-[10rem]" />
</div>
