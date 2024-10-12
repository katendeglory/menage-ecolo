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
      `Acceuil - Ménage Écolo - Proprement Vert.`,
      "Home - Ménage Écolo - Properly Green.",
      "Hogar - Ménage Écolo - Correctamente verde.",
    )}
  </title>
</svelte:head>

<Hero />

<SectionAbout />

<Featured />

<SectionValeurs />

<Contact />
