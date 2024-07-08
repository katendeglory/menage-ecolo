<script>
  import MyCoursesHeading from "./../components/MyCoursesHeading.svelte";
  import SectionHeading from "./../components/utils/SectionHeading.svelte";
  import ConferenceCardForUsers from "./../components/shared/ConferenceCardForUsers.svelte";
  import axios from "axios";
  import { onMount } from "svelte";
  import Container from "./../components/utils/Container.svelte";
  import config from "../stores/config";
  import Loading from "../components/utils/Loading.svelte";
  import Empty from "../components/utils/Empty.svelte";

  let headers = {
    headers: { authorization: localStorage.getItem("jwt") },
  };

  let webinars = null;

  const fetchYourWebinars = async () => {
    let res = await axios.get(
      `${$config.backendURL}/webinars/mycourses`,
      headers,
    );
    webinars = res.data;
  };

  onMount(() => {
    fetchYourWebinars();
  });
</script>

<svelte:head>
  <title>Vos Cours Suivis - M.A.N. - Maison D'Adoration Pour les Nations</title>
</svelte:head>

<MyCoursesHeading />

<Container>
  <div class="min-h-screen">
    <SectionHeading id="my-courses" text1="Vos" text2="cours" breakWord />

    {#if webinars == null}
      <Loading text="Veuillez Patienter" />
    {:else}
      <div class="my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each webinars as web_ (web_._id)}
          <ConferenceCardForUsers
            {...web_}
            on:delete={() => fetchYourWebinars()}
            on:update={() => fetchYourWebinars()}
            loggedIn
          />
        {:else}
          <div class="col-span-full">
            <Empty text="Vous ne suivez aucun cours" />
          </div>
        {/each}
      </div>
    {/if}
  </div>
</Container>
