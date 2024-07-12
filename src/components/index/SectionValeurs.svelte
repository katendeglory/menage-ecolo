<script>
  import { onMount } from "svelte";
  import ValeurCard from "./sub/ValeurCard.svelte";
  import Container from "../utils/Container.svelte";
  import SectionHeading from "../utils/SectionHeading.svelte";
  import t from "../../utils/t";

  let valeursFR = [
    {
      icon: "handshake",
      t1: "Transparence",
      desc: `Communiquer clairement avec les clients sur les services offerts, les tarifs et les procédures.`,
    },
    {
      icon: "person_play",
      t1: "Adaptabilité",
      desc: `Être flexible et capable de s'adapter aux besoins spécifiques et changeants de chaque client.`,
    },
    {
      icon: "health_and_safety",
      t1: "Sécurité",
      desc: `Prioriser la sécurité des clients et des employés en utilisant des pratiques de nettoyage sûres et en respectant les réglementations sanitaires.`,
    },
    {
      icon: "pacemaker",
      t1: "Empathie",
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
      t1: "Confidentialité",
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

  let valeursEN = [
    {
      icon: "handshake",
      t1: "Transparency",
      desc: `Communicate clearly with customers about the services offered, rates and procedures.`,
    },
    {
      icon: "person_play",
      t1: "Adaptability",
      desc: `Be flexible and able to adapt to the specific and changing needs of each client.`,
    },
    {
      icon: "health_and_safety",
      t1: "Security",
      desc: `Prioritize customer and employee safety by using safe cleaning practices and following health regulations.`,
    },
    {
      icon: "pacemaker",
      t1: "Empathy",
      desc: `Understand and respond to customer concerns and expectations with sensitivity and consideration.`,
    },
    {
      icon: "communities",
      t1: "community",
      t2: "Commitment",
      breakL: true,
      desc: `Actively participate in the life of the local community and support local initiatives.`,
    },
    {
      icon: "visibility_lock",
      t1: "Confidentiality",
      desc: `Ensure that all customer information and home details remain strictly confidential.`,
    },
    {
      icon: "model_training",
      t1: "continuous",
      t2: "Innovation",
      breakL: true,
      desc: `Research and adopt the latest innovations in cleaning to improve efficiency and customer satisfaction.`,
    },
    {
      icon: "cycle",
      t1: "social",
      t2: "Responsibility",
      breakL: true,
      desc: `Adopt ethical business practices and contribute positively to society.`,
    },
    {
      icon: "groups_2",
      t1: "team",
      t2: "Cohesion",
      breakL: true,
      desc: `Foster a harmonious and collaborative work environment where each employee feels valued and supported.`,
    },
    {
      icon: "award_star",
      t1: "Excellent ",
      t2: "customer service",
      breakL: true,
      desc: `Strive to provide an exceptional customer experience, responding quickly and efficiently to requests and concerns.`,
    },
  ];

  let valeursES = [
    {
      icon: "handshake",
      t1: "Transparencia",
      desc: `Comunicar claramente con los clientes sobre los servicios ofrecidos, tarifas y procedimientos.`,
    },
    {
      icon: "person_play",
      t1: "Adaptabilidad",
      desc: `Ser flexible y capaz de adaptarse a las necesidades específicas y cambiantes de cada cliente.`,
    },
    {
      icon: "health_and_safety",
      t1: "Seguridad",
      desc: `Priorizar la seguridad de clientes y empleados mediante el uso de prácticas de limpieza seguras y el cumplimiento de las normas de salud.`,
    },
    {
      icon: "pacemaker",
      t1: "Empatía",
      desc: `Comprender y responder a las inquietudes y expectativas de los clientes con sensibilidad y consideración.`,
    },
    {
      icon: "communities",
      t1: "Compromiso",
      t2: "comunidad",
      breakL: true,
      desc: `Participar activamente en la vida de la comunidad local y apoyar las iniciativas locales.`,
    },
    {
      icon: "visibility_lock",
      t1: "Confidencialidad",
      desc: `Asegúrese de que toda la información del cliente y los detalles del hogar permanezcan estrictamente confidenciales.`,
    },
    {
      icon: "model_training",
      t1: "Innovación",
      t2: "continuar",
      breakL: true,
      desc: `Investigar y adoptar las últimas innovaciones en limpieza para mejorar la eficiencia y la satisfacción del cliente.`,
    },
    {
      icon: "cycle",
      t1: "Responsabilidad",
      t2: "social",
      breakL: true,
      desc: `Adoptar prácticas comerciales éticas y contribuir positivamente a la sociedad.`,
    },
    {
      icon: "groups_2",
      t1: "Cohesión",
      t2: "equipo",
      breakL: true,
      desc: `Fomentar un ambiente de trabajo armonioso y colaborativo donde cada empleado se sienta valorado y apoyado.`,
    },
    {
      icon: "award_star",
      t1: "Excelencia de",
      t2: "servicio al cliente",
      breakL: true,
      desc: `Esforzarse por brindar una experiencia excepcional al cliente, respondiendo rápida y eficientemente a las solicitudes e inquietudes.`,
    },
  ];

  let valeurs = [];

  const setValeursData = () => {
    let lang = localStorage.getItem("lang");
    if (lang == "en") valeurs = [...valeursEN];
    else if (lang == "es") valeurs = [...valeursES];
    else valeurs = [...valeursFR];
  };

  onMount(() => {
    setValeursData();
  });
</script>

<!-- Vision -->
<div id="valeurs"></div>
<div class="pt-20 pb-10 bg-white patterns">
  <SectionHeading
    text1={t("Nos", "Our", "Nuestra")}
    text2={t("Valeurs", "Values", "Valores")}
    breakWord
  />

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
