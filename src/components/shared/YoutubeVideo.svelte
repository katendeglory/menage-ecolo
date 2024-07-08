<script>
  import { Circle } from "svelte-loading-spinners";
  import { fly } from "svelte/transition";
  import getVideoId from "get-video-id";

  export let videoURL = "https://youtu.be/L6k0bI5KlDw";
  export let title;
  // export let description;

  let showTitle = true;
  let loaded = false;

  let videoID = getVideoId(videoURL).id;

  const handleOnLoad = () => {
    loaded = true;
  };

  const handleClick = () => {
    if (showTitle) {
      showTitle = false;
    } else {
      showTitle = true;
      setTimeout(() => {
        showTitle = false;
      }, 4000);
    }
  };
</script>

<div class="overflow-hidden shadow-sm h-full w-full min-h-screen relative">
  {#if showTitle}
    <div
      in:fly={{ y: -15 }}
      out:fly={{ y: -15 }}
      class="absolute left-0 top-0 w-full h-[3.5rem] z-30"
    >
      <h1
        on:click={handleClick}
        class="bg-brand-white text-gray-700 w-full h-full text-sm uppercase tracking-wider flex items-center shadow-md text-center px-2 py-2"
      >
        <i class="fab text-3xl fa-youtube mr-2 text-gray-100" />
        <div class="block sm:hidden text-gray-100">
          {title.length < 25 ? title : title.substring(0, 35) + "..."}
        </div>
        <div class="hidden sm:block text-gray-100">
          {title.length < 55 ? title : title.substring(0, 55) + "..."}
        </div>
      </h1>
    </div>
  {/if}

  <div
    class:hidden={!loaded}
    class="h-[60vh] md:h-[100vh] w-[100vw] overflow-hidden shadow-sm relative z-10"
  >
    <iframe
      on:click={handleClick}
      on:load={handleOnLoad}
      id={videoID}
      title="video"
      width="100%"
      height="100%"
      src={`https://www.youtube.com/embed/${videoID}?rel=0`}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>

  <div
    class:hidden={loaded}
    class="h-[60vh] md:h-[100vh] w-[100vw] overflow-hidden shadow-sm relative z-10 pt-12 bg-brand-white-light flex items-center justify-center"
  >
    <Circle size="50" color="#3695cb" unit="px" />
  </div>

  <div
    class="mx-3 text-brand-primary text-xl my-4 pb-3 border-b border-brand-primary border-dotted"
  >
    {title}
  </div>
  <div class="px-3">
    Bienvenue sur le webinar <span class="text-brand-primary">{title}</span>,
    appuyez sur le bouton play
    <ion-icon
      name="play-circle"
      class="text-brand-primary text-base translate-y-1"
    />
    pour lancer la video. Pour ouvrir la video en plein ecran, cliquez sur ce bouton
    <ion-icon name="scan" class="text-brand-primary text-base translate-y-1" />.
  </div>
</div>
