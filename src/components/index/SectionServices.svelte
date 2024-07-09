<script>
  import Container from "../utils/Container.svelte";
  import SectionHeading from "../utils/SectionHeading.svelte";
</script>

<div id="about"></div>

<div class="relative pt-8">
  <!-- About Section -->
  <Container overflowHidden={false}>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="md:pr-10">
        <SectionHeading text1="Qui sommes" text2="Nous ?" />

        <div class="next-g-bg text-sm">
          <div class="max-w-4xl mx-auto">
            <div class="!text-justify">
              Fondée au Québec, Ménage Écolo incarne l'excellence et l'audace,
              en ayant pour ambition une expansion tant nationale
              qu'internationale dans le secteur de l'entretien ménager
              résidentiel, commercial et institutionnel.
              <div class="mt-4"></div>
              Nos équipes combinent une profonde expertise dans le domaine de l'entretien
              ménager, une compétence affirmée en stratégies numériques et développement
              technologique et éco-responsable.
              <div class="mt-4"></div>
              Notre vision est de révolutionner les standards de l'entretien ménager
              en offrant des solutions et des approches novatrices.
              <div class="mt-4"></div>
            </div>

            <div class="flex flex-col items-center justify-center">
              <div
                class="pr-circle rounded-full flex items-center justify-center h-[6rem] w-[6rem] mr-2"
              >
                <div
                  class="rounded-full h-[5.75rem] w-[5.75rem] overflow-hidden bg-center bg-cover"
                  style="background-image: url(/images/israelk-5.jpg);"
                />
              </div>
              <div class="mt-2 font-normal">Jenny Rehema, Fondatrice.</div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center">
        <!--  -->
        <div
          class="h-[45vh] md:h-[75vh] w-full rounded-xl"
          style="background-image: url(/images/background-03.jpg); background-size: cover; background-position: top;"
        >
          <!--  -->
        </div>
      </div>
    </div>
  </Container>
</div>

<div class="pt-20 pb-10 bg-[#111111] patterns">
  <SectionHeading
    secondColorClass="text-brand-white-light"
    text1="Nos"
    text2="Programmes"
    breakWord
  />

  <Container>
    <div class="text-gray-300">
      Voici notre programme hebdomadaire:
      <div class="mt-4"></div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pb-4">
        <!--  -->
        <div
          class="patterns-2 px-4 py-2 rounded-md bg-[#111111] border border-gray-700/20 shadow-lg"
        >
          <div
            class="k-font tracking-widest flex items-center text-brand-primary"
          >
            <span class="material-symbols-outlined text-2xl mr-2"> event </span>
            MERCREDI :
          </div>
          <div class="text-gray-400 tracking-widest text-sm flex items-center">
            <span class="material-symbols-outlined text-2xl mr-2"> watch </span>
            16H30 À 18H30
          </div>
          <div
            class="mt-2 mb-2 k-font text-2xl text-white bg-[#111111] rounded-md px-3 pt-3 pb-4 tracking-widest"
          >
            <span class="font-extralight">CULTE</span>
            <span class="font-medium">D'ENSEIGNEMENT</span>
          </div>
        </div>
        <!--  -->
        <!--  -->
        <div
          class="patterns-2 px-4 py-2 rounded-md bg-[#111111] border border-gray-700/20 shadow-lg"
        >
          <div
            class="k-font tracking-widest flex items-center text-brand-primary"
          >
            <span class="material-symbols-outlined text-2xl mr-2"> event </span>
            VENDREDI :
          </div>
          <div class="text-gray-400 tracking-widest text-sm flex items-center">
            <span class="material-symbols-outlined text-2xl mr-2"> watch </span>
            16H30 À 19H00
          </div>
          <div
            class="mt-2 mb-2 k-font text-2xl text-white bg-[#111111] rounded-md px-3 pt-3 pb-4 tracking-widest"
          >
            <span class="font-extralight">CHAMBRE</span>
            <span class="font-medium">HAUTE</span>
          </div>
        </div>
        <!--  -->
        <!--  -->
        <div
          class="patterns-2 px-4 py-2 rounded-md bg-[#111111] border border-gray-700/20 shadow-lg"
        >
          <div
            class="k-font tracking-widest flex items-center text-brand-primary"
          >
            <span class="material-symbols-outlined text-2xl mr-2"> event </span>
            DIMANCHE :
          </div>
          <div class="text-gray-400 tracking-widest text-sm flex items-center">
            <span class="material-symbols-outlined text-2xl mr-2"> watch </span>
            08H30 À 11H00
          </div>
          <div
            class="mt-2 mb-2 k-font text-2xl text-white bg-[#111111] rounded-md px-3 pt-3 pb-4 tracking-widest"
          >
            <span class="font-extralight">CULTE</span>
            <span class="font-medium">DOMINICAL</span>
          </div>
        </div>
        <!--  -->
        <!--  -->
        <div
          class="patterns-2 px-4 py-2 rounded-md bg-[#111111] border border-gray-700/20 shadow-lg"
        >
          <div
            class="k-font tracking-widest flex items-center text-brand-primary"
          >
            <span class="material-symbols-outlined text-2xl mr-2"> event </span>
            LUNDI AU VENDREDI :
          </div>
          <div class="text-gray-400 tracking-widest text-sm flex items-center">
            <span class="material-symbols-outlined text-2xl mr-2"> watch </span>
            06H30 À 08H00
          </div>
          <div
            class="mt-2 mb-2 k-font text-2xl text-white bg-[#111111] rounded-md px-3 pt-3 pb-4 tracking-widest"
          >
            <span class="font-extralight">DÉVOTION</span>
            <span class="font-medium">MATINALE</span>
          </div>
        </div>
        <!--  -->
        <!--  -->
      </div>
    </div>
  </Container>
</div>

<style>
  .pr-circle {
    background-image: linear-gradient(45deg, #c68101 50%, #333 50%);
  }

  .patterns {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23ffffff' fill-opacity='0.0075' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }

  /* .next-g-bg {
    background-image: url(/favicon.png);
    background-size: 85vh;
    background-repeat: no-repeat;
    background-position: center;
  } */

  .patterns-2 {
    background-image: url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%23ffffff' fill-opacity='0.025' fill-rule='evenodd'/%3E%3C/svg%3E");
  }
</style>
