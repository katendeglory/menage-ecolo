<script>
  import t from "../../utils/t";
  import Container from "../utils/Container.svelte";
</script>

<div id="contact"></div>

<div class="relative showcase bg-white contact-bg">
  <!-- class="content flex items-center text-gray-800 h-[90vh] pt-14 pb-4 md:pt-0 md:pb-0" -->
  <div class="content flex items-center justify-center text-gray-800 h-[90vh]">
    <Container>
      <div>
        <span class="flex items-center justify-center">
          <img
            src="/favicon.png"
            class="h-[45vh] sm:h-[60vh] md:max-h-md"
            alt="home"
          />
        </span>

        <div class="relative z-10">
          <div
            class="text-gray-800 text-sm md:text-base text-center flex flex-col items-center"
          >
            <a
              href="tel:+1438-930-2992"
              class="contact-box flex items-center !text-brand-primary"
            >
              <span class="material-symbols-outlined mr-2 text-3xl">
                phone_callback
              </span>
              +1 438-930-2992
            </a>

            <div class="mt-2 flex items-center justify-center">
              {t(
                "« Propre pour vous, sain pour la planète »",
                "« Clean for you, healthy for the planet »",
                "« Limpio para ti, saludable para el planeta »",
              )}
            </div>

            <div class="mt-4 flex items-center justify-center space-x-1">
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61566358925143"
              >
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
              </a>
              <a target="_blank" href="https://www.instagram.com/menage.ecolo">
                <ion-icon
                  class="text-2xl text-brand-primary mr-0"
                  name="logo-instagram"
                />
              </a>
            </div>

            <div class="mt-2 flex items-center justify-center">
              <div>&copy; Tous droits réservés Ménage Ecolo - 2024</div>
            </div>
          </div>
        </div>
      </div>
    </Container>

    <!-- <div class="absolute bottom-4 left-0 w-full">
      <Container>
        <div class="flex items-center justify-center">
          <div>&copy; Tous droits réservés Ménage Ecolo - 2024</div>
        </div>
      </Container>
    </div> -->
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
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23222222' fill-opacity='0.01' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
</style>
