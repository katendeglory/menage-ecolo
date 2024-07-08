<script>
  import Container from "./../components/utils/Container.svelte";
  import DonateVideo from "./../components/index/sub/DonateVideo.svelte";
</script>

<svelte:head>
  <title>Dons En Ligne - M.A.N. - Maison D'Adoration Pour les Nations</title>
</svelte:head>

<DonateVideo />

<div id="how"></div>

<div class="-mt-6 text-center max-w-2xl mx-auto relative z-30">
  Merci de votre générosité. C'est grâce à votre fidélité que nous pouvons voir
  des vies transformées en Christ.
</div>

<Container>
  <div class="mt-8 pb-10 grid grid-cols-1 md:grid-cols-2 p-4 gap-4">
    <div
      class="h-[15rem] px-4 bg-white border border-gray-200 rounded-md shadow-lg"
    >
      <div class="k-font text-5xl text-center mb-4 pt-4">Transfer Bancaire</div>
      <div
        class="-mt-4 text-transparent text-center underline decoration-brand-primary"
      >
        ..............
      </div>
      <div class="text-center pt-4">Les infos vont figurer ici...</div>
    </div>
    <div
      class="h-[15rem] px-4 bg-white border border-gray-200 rounded-md shadow-lg"
    >
      <div class="k-font text-5xl text-center mb-4 pt-4">Mobile Money</div>
      <div
        class="-mt-4 text-transparent text-center underline decoration-brand-primary"
      >
        ..............
      </div>
      <div class="text-center pt-4">Les infos vont figurer ici...</div>
    </div>
  </div>
</Container>

<Container>
  <div class="text-center">
    Veuillez envoyer un e-mail à
    <span class="text-brand-primary"> dons@maison-adoration.net </span>
    pour toute question ou préoccupation.
  </div>
</Container>

<!-- <MyProfileHeading /> -->
