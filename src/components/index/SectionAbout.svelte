<script>
  import Container from "../utils/Container.svelte";
  import SectionHeading from "../utils/SectionHeading.svelte";
</script>

<div id="about"></div>
<div class="relative py-10 bg-[#111111] patterns text-gray-300">
  <!-- About Section -->
  <Container overflowHidden={false}>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="md:pr-10">
        <SectionHeading text1="Qui sommes" text2="Nous ?" />

        <div class="next-g-bg">
          <div class="max-w-4xl mx-auto">
            <div class="!text-justify">
              Fondée au Québec, <span class="text-brand-primary">
                Ménage Écolo
              </span>
              incarne l'excellence et l'audace, en ayant pour ambition une expansion
              tant nationale qu'internationale dans le secteur de l'entretien ménager
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

      <div class="flex items-center justify-center mt-10 sm:mt-0">
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

<div id="mission"></div>
<div class="py-10">
  <Container>
    <SectionHeading text1="Notre" text2="Mission" />

    <div class="text-center">
      « La propreté est un luxe à la portée de tout le monde »
      <span class="text-center text-brand-primary hidden md:inline">
        — Diane de Beausacq.
      </span>
    </div>

    <div class="mt-4 text-center text-brand-primary md:hidden">
      — Diane de Beausacq.
    </div>

    <div class="mt-4 text-center">
      Notre mission est d'offrir des services de ménage accessibles à tous,
      facilitant ainsi la conciliation entre travail et famille.
    </div>
  </Container>
</div>

<!-- CLientele -->
<div id="clientele"></div>
<div class="pb-10">
  <Container>
    <SectionHeading text1="Notre" text2="Clientèle" />

    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <!--  -->
      <div class="">
        <div
          class="h-[15rem] rounded-md cl-bg"
          style="background-image: url(/images/client-school.jpg);"
        />
        <div class="mt-4 text-center manrope text-black">
          Les écoles & les centres éducatifs
        </div>
      </div>
      <!--  -->
      <div class="">
        <div
          class="h-[15rem] rounded-md cl-bg"
          style="background-image: url(/images/client-restaurant.jpg);"
        />
        <div class="mt-4 text-center manrope text-black">
          Les restaurants et fast-food
        </div>
      </div>
      <!--  -->
      <div class="">
        <div
          class="h-[15rem] rounded-md cl-bg"
          style="background-image: url(/images/client-supermarket.jpg);"
        />
        <div class="mt-4 text-center manrope text-black">
          Les supermarchés et épiceries
        </div>
      </div>
      <!--  -->
      <div class="">
        <div
          class="h-[15rem] rounded-md cl-bg"
          style="background-image: url(/images/client-hospital.jpg);"
        />
        <div class="mt-4 text-center manrope text-black">
          Les centres hospitaliers (dentisterie, opticien…)
        </div>
      </div>
      <!--  -->
      <div class="">
        <div
          class="h-[15rem] rounded-md cl-bg"
          style="background-image: url(/images/client-office.jpg);"
        />
        <div class="mt-4 text-center manrope text-black">
          Les bureaux (banques, centre d’appels, agences…)
        </div>
      </div>
      <!--  -->
      <div class="">
        <div
          class="h-[15rem] rounded-md cl-bg"
          style="background-image: url(/images/client-house.jpg);"
        />
        <div class="mt-4 text-center manrope text-black">
          Les résidences (maisons, condos en construction, apparts...)
        </div>
      </div>
      <!--  -->
    </div>
  </Container>
</div>

<style>
  .cl-bg {
    background-size: cover;
    background-position: center;
  }

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
</style>
