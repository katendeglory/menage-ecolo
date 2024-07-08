<script>
  import Container from "./../../utils/Container.svelte";
</script>

<div class="relative showcase bg-[#111111] maison-bg min-h-screen">
  <div class="hidden md:block absolute bottom-0 left-0 right-0 w-full">
    <img src="/images/wave-haikei-white.svg" class="w-full" alt="pizza" />
  </div>
  <div class="md:hidden absolute bottom-0 left-0 right-0 w-full">
    <img
      src="/images/wave-haikei-white-mobile.svg"
      class="w-full"
      alt="pizza"
    />
  </div>

  <Container>
    <div
      class="h-[135vh] md:h-screen content flex flex-col justify-center md:flex-row md:items-center md:justify-start text-gray-300 -mt-8 md:pt-0"
    >
      <div class="w-full lg:w-3/5">
        <!--  -->
        <div
          class="drop-shadow-sm h-font text-[4rem] leading-[4.2rem] md:text-8xl uppercase"
        >
          Présentation pasteurs
        </div>
        <div class="md:pr-4 text-sm md:text-base mb-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
          nihil nobis quidem ad enim vitae dolorem quia omnis! Magni odit ipsam
          quam doloribus reiciendis nesciunt libero? Fugiat sequi vitae quasi
          maxime eveniet pariatur eum dignissimos iure reiciendis molestiae fuga
          repellendus nobis sit illo veniam deserunt, doloremque, animi
          consectetur perferendis ducimus!
        </div>
      </div>
      <!--  -->
      <div
        class="w-full lg:w-2/5 flex items-center justify-center pb-10 md:pb-0 md:pr-10"
      >
        <div
          class="h-[40vh] md:h-[90vh] w-full rounded-xl"
          style="background-image: url(/images/israelk-1.jpg); background-size: cover; background-position: top;"
        ></div>
      </div>
    </div></Container
  >
</div>

<style>
  .showcase {
    position: relative;
  }

  .maison-bg {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23ffffff' fill-opacity='0.015' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
</style>
