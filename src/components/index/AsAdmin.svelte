<script>
  import Select from "svelte-select";
  import SectionHeading from "./../utils/SectionHeading.svelte";
  import config from "../../stores/config";
  import Modal from "../utils/Modal.svelte";
  import Loading from "../utils/Loading.svelte";
  import Empty from "../utils/Empty.svelte";
  import { Wave } from "svelte-loading-spinners";
  import { onMount } from "svelte";
  import axios from "axios";
  import ConferenceCard from "../shared/ConferenceCard.svelte";
  import get from "lodash.get";
  // import { resizeImage } from "../../utils/resizer";

  const AUTH_DATA = {
    headers: { authorization: localStorage.getItem("jwt") },
  };

  let Resizer, resize, resizeImage, resizeImages;

  let webinars = null;
  let errCount = 0;

  let tyype;

  $: console.log(tyype);

  let newWebinar = {
    ID: "",
    // password: "",
    title: "",
    description: "",
    amount: 0,
    // hours: "",
    poster: null,
    pdf: null,
  };

  let showAddWebinarForm = false;
  let addNewWebinarLoading = false;

  const handleAddNewWebinar = async (e) => {
    if (!tyype) {
      alert(`Veuillez remplir le champ : TYPE !`);
      return;
    } else if (!newWebinar.poster) {
      alert(`Veuillez ajouter un poster !`);
      return;
    } else if (tyype.value == "pdf" && !newWebinar.pdf) {
      alert(`Veuillez ajouter un PDF !`);
      return;
    }

    addNewWebinarLoading = true;

    const formData = new FormData();

    if (get(tyype, "value") == "pdf") formData.append("ID", newWebinar.pdf[0]);
    else newWebinar.ID && formData.append("ID", newWebinar.ID);

    newWebinar.title && formData.append("title", newWebinar.title);
    newWebinar.description &&
      formData.append("description", newWebinar.description);

    newWebinar.amount
      ? formData.append("amount", newWebinar.amount)
      : formData.append("amount", 0);

    tyype.value && formData.append("tyype", tyype.value);

    let resizedImg = await resizeImage(newWebinar.poster[0]);
    formData.append("poster", resizedImg);

    axios
      .post(
        `${$config.backendURL}/webinars${
          tyype.value == "pdf" ? "/with-pdf" : ""
        }`,
        formData,
        AUTH_DATA,
      )
      .then((res) => {
        showAddWebinarForm = false;
        addNewWebinarLoading = false;
        webinars = null;
        errCount = 0;

        newWebinar = {
          ID: "",
          password: "",
          title: "",
          description: "",
          amount: 0,
          hours: "",
          poster: null,
          pdf: null,
        };

        fetchWebinars();
      })
      .catch((err) => {
        addNewWebinarLoading = false;
        errCount++;
        if (errCount <= 3) {
          handleAddNewWebinar();
          console.log(`Retrying... ${errCount}`);
        } else {
          console.log(`Done Retrying... xxx`);
          console.log(err);
          alert("There was a problem, Refresh the page and retry");
        }
      });
  };

  const fetchWebinars = async () => {
    let res = await axios.get(`${$config.backendURL}/webinars`, AUTH_DATA);
    webinars = res.data;
  };

  onMount(async () => {
    Resizer = await import("react-image-file-resizer");
    // For deployment
    resize = Resizer.default.default.imageFileResizer;
    // For development
    // resize = Resizer.default.imageFileResizer;

    resizeImage = (file) => {
      return new Promise((resolve, reject) => {
        resize(file, 750, 750, "JPEG", 75, 0, (uri) => resolve(uri), "blob");
      });
    };

    resizeImages = async (files) => {
      let resized = [];
      for (let i = 0; i < files.length; i++)
        resized.push(await resizeImage(files[i]));
      return resized;
    };

    fetchWebinars();
  });
</script>

<Modal
  show={showAddWebinarForm}
  on:modalClose={() => {
    showAddWebinarForm = false;
  }}
>
  <div class="grid gap-y-2">
    <div class="grid grid-cols-1 gap-2">
      <Select
        placeholder="Type"
        bind:selectedValue={tyype}
        items={["activité", "podcast", "video", "pdf"]}
      />

      {#if get(tyype, "value") != "pdf" && get(tyype, "value") != "activité"}
        {#key tyype}
          <input
            bind:value={newWebinar.ID}
            type="text"
            placeholder="Lien URL"
          />
        {/key}
      {/if}

      {#key tyype}
        <input bind:value={newWebinar.title} type="text" placeholder="Titre" />
      {/key}
      <!-- <input
        bind:value={newWebinar.amount}
        type="number"
        step="any"
        placeholder="Prix en Dollars (Optionel)"
      /> -->
      <!-- <textarea
        bind:value={newWebinar.hours}
        type="text"
        placeholder="Horaire - Example: Tous les Jeudis, 20h00 de Kinshasa, du 2 au 22 mars."
        rows="4"
      /> -->
      {#key tyype}
        <textarea
          bind:value={newWebinar.description}
          type="text"
          placeholder="Description"
          rows="4"
        />
      {/key}

      <div class="">
        <label
          for="course-poster"
          class:border-brand-primary={newWebinar.poster}
          class:text-brand-primary={newWebinar.poster}
          class:border-gray-100={!newWebinar.poster}
          class:text-gray-600={!newWebinar.poster}
          class="shadow-sm py-1 px-4 flex items-center justify-start cursor-pointer col-span-2 h-full bg-brand-white-light rounded-md border border-gray-800/50"
        >
          {#if newWebinar.poster}
            <span class="material-symbols-outlined mr-2 text-2xl">
              task_alt
            </span>
            Poster Selectionné
          {:else}
            <span class="material-symbols-outlined mr-2 text-2xl">
              add_a_photo
            </span>
            Poster
          {/if}
        </label>
      </div>

      <div class="hidden">
        <input
          bind:files={newWebinar.poster}
          type="file"
          accept="image/*"
          id="course-poster"
          class="appearance-none"
        />
      </div>

      {#if get(tyype, "value") == "pdf"}
        <div class="">
          <label
            for="course-pdf"
            class:border-brand-primary={newWebinar.pdf}
            class:text-brand-primary={newWebinar.pdf}
            class:border-gray-100={!newWebinar.pdf}
            class:text-gray-600={!newWebinar.pdf}
            class="shadow-sm py-1 px-4 flex items-center justify-start cursor-pointer col-span-2 h-full bg-brand-white-light rounded-md border"
          >
            {#if newWebinar.pdf}
              <span class="material-symbols-outlined mr-2 text-2xl">
                task_alt
              </span>
              PDF Selectionné
            {:else}
              <span class="material-symbols-outlined mr-2 text-2xl">
                picture_as_pdf
              </span>
              PDF
            {/if}
          </label>
        </div>

        <div class="hidden">
          <input
            bind:files={newWebinar.pdf}
            type="file"
            accept="application/pdf"
            id="course-pdf"
            class="appearance-none"
          />
        </div>
      {/if}

      {#if addNewWebinarLoading}
        <div class="grid grid-cols-1 gap-8 !w-full">
          <div class="btn btn-primary !w-full">
            <Wave size="25" unit="px" color="#3695cb" />
            <span class="ml-4">Veuillez Patienter</span>
          </div>
        </div>
      {:else}
        <!-- else content here -->
        <div class="flex">
          <button class=" !w-full btn btn-third" on:click={handleAddNewWebinar}>
            <ion-icon name="checkmark-circle" class="text-2xl mr-2" />
            Fait
          </button>
          <button
            class="ml-4 !w-full btn btn-aurora"
            on:click={(e) => (showAddWebinarForm = false)}
          >
            <ion-icon name="close-circle" class="text-2xl mr-2" />
            Fermer
          </button>
        </div>
      {/if}
    </div>
  </div>
</Modal>

<div class="hidden border-gray-100 text-gray-600" />
<div class="hidden border-brand-primary text-brand-primary" />

<div class="mt-8"></div>

<SectionHeading text1="Contenu" text2="Ajouté..." breakWord />

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
  <button
    class="btn btn-primary !w-full"
    on:click={(e) => (showAddWebinarForm = true)}
  >
    <ion-icon name="add-circle" class="text-2xl mr-3" />
    Ajouter du Contenu
  </button>
</div>

{#if webinars == null}
  <Loading text="Veuillez Patienter" />
{:else}
  <div class="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
    {#each webinars as web_ (web_._id)}
      <ConferenceCard
        {...web_}
        on:delete={() => fetchWebinars()}
        on:update={() => fetchWebinars()}
      />
    {:else}
      <div class="col-span-full">
        <Empty text="Aucun contenu pour le moment" />
      </div>
    {/each}
  </div>
{/if}
