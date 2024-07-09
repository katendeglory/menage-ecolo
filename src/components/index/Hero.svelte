<script>
  import Container from "../utils/Container.svelte";
  // 1, 6, 8, 12
</script>

<div class="pb-16 hidden" />

<div
  class="hero-bg text-gray-600 relative h-[100vh] min-h-[100vh]"
  style="background-image: url(/images/background-01.jpg); background-size: cover"
>
  <div class="patterns h-[100vh] min-h-[100vh]">
    <div
      class="flex items-center bg-black/40 text-gray-300 h-[100vh] min-h-[100vh] pt-[8rem]"
    >
      <div class="flex items-center justify-center w-full">
        <Container>
          <div
            class="wrd-container drop-shadow-sm h-font text-[4.25rem] leading-[4.5rem] md:text-9xl text-center uppercase max-w-5xl mx-auto"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span>Ménage </span>
            <span></span>
            <span class="text-brand-primary">Écolo</span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div class="mt-10 sm:mt-4 bg-black/50 py-2 px-2 rounded-lg">
            <div
              class="wrd-container text-center text-base !font-thin text-gray-200"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span>« La propreté</span>
              <span>est</span>
              <span>un luxe</span>
              <span>à la portée</span>
              <span>de tout</span>
              <span>le monde »</span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div
            class="mt-12 sm:mt-4 flex flex-col sm:flex-row items-center sm:space-x-2 space-y-2 sm:space-y-0"
          >
            <div class="wrd-container flex items-center justify-center">
              <span>
                <a
                  href="/#quote"
                  target="_blank"
                  class="btn btn-secondary h-font !text-xl !px-10 tracking-widest !w-[90vw] sm:!w-min"
                >
                  Demander Une Quotation
                  <span class="material-symbols-outlined text-4xl ml-2">
                    export_notes
                  </span>
                </a>
              </span>
            </div>
            <!--  -->
            <div class="wrd-container flex items-center justify-center">
              <span>
                <a
                  href="/#contact"
                  target="_blank"
                  class="btn btn-black h-font !text-xl !px-10 tracking-widest !w-[90vw] sm:!w-min"
                >
                  Nous Contacter
                  <span class="material-symbols-outlined text-4xl ml-2">
                    phone_in_talk
                  </span>
                </a>
              </span>
            </div>
          </div>
        </Container>
      </div>
    </div>
  </div>
</div>

<style>
  .patterns {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.2' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  }

  @keyframes scaleDownDesktop {
    from {
      background-size: 175% auto;
    }

    to {
      background-size: 100% auto;
    }
  }

  @keyframes scaleDownMobile {
    from {
      background-size: auto 175%;
    }

    to {
      background-size: auto 100%;
    }
  }

  @media (min-width: 700px) {
    .hero-bg {
      animation: 6s scaleDownDesktop forwards;
      background-position-x: center;
    }
  }
  @media (max-width: 699px) {
    .hero-bg {
      background-position: top;
      animation: 6s scaleDownMobile forwards;
    }
  }
</style>
