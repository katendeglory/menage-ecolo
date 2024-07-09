<script>
  import Container from "./utils/Container.svelte";
  import config from "../stores/config";
</script>

<div
  class="relative"
  style="background-image: url(/images/03.jpg); background-size: cover; background-position: center;"
>
  <div class="overlay-medium flex items-center text-gray-300 py-8">
    <Container>
      <div class="mb-2">
        <div
          class="animate-character text-[2rem] leading-[2.15rem] md:text-6xl text-center mb-4 md:mb-6 uppercase tracking-widest pt-4 md:pt-6"
        >
          Ménage Écolo - La propreté est un luxe à la portée de tout le monde
        </div>

        <div class="flex justify-center my-0">
          <div
            class="text-gray-200 tracking-wider rounded-md py-2 px-4 text-sm md:text-base max-w-4xl text-center"
          >
            Bienvenue sur notre plateforme, {$config.currentUser.name}! glissez
            vers le bas pour acceder a vos cours.
          </div>
        </div>
      </div>

      <div class="grid gridcols-1 md:grid-cols-2 gap-2 md:gap-4">
        <a href="/#webinars" class="mx-auto btn !w-full btn-aurora">
          <span class="material-symbols-outlined mr-2 text-3xl"> school </span>
          Voir tous nos cours
        </a>
        <a href="/my-courses" class="mx-auto btn !w-full btn-secondary">
          <span class="material-symbols-outlined mr-2 text-3xl">
            play_lesson
          </span>
          Vos Cours Suivis ({$config.currentUser.conferences.length})
        </a>
      </div>
    </Container>
  </div>
</div>

<style>
  .stat-box {
    text-align: center;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.3);
    /* background-color: rgba(255, 255, 255, 0.2); */
    /* padding: 20px 20px 15px 20px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: rgba(255, 255, 255, 0.07);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
  }
</style>
