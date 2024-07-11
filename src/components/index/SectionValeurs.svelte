<script>
  import ValeurCard from "./sub/ValeurCard.svelte";
  import Container from "../utils/Container.svelte";
  import SectionHeading from "../utils/SectionHeading.svelte";

  const valeurs = [
    {
      icon: "handshake",
      t1: "Trans",
      t2: "parence",
      desc: `Communiquer clairement avec les clients sur les services offerts, les tarifs et les procédures.`,
    },
    {
      icon: "person_play",
      t1: "Adapta",
      t2: "bilité",
      desc: `Être flexible et capable de s'adapter aux besoins spécifiques et changeants de chaque client.`,
    },
    {
      icon: "health_and_safety",
      t1: "Sécu",
      t2: "rité",
      desc: `Prioriser la sécurité des clients et des employés en utilisant des pratiques de nettoyage sûres et en respectant les réglementations sanitaires.`,
    },
    {
      icon: "pacemaker",
      t1: "Empa",
      t2: "thie",
      desc: `Comprendre et répondre aux préoccupations et aux attentes des clients avec sensibilité et considération.`,
    },
    {
      icon: "communities",
      t1: "Engagement ",
      t2: "communautaire",
      breakL: true,
      desc: `Participer activement à la vie de la communauté locale et soutenir des initiatives locales.`,
    },
    {
      icon: "visibility_lock",
      t1: "Confiden",
      t2: "tialité",
      desc: `Garantir que toutes les informations des clients et les détails de leur domicile restent strictement confidentiels.`,
    },
    {
      icon: "model_training",
      t1: "Innovation ",
      t2: "continue",
      breakL: true,
      desc: `Rechercher et adopter les dernières innovations dans le domaine du nettoyage pour améliorer l'efficacité et la satisfaction des clients.`,
    },
    {
      icon: "cycle",
      t1: "Responsabilité ",
      t2: "sociale",
      breakL: true,
      desc: `Adopter des pratiques commerciales éthiques et contribuer positivement à la société.`,
    },
    {
      icon: "groups_2",
      t1: "Cohésion ",
      t2: "d'équipe",
      breakL: true,
      desc: `Favoriser un environnement de travail harmonieux et collaboratif où chaque employé se sent valorisé et soutenu.`,
    },
    {
      icon: "award_star",
      t1: "Excellence du ",
      t2: "service client",
      breakL: true,
      desc: `S'efforcer d'offrir une expérience client exceptionnelle, en répondant rapidement et efficacement aux demandes et aux préoccupations.`,
    },
  ];
</script>

<!-- Vision -->
<div id="valeurs"></div>
<div class="pt-20 pb-10 bg-white patterns">
  <SectionHeading text1="Nos" text2="Valeurs" breakWord />

  <Container>
    <div class="text-gray-800">
      <div class="mt-4"></div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-8 pb-4">
        {#each valeurs as val (val)}
          <ValeurCard {...val} />
        {/each}
      </div>
    </div>
  </Container>
</div>

<style>
  /* .patterns-2 {
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='12' viewBox='0 0 20 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 12c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 10 12c1.67 0 3.182-.683 4.27-1.785A5.998 5.998 0 0 0 14 12h2a4 4 0 0 1 4-4V6c-1.67 0-3.182.683-4.27 1.785C15.905 7.22 16 6.622 16 6c0-.622-.095-1.221-.27-1.785A5.982 5.982 0 0 0 20 6V4a4 4 0 0 1-4-4h-2c0 .622.095 1.221.27 1.785A5.982 5.982 0 0 0 10 0C8.33 0 6.818.683 5.73 1.785 5.905 1.22 6 .622 6 0H4a4 4 0 0 1-4 4v2c1.67 0 3.182.683 4.27 1.785A5.998 5.998 0 0 1 4 6c0-.622.095-1.221.27-1.785A5.982 5.982 0 0 1 0 6v2a4 4 0 0 1 4 4h2zm-4 0a2 2 0 0 0-2-2v2h2zm16 0a2 2 0 0 1 2-2v2h-2zM0 2a2 2 0 0 0 2-2H0v2zm20 0a2 2 0 0 1-2-2h2v2zm-10 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z' fill='%23000000' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E");
  } */
</style>
