<script>
  import { onMount } from "svelte";
  import VisionCard from "./sub/VisionCard.svelte";
  import t from "../../utils/t";
  import Container from "../utils/Container.svelte";
  import SectionHeading from "../utils/SectionHeading.svelte";

  let visionFR = [
    {
      icon: "ads_click",
      t1: "ACCESSIBILITÉ",
      t2: "UNIVERSELLE",
      desc: `Offrir des services de ménage abordables et de haute qualité pour tous les types de foyers, indépendamment de leurs revenus ou de leur taille.`,
    },
    {
      icon: "event_available",
      t1: "FLEXIBILITÉ",
      t2: "DES HORAIRES",
      desc: `Proposer des plages horaires flexibles pour les services de ménage, afin de s'adapter aux emplois du temps variés des clients.`,
    },
    {
      icon: "energy_savings_leaf",
      t1: "ÉCOLOGIQUE",
      t2: "& DURABLE",
      desc: `Utiliser des produits de nettoyage écologiques et adopter des pratiques durables pour minimiser l'impact environnemental.`,
    },
    {
      icon: "emoji_events",
      t1: "FORMATION",
      t2: "& PROFESSIONNALISME",
      desc: `Former continuellement le personnel pour garantir un service de ménage professionnel, fiable et respectueux des standards de sécurité et de qualité.`,
    },
    {
      icon: "instant_mix",
      t1: "PERSONNALISATION",
      t2: "DES SERVICES",
      desc: `Offrir des options de ménage personnalisées pour répondre aux besoins spécifiques de chaque foyer, qu'il s'agisse de nettoyages réguliers, de nettoyages en profondeur ou de services spécifiques tels que le nettoyage après rénovation.`,
    },
  ];

  let visionEN = [
    {
      icon: "ads_click",
      t1: "UNIVERSAL",
      t2: "ACCESSIBILITY",
      desc: `Offering affordable, high-quality housekeeping services for all types of households, regardless of income or size.`,
    },
    {
      icon: "event_available",
      t1: "FLEXIBILE",
      t2: "SCHEDULES",
      desc: `Offer flexible time slots for housekeeping services to accommodate guests' varying schedules.`,
    },
    {
      icon: "energy_savings_leaf",
      t1: "ECOLOGICAL",
      t2: "& SUSTAINABLE",
      desc: `Use eco-friendly cleaning products and adopt sustainable practices to minimize environmental impact.`,
    },
    {
      icon: "emoji_events",
      t1: "TRAINING",
      t2: "& PROFESSIONALISM",
      desc: `Continuously train staff to guarantee a professional, reliable cleaning service that respects safety and quality standards.`,
    },
    {
      icon: "instant_mix",
      t1: "CUSTOMIZED",
      t2: "SERVICES",
      desc: `Offering personalized cleaning options to meet the specific needs of each household, whether regular cleanings, deep cleanings or specific services such as post-renovation cleaning.`,
    },
  ];

  let visionES = [
    {
      icon: "ads_click",
      t1: "ACCESIBILIDAD",
      t2: "UNIVERSAL",
      desc: `Ofrecemos servicios de limpieza asequibles y de alta calidad para todo tipo de hogares, independientemente de sus ingresos o tamaño.`,
    },
    {
      icon: "event_available",
      t1: "FLEXIBILIDAD",
      t2: "HORARIOS",
      desc: `Ofrecer franjas horarias flexibles para los servicios de limpieza para adaptarse a los diferentes horarios de los huéspedes.`,
    },
    {
      icon: "energy_savings_leaf",
      t1: "ECOLÓGICO",
      t2: "& SOSTENIBLE",
      desc: `Utilice productos de limpieza ecológicos y adopte prácticas sostenibles para minimizar el impacto ambiental.`,
    },
    {
      icon: "emoji_events",
      t1: "ENTRENAMIENTO",
      t2: "& PROFESIONALISMO",
      desc: `Capacitar continuamente al personal para garantizar un servicio de limpieza profesional, confiable y que respete los estándares de seguridad y calidad.`,
    },
    {
      icon: "instant_mix",
      t1: "PERSONALIZACIÓN",
      t2: "SERVICIOS",
      desc: `Ofrecer opciones de limpieza personalizadas para satisfacer las necesidades específicas de cada hogar, ya sean limpiezas periódicas, limpiezas profundas o servicios específicos como limpieza post-renovación.`,
    },
  ];

  let vision = [];

  const setVisionData = () => {
    let lang = localStorage.getItem("lang");
    if (lang == "en") vision = [...visionEN];
    else if (lang == "es") vision = [...visionES];
    else vision = [...visionFR];
  };

  onMount(() => {
    setVisionData();
  });
</script>

<!-- A Props -->
<div id="about" />
<div class="relative py-10 bg-[#111111] patterns text-gray-300">
  <Container overflowHidden={false}>
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="md:pr-10 flex flex-col justify-center">
        <SectionHeading
          text1={t("Qui sommes", "Who Are", "Quiénes ")}
          text2={t("Nous ?", "We ?", "somos ?")}
          padded={false}
        />

        <div class="next-g-bg">
          <div class="max-w-4xl mx-auto flex items-center">
            <div class="!text-justify">
              {@html t(
                `
              Fondée au Québec, <span class="text-brand-primary">Ménage Écolo</span>
              incarne l'excellence et l'audace, en ayant pour ambition une expansion
              tant nationale qu'internationale dans le secteur de l'entretien ménager
              résidentiel, commercial et institutionnel.
              <div class="mt-4" />
              Nos équipes combinent une profonde expertise dans le domaine de l'entretien
              ménager, une compétence affirmée en stratégies numériques et développement
              technologique et éco-responsable.
              <div class="mt-4" />
              Notre vision est de révolutionner les standards de l'entretien ménager
              en offrant des solutions et des approches novatrices.
              <div class="mt-4" />
              `,
                `
              Founded in Quebec, <span class="text-brand-primary">Ménage Écolo</span>
              embodies excellence and audacity, with the ambition of expansion
              both national and international in the housekeeping sector
              residential, commercial and institutional.
              <div class="mt-4" />
              Our teams combine deep expertise in the field of maintenance
              housekeeping, proven skills in digital strategies and development
              technological and eco-responsible.
              <div class="mt-4" />
              Our vision is to revolutionize the standards of housekeeping
              by offering innovative solutions and approaches.
              <div class="mt-4" />
              `,
                `
              Fundada en Quebec, <span class="text-brand-primary">Ménage Écolo</span>
              encarna la excelencia y la audacia, con la ambición de expansión
              tanto nacional como internacional en el sector del housekeeping
              residencial, comercial e institucional.
              <div class="mt-4" />
              Nuestros equipos combinan una profunda experiencia en el campo del mantenimiento.
              limpieza, habilidades comprobadas en estrategias y desarrollo digitales
              Tecnológico y eco-responsable.
              <div class="mt-4" />
              Nuestra visión es revolucionar los estándares de limpieza.
              ofreciendo soluciones y enfoques innovadores.
              <div class="mt-4" />
              `,
              )}

              <a
                href="/#mission"
                class="mt-2 btn btn-secondary h-font !text-xl !px-10 !py-2 tracking-widest !w-full"
              >
                {t("Notre mission", "Our mission", "Nuestra misión")}
                <span class="material-symbols-outlined text-3xl ml-2">
                  step_into
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-center mt-10 sm:mt-0">
        <!--  -->
        <div
          class="h-[45vh] md:h-[70vh] w-full rounded-xl"
          style="background-image: url(/images/background-03.jpg); background-size: cover; background-position: top;"
        >
          <!--  -->
        </div>
      </div>
    </div>
  </Container>
</div>

<!-- Mission -->
<div id="mission" />
<div class="py-10">
  <Container>
    <SectionHeading
      text1={t("Notre", "Our", "Nuestra")}
      text2={t("Mission", "Mission", "Misión")}
    />

    {@html t(
      `
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
      `,
      `
      <div class="text-center">
      "Cleanliness is a luxury within everyone’s reach"
      <span class="text-center text-brand-primary hidden md:inline">
      — Diane de Beausacq.
      </span>
      </div>

      <div class="mt-4 text-center text-brand-primary md:hidden">
      — Diane de Beausacq.
      </div>

      <div class="mt-4 text-center">
      Our mission is to offer cleaning services accessible to all,
      thus facilitating the balance between work and family.
      </div>
      `,
      `
      <div class="text-center">
      "La limpieza es un lujo al alcance de todos"
      <span class="text-center text-brand-primary md oculto:en línea">
      —Diana de Beausacq.
      </span>
      </div>
      
      <div class="mt-4 text-center text-brand-primary md:hidden">
      —Diana de Beausacq.
      </div>
      
      <div class="mt-4 text-center">
      Nuestra misión es ofrecer servicios de limpieza accesibles para todos,
      facilitando así el equilibrio entre trabajo y familia.
      </div>
      `,
    )}
  </Container>
</div>

<!-- Vision -->
<div id="vision" />
<div class="pt-20 pb-10 bg-[#111111] patterns">
  <SectionHeading text1="" text2={t("Vision", "Vision", "Visión")} breakWord />

  <Container>
    <div class="text-gray-300">
      {t(
        "La vision de Ménage écolo se resume en 5 points:",
        "The vision of Ménage Écolo can be summed up in 5 points:",
        "La visión de Ménage Écolo se puede resumir en 5 puntos:",
      )}

      <div class="mt-4" />

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4">
        {#each vision as v (v)}
          <VisionCard {...v} />
        {/each}
      </div>
    </div>
  </Container>
</div>

<!-- CLientele -->
<div id="clientele" />
<div class="pb-10">
  <Container>
    <SectionHeading
      text1={t("Notre", "Our", "Nuestra")}
      text2={t("clientèle", "clientele", "clientes")}
    />

    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <!--  -->
      <div class="">
        <div
          class="h-[15rem] rounded-md cl-bg"
          style="background-image: url(/images/client-school.jpg);"
        />
        <div class="mt-2 text-center manrope text-black">
          {t(
            "Les écoles & les centres éducatifs",
            "Schools & educational centers",
            "Escuelas y centros educativos",
          )}
        </div>
      </div>
      <!--  -->
      <div class="">
        <div
          class="h-[15rem] rounded-md cl-bg"
          style="background-image: url(/images/client-restaurant.jpg);"
        />
        <div class="mt-2 text-center manrope text-black">
          {t(
            "Les restaurants et fast-food",
            "Restaurants and fast food",
            "Restaurantes y comida rápida",
          )}
        </div>
      </div>
      <!--  -->
      <div class="">
        <div
          class="h-[15rem] rounded-md cl-bg"
          style="background-image: url(/images/client-supermarket.jpg);"
        />
        <div class="mt-2 text-center manrope text-black">
          {t(
            "Les supermarchés et épiceries",
            "Supermarkets and grocery stores",
            "Supermercados y tiendas de alimentación",
          )}
        </div>
      </div>
      <!--  -->
      <div class="">
        <div
          class="h-[15rem] rounded-md cl-bg"
          style="background-image: url(/images/client-hospital.jpg);"
        />
        <div class="mt-2 text-center manrope text-black">
          {t(
            "Les centres hospitaliers : dentisterie, opticien…",
            "Hospitals: dentistry, opticians, etc.",
            "Hospitales: odontología, ópticas, etc.",
          )}
        </div>
      </div>
      <!--  -->
      <div class="">
        <div
          class="h-[15rem] rounded-md cl-bg"
          style="background-image: url(/images/client-office.jpg);"
        />
        <div class="mt-2 text-center manrope text-black">
          {t(
            "Les bureaux : banques, centre d'appels, agences…",
            "Offices: banks, call centers, agencies, etc.",
            "Oficinas: bancos, call center, agencias, etc.",
          )}
        </div>
      </div>
      <!--  -->
      <div class="">
        <div
          class="h-[15rem] rounded-md cl-bg"
          style="background-image: url(/images/client-house.jpg);"
        />
        <div class="mt-2 text-center manrope text-black">
          {t(
            "Les résidences : maisons, condos en construction, apparts...",
            "Residences: houses, condos under construction, apartments...",
            "Residencias: casas, condominios en construcción, apartamentos...",
          )}
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
