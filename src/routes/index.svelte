<script>
  import Services from "./../components/index/Services.svelte";
  import Featured from "./../components/index/Featured.svelte";
  import SectionAbout from "./../components/index/SectionAbout.svelte";
  import Hero from "./../components/index/Hero.svelte";
  import { onMount } from "svelte";
  import * as animateScroll from "svelte-scrollto";
  import Contact from "../components/index/Contact.svelte";
  import get from "lodash.get";
  import config from "../stores/config";
</script>

<svelte:head>
  <title>
    Acceuil - Ménage Écolo - La propreté est un luxe à la portée de tout le
    monde
  </title>
</svelte:head>

<!-- ✅ -->
<Hero />

<!-- ✅ -->
<SectionAbout />

<!--  -->
<Featured />

<!-- <Services /> -->

<!--  -->
<Contact />
