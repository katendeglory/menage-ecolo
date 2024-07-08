<script>
  import Container from "./utils/Container.svelte";
  import config from "../stores/config";
</script>

<div
  class="relative"
  style="background-image: url(/images/bg-04.jpg); background-size: cover; background-position: center;"
>
  <div class="patterns flex items-center text-gray-300 py-12">
    <Container>
      <div class="mb-2">
        <div
          class="animate-character text-[1.85rem] leading-[2rem] md:text-5xl text-center mb-4 md:mb-6 uppercase tracking-widest pt-4 md:pt-6"
        >
          M.A.N. - Maison D'Adoration Pour les Nations
        </div>

        <div class="flex justify-center my-0">
          <div
            class="text-gray-400 tracking-wider rounded-md py-2 px-4 text-sm md:text-base max-w-4xl text-center"
          >
            Bienvenue sur votre profil,
            <span class="text-brand-primary">{$config.currentUser.name}</span> !
            glissez vers le bas pour faire vos changements.
          </div>
        </div>
      </div>

      <!-- <div class="grid gridcols-1 md:grid-cols-2 gap-2 md:gap-4">
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
      </div> -->
    </Container>
  </div>
</div>

<style>
  .patterns {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23000000' fill-opacity='0.025' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
</style>
