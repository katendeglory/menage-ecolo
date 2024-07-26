<script>
  import { onMount } from "svelte";
  import Container from "./../utils/Container.svelte";
  import t from "../../utils/t";

  const playVideo = (id) => {
    let vid = document.getElementById(id);
    vid.src = `/images/${id}.mp4`;
    vid.preload = "auto";
    vid.muted = true;
    vid.autoplay = true;
    vid.loop = true;
    vid.playsinline = true;
    vid["webkit-playsinline"] = true;
    vid.play();
    console.log(vid);
  };

  onMount(() => {
    playVideo("trailer-02-mobile");
    playVideo("trailer-02-desktop");
  });
</script>

<section class="showcase" id="methode">
  <!-- Mobile -->
  <div class="video-container md:hidden">
    <video id="trailer-02-mobile" muted autoplay loop playsinline>
      <source src="/images/trailer-02-mobile.mp4" type="video/mp4" />
    </video>
  </div>
  <!-- Desktop -->
  <div class="video-container hidden md:block">
    <video id="trailer-02-desktop" muted autoplay loop playsinline>
      <source src="/images/trailer-02-desktop.mp4" type="video/mp4" />
    </video>
  </div>
  <div class="content text-gray-300">
    <Container>
      <div class="flex flex-col md:flex-row relative">
        <div
          class="w-full h-[90vh] lg:w-3/5 flex flex-col justify-center relative z-10"
        >
          <h1
            class="mb-5 h-font text-6xl sm:text-6xl md:text-7xl lg:text-7xl !text-gray-300"
            style="filter: drop-shadow(1px 1px 1px rgba(0,0,0,.35));"
            data-aos="zoom-out-down"
            data-aos-easing="ease-in-sine"
            data-aos-offset="300"
            data-aos-duration="750"
            data-aos-delay="1000"
          >
            <span class="flex items-center">
              <img
                src="/banner-white.png"
                class="w-[85vw] sm:w-[50vw] md:max-w-md"
                alt="home"
              />
            </span>
          </h1>
          <div
            class="mb-5 text-gray-300 tracking-normal"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-offset="200"
            data-aos-duration="750"
            data-aos-delay="1250"
          >
            {@html t(
              `
            <div class="text-brand-primary">
              Une qualité de service hors paire !
            </div>

            <div class="mt-2 text-justify">
              Fatigué du vieux nettoyage ordinaire ? Améliorez votre espace de vie grâce à notre service de nettoyage de maison exceptionnel. Nous ne sommes pas que des nettoyeurs, nous sommes des artisans de la propreté, transformant votre maison en un sanctuaire immaculé.
            <br/>
            <br/>
              Notre attention méticuleuse aux détails et notre engagement indéfectible envers la qualité garantissent une expérience inégalée. 
            </div>
              `,
              `
            <div class="text-brand-primary">
              Unparalleled quality of service!
            </div>

            <div class="mt-2">
              Tired of the same old, mundane clean? Elevate your living space with our exceptional house cleaning service. We’re not just cleaners; we’re artisans of cleanliness, transforming your home into a pristine sanctuary. 
            <br/>
            <br/>
              Our meticulous attention to detail and unwavering commitment to quality ensure an unparalleled experience. 
            </div>`,
              `
            <div class="text-brand-primary">
              ¡Calidad de servicio incomparable!
            </div>
            <div clase="mt-2">
              ¿Cansado de la misma limpieza de siempre? Mejore su espacio vital con nuestro excepcional servicio de limpieza del hogar. No somos solo limpiadores; somos artesanos de la limpieza, transformando su hogar en un santuario impecable.
              <br/>
              <br/>
              Nuestra meticulosa atención a los detalles y nuestro compromiso inquebrantable con la calidad garantizan una experiencia incomparable.
            </div>
              `,
            )}
          </div>

          <div class="flex items-center">
            <a
              href="https://api.whatsapp.com/send?phone=+14389302992&text=Hello+Menage+Ecolo"
              target="_blank"
              class="btn btn-secondary h-font tracking-wider !bg-[#000000] !py-2 text-xl !text-gray-300 !border-0"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="750"
              data-aos-delay="1500"
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
          </div>
        </div>
        <div
          class="w-full pb-12 md:pb-0 md:h-[90vh] lg:w-2/5 flex items-center justify-center lg:justify-end relative z-10"
        />
      </div>
    </Container>
  </div>
</section>

<style>
  .showcase {
    height: 100vh;
    position: relative;
  }

  /* TODO, Fallback background here */
  .video-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: var(--primary-color)
      url("./https://traversymedia.com/downloads/cover.jpg") no-repeat center
      center/cover;
  }

  .video-container video {
    min-width: 100%;
    min-height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
  }

  .video-container:after {
    content: "";
    z-index: 1;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
  }

  .content {
    box-shadow: inset 50vw 0 70px -7px rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    /* background-color: rgba(0, 0, 0, 0.5); */
    background-image: linear-gradient(
      to right top,
      #039be520,
      #1da5ea20,
      #2fafee20,
      #3fb9f320,
      #4fc3f720
    );
  }
</style>
