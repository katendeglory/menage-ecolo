<script>
  import Container from "../utils/Container.svelte";
</script>

<div
  class="---pt-5 pb-[1.25rem] font-light text-gray-500 tracking-wider bg-brand-white"
  id="contact"
>
  <div class="relative">
    <!-- <Container>
      <div class="h-font mb-4 text-4xl text-brand-primary">Map du Site</div>
      <div class={`grid gap-3 grid-cols-2 md:grid-cols-3 text-sm`}>
        <a class="" href="/#home">Acceuil</a>
        <a class="" href="/#about">A Propos</a>
        <a class="" href="/#ressources">Activités</a>
        <a class="" href="/#contact">Contact</a>
        <a class="" href="/#donate">Dons</a>
        <a class="capitalize" href="/#team">équipe</a>

        {#if get($config, "currentUser.username")}
          <a class="" href="/profile">Profile</a>
          <a class="" href="/#about">Programme</a>
        {:else}
          <a class="" href="/login">Connexion</a>
          <a class="" href="/register">Inscription</a>
        {/if}
      </div>
    </Container> -->
    <Container>
      <div
        class="h-font ---mt-4 flex items-center justify-between md:justify-start"
      >
        <div>&copy; 2024</div>
        <a
          class="md:whitespace-nowrap ml-2 text-right flex items-center"
          target="_blank"
          href="https://glorykatende.com"
        >
          🎨 Design By Glory K.
          <span class="material-symbols-outlined text-3xl ml-1">
            trending_flat
          </span>
        </a>
      </div>
    </Container>
  </div>
</div>
