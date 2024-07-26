<script>
  import SectionValeurs from "./../components/index/SectionValeurs.svelte";
  import Featured from "./../components/index/Featured.svelte";
  import SectionAbout from "./../components/index/SectionAbout.svelte";
  import Hero from "./../components/index/Hero.svelte";
  import Contact from "../components/index/Contact.svelte";
  import t from "../utils/t";
</script>

<svelte:head>
  <title>
    {t(
      `Acceuil - Ménage Écolo - La propreté est un luxe à la portée de tout le monde`,
      "Home - Ménage Écolo - La limpieza es un lujo al alcance de todos.",
      "Hogar - Ménage Écolo - Cleanliness is a luxury within everyone’s reach",
    )}
  </title>
</svelte:head>

<Hero />

<SectionAbout />

<Featured />

<SectionValeurs />

<Contact />
