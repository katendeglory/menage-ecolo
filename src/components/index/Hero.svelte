<script>
  import t from "../../utils/t";
  import Container from "../utils/Container.svelte";
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
              <span>« </span>
              <span>{t("Proprement", "Properly", "Correctamente")} </span>
              <span></span>
              <span></span>
              <span>{t("vert", "green", "verde")} </span>
              <span></span>
              <span>»</span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div
            class="mt-12 sm:mt-4 flex flex-col sm:flex-row items-center sm:space-x-2 space-y-2 sm:space-y-0"
          >
            <div class="wrd-container w-full flex items-center justify-center">
              <span class="!w-full">
                <a
                  href="/quote"
                  class="btn btn-secondary h-font !text-xl !px-10 tracking-widest !w-full"
                >
                  {t(
                    "Demander Une Quotation",
                    "Request a Quote",
                    "Solicitar presupuesto",
                  )}
                  <span class="material-symbols-outlined text-4xl ml-2">
                    export_notes
                  </span>
                </a>
              </span>
            </div>
            <!--  -->
            <div class="wrd-container w-full flex items-center justify-center">
              <span class="!w-full">
                <a
                  href="/#contact"
                  class="btn btn-black h-font !text-xl !px-10 tracking-widest !w-full"
                >
                  {t("Nous Contacter", "Contact Us", "Contáctenos")}
                  <span class="material-symbols-outlined text-4xl ml-2">
                    phone_in_talk
                  </span>
                </a>
              </span>
            </div>
          </div>

          <!-- Social Links -->
          <div class="wrd-container">
            <span class="mt-6 flex items-center justify-center space-x-1">
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61566358925143"
              >
                <!-- <img src="/images/fb.png" class="w-12" alt="" /> -->
                <ion-icon
                  class="text-2xl text-brand-primary mr-4"
                  name="logo-facebook"
                />
              </a>
              <a target="_blank" href="https://www.tiktok.com/@menage.ecolo">
                <ion-icon
                  class="text-2xl text-brand-primary mr-4"
                  name="logo-tiktok"
                />
                <!-- <img src="/images/tt.png" class="w-12" alt="" /> -->
              </a>
              <a target="_blank" href="https://www.instagram.com/menage.ecolo">
                <ion-icon
                  class="text-2xl text-brand-primary mr-0"
                  name="logo-instagram"
                />
                <!-- <img src="/images/ig.png" class="w-12" alt="" /> -->
              </a>
            </span>
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
