<script>
  import t from "../../utils/t";
  import Container from "../utils/Container.svelte";
</script>

<div class="relative showcase bg-[#111111] contact-bg">
  <div
    class="content flex items-center text-gray-300 h-[90vh] pt-14 pb-8 md:pt-0 md:pb-0"
  >
    <Container>
      <div class="mb-2">
        <span
          class="flex items-center justify-center text-6xl sm:text-8xl h-font drop-shadow-lg"
        >
          <!-- <img src="/images/favicon.png" class="w-10 mr-2" alt="home" /> -->
          <span class="text-brand-white">menag </span>
          <span class="text-brand-primary">ecolo</span>
        </span>

        <div
          class="tracking-widest text-lg mb-4 flex items-center justify-center"
        >
          <div
            class="text-base flex items-center justify-center tracking-wide text-center"
          >
            {t(
              "Utilisez les informations ci-bas pour nous contacter.",
              "Use the information below to contact us.",
              "Utilice la siguiente información para contactarnos.",
            )}
          </div>
        </div>

        <div class="flex justify-center relative z-10">
          <div class="text-gray-200 text-sm md:text-base text-center">
            <a href="tel:+1438-930-2992" class="contact-box !text-gray-400">
              <span
                class="material-symbols-outlined mr-2 text-3xl text-brand-primary"
              >
                phone_callback
              </span>
              +1 438-930-2992
            </a>
            <span
              href="tel:+243 995 216 163"
              class="contact-box !text-gray-400"
            >
              <span
                class="material-symbols-outlined mr-2 text-3xl text-brand-primary"
              >
                location_on
              </span>
              {t("Situé au Canada", "Located In Canada", "Ubicado en Canadá")}
            </span>
            <a
              href="mailto:info@menageecolo.ca"
              class="contact-box !text-gray-400"
            >
              <span
                class="material-symbols-outlined mr-2 text-3xl text-brand-primary"
              >
                mail
              </span>
              info@menageecolo.ca
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=+14389302992&text=Hello+Menage+Ecolo"
              target="_blank"
              class="mt-4 btn btn-aurora !px-12 !py-1 h-[2.75rem] !text-white bg-gradient-to-r to-[#25D366] from-brand-primary"
            >
              <ion-icon name="logo-whatsapp" class="text-xl mr-2" />
              Whatsapp
            </a>
          </div>
        </div>
      </div>
    </Container>

    <div class="absolute bottom-2 left-0 w-full">
      <Container>
        <div class="h-font flex items-center justify-between md:justify-start">
          <div>&copy; 2024</div>
          <a
            class="md:whitespace-nowrap ml-2 text-right flex items-center"
            target="_blank"
            href="https://glorykatende.com"
          >
            🎨 Design By Glory K.
            <span class="material-symbols-outlined text-3xl ml-1">
              trending_flat
            </span>
          </a>
        </div>
      </Container>
    </div>
  </div>
</div>

<style>
  .contact-box {
    text-align: center;
    color: #fff;
    display: flex;
    align-items: center;
  }

  .showcase {
    height: 90vh;
    position: relative;
  }

  .contact-bg {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23ffffff' fill-opacity='0.015' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
</style>
