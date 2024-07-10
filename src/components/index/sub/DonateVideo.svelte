<script>
  import { onMount } from "svelte";
  import Container from "../../utils/Container.svelte";

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
    playVideo("dons-01");
  });
</script>

<section class="showcase h-[90vh] sm:h-screen" id="home">
  <div class="video-container">
    <video id="dons-01" muted autoplay loop playsinline>
      <source src="/images/dons-01.mp4" type="video/mp4" />
    </video>
  </div>
  <div class="content text-gray-300">
    <Container>
      <div class="flex flex-col md:flex-row relative">
        <div
          class="w-full h-screen lg:w-3/5 flex flex-col justify-center relative z-10"
        >
          <h1
            class="mt-[-7.5rem] mb-5 h-font md:pt-10 text-5xl md:text-6xl !text-gray-300"
            style="filter: drop-shadow(1px 1px 1px rgba(0,0,0,.35));"
            data-aos="zoom-out-down"
            data-aos-easing="ease-in-sine"
            data-aos-offset="300"
            data-aos-duration="750"
            data-aos-delay="1000"
          >
            Partagez votre générosité en ligne, Faites un don pour soutenir
            notre mission.
          </h1>
          <p
            class="mb-5 text-gray-300"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-offset="200"
            data-aos-duration="750"
            data-aos-delay="1250"
          >
            Bienvenue dans notre portail de dons en Ligne !
          </p>

          <div class="flex items-center">
            <a
              href="#how"
              class="btn btn-primary tracking-wider !bg-brand-primary !py-4 !text-gray-300 !border-0"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="750"
              data-aos-delay="1500"
            >
              Comment Procéder
              <ion-icon name="heart-circle-outline" class="text-2xl ml-2" />
            </a>
          </div>
        </div>
        <div
          class="w-full pb-12 md:pb-0 md:h-screen lg:w-2/5 flex items-center justify-center lg:justify-end relative z-10"
        />
      </div>
    </Container>
  </div>
</section>

<style>
  .showcase {
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
    background: rgba(0, 0, 0, 0.4);
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
    /* background-color: rgba(0, 0, 0, 0.4); */
    background-image: linear-gradient(
      to right top,
      #039be510,
      #1da5ea10,
      #2fafee10,
      #3fb9f310,
      #4fc3f710
    );
  }
</style>
