<script>
  import { onMount } from "svelte";
  import Container from "./../utils/Container.svelte";

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
    playVideo("trailer");
  });
</script>

<section class="showcase" id="home">
  <div class="video-container">
    <video id="trailer" muted autoplay loop playsinline>
      <source src="/images/trailer.mp4" type="video/mp4" />
    </video>
  </div>
  <div class="content text-gray-300">
    <Container>
      <div class="flex flex-col md:flex-row relative">
        <div
          class="w-full h-screen lg:w-3/5 flex flex-col justify-center relative z-10"
        >
          <h1
            class="mt-[-7.5rem] mb-5 h-font md:pt-10 text-6xl sm:text-6xl md:text-7xl lg:text-7xl !text-gray-300"
            style="filter: drop-shadow(1px 1px 1px rgba(0,0,0,.35));"
            data-aos="zoom-out-down"
            data-aos-easing="ease-in-sine"
            data-aos-offset="300"
            data-aos-duration="750"
            data-aos-delay="1000"
          >
            <ion-icon name="logo-youtube" class="translate-y-2" />
            Suivre MAN TV sur Youtube.
          </h1>
          <p
            class="mb-5 text-gray-300"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-offset="200"
            data-aos-duration="750"
            data-aos-delay="1250"
          >
            Ramener les Nations à genoux à la croix par l'Enseignement de la
            Parole et la Puissance du Saint-Esprit. MAN TV mets à votre
            disposition une vaste librairie de programmes édifiants.
          </p>

          <div class="flex items-center">
            <div
              class="w-14 h-14 rounded-full mr-3 border border-gray-300"
              style="background-image: url(/images/man-tv.jpg); background-size: cover; background-position: center;"
              data-aos="fade-right"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="750"
              data-aos-delay="1750"
            />
            <!--  -->
            <a
              href="https://www.youtube.com/@mantv6688"
              class="btn btn-primary tracking-wider !bg-[#000000] !py-4 !text-gray-300 !border-0"
              target="_blank"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="750"
              data-aos-delay="1500"
            >
              Suivre notre Chaine
              <ion-icon name="play-circle" class="text-2xl ml-2" />
            </a>
          </div>
        </div>
        <div
          class="w-full pb-12 md:pb-0 md:h-screen lg:w-2/5 flex items-center justify-center lg:justify-end relative z-10"
        />
      </div>
    </Container>
  </div>

  <div class="hidden md:block absolute bottom-0 left-0 right-0 w-full z-[20]">
    <img src="/images/wave-haikei.svg" class="w-full" alt="pizza" />
  </div>
  <div class="md:hidden absolute bottom-0 left-0 right-0 w-full z-[20]">
    <img src="/images/wave-haikei-mobile.svg" class="w-full" alt="pizza" />
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
