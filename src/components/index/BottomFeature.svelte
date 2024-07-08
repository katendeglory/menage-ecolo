<script>
  import config from "../../stores/config";
  import Container from "../utils/Container.svelte";
  export let isVisitor = true;
</script>

<div class="py-10" />

<div
  class="relative"
  style="background-image: url(/images/03.jpg); background-size: cover; background-position: center;"
>
  <div class="overlay-medium">
    <div
      class="patterned flex items-center text-gray-300 min-h-screen pt-14 pb-16 md:pt-0 md:pb-0"
    >
      <Container>
        <div class="mb-2">
          <div
            class="animate-character text-[2rem] leading-[2.15rem] md:text-6xl text-center mb-4 md:mb-6 uppercase tracking-widest pt-4 md:pt-6"
          >
            Apprenez une nouvelle compétence à votre rythme
          </div>

          <div class="flex items-center justify-center">
            <a
              href="/#webinars"
              class="pr-1 border-b border-dashed border-brand-primary tracking-widest text-lg md:text-xl mb-2 text-brand-primary flex items-center justify-center"
            >
              <div class="flex items-center justify-center">
                <span
                  class="material-symbols-outlined text-2xl md:text-3xl mr-2"
                >
                  play_circle
                </span>
              </div>
              <div class="flex items-center justify-center">Voir nos cours</div>
            </a>
          </div>

          <div class="flex justify-center my-6">
            <div
              class="text-gray-200 tracking-wider rounded-md py-2 px-4 text-sm md:text-base max-w-4xl text-center"
            >
              Bienvenue sur notre plateforme! Nous mettons à votre disposition
              des formations vidéos portant sur le developpement, la découverte
              et l'expension de votre potentiel. Toutes nos formations sont
              disponible et dès l'instant ou vous avez crée votre compte.
            </div>
          </div>
        </div>

        {#if isVisitor}
          <div class="mb-4 grid gap-x-4 gap-y-3 grid-cols-1 md:grid-cols-2">
            <div class="">
              <a href="/register" class="!w-full btn btn-secondary">
                Inscription
                <span class="material-symbols-outlined ml-2 text-3xl">
                  app_registration
                </span>
              </a>
            </div>
            <div class="">
              <a href="/login" class="!w-full btn btn-secondary">
                Connexion
                <span class="material-symbols-outlined ml-2 text-3xl">
                  input
                </span>
              </a>
            </div>
          </div>
        {:else}
          <div class="mb-6">
            <a href="/my-courses" class="mx-auto btn btn-secondary">
              <span class="material-symbols-outlined mr-2 text-3xl">
                play_lesson
              </span>
              Vos Cours Suivis ({$config.currentUser.conferences.length})
            </a>
          </div>
        {/if}

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="stat-box rounded-lg px-4 py-4">
            <div class="flex items-center text-xl uppercase text-brand-primary">
              <span
                class="material-symbols-outlined text-4xl mr-2 text-brand-primary"
              >
                ads_click
              </span>
              Sans interruption
            </div>
            <div class="text-sm">
              A votre disposition, une gamme varié des cours que vous pouvez
              suivre à la demande.
            </div>
          </div>
          <div class="stat-box rounded-lg px-4 py-4">
            <div class="flex items-center text-xl uppercase text-brand-primary">
              <span
                class="material-symbols-outlined text-4xl mr-2 text-brand-primary"
              >
                military_tech
              </span>
              Mentorat
            </div>
            <div class="text-sm">
              Bénéficiez de plusieurs formations données par des experts dans
              leurs domaines.
            </div>
          </div>
          <div class="stat-box rounded-lg px-4 py-4">
            <div class="flex items-center text-xl uppercase text-brand-primary">
              <span
                class="material-symbols-outlined text-4xl mr-2 text-brand-primary"
              >
                devices
              </span>
              Accessible
            </div>
            <div class="text-sm">
              Nos cours sont accessible et disponible depuis n'importe quel
              appareil electronique.
            </div>
          </div>
        </div>
      </Container>
    </div>
  </div>
</div>

<style>
  .patterned {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23000000' fill-opacity='0.025' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }

  .stat-box {
    text-align: center;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.3);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: rgba(255, 255, 255, 0.07);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
  }
</style>
