<script>
  // GET ME FROM FR SITRE
  import Select from "svelte-select";
  import { onMount, createEventDispatcher } from "svelte";
  import axios from "axios";
  import config from "../../stores/config";
  import Modal from "../utils/Modal.svelte";
  import Loading from "../utils/Loading.svelte";
  import Empty from "../utils/Empty.svelte";
  import { Wave } from "svelte-loading-spinners";
  import ParticipantCard from "./ParticipantCard.svelte";
  import get from "lodash.get";
  // import { resizeImage } from "../../utils/resizer";

  let headers = {
    headers: { authorization: localStorage.getItem("jwt") },
  };

  let Resizer, resize, resizeImage, resizeImages;

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
  });

  const dispatch = createEventDispatcher();

  export let _id;
  export let ID;
  // export let password;
  export let title;
  export let description;
  export let amount;
  // export let hours;
  export let poster;
  export let tyype;

  // $: console.log(tyype);

  let newWebinar = {
    ID,
    // password,
    title,
    description,
    amount,
    // hours,
  };

  let showAddWebinarForm = false;
  let addNewWebinarLoading = false;
  let showParticipantsForm = false;

  const handleDelete = () => {
    let confirmDelete = confirm(`Voulez-vous supprimer?`);

    if (confirmDelete) {
      axios
        .delete(`${$config.backendURL}/webinars/${_id}`, headers)
        .then((res) => dispatch("delete"))
        .catch((err) => {
          console.log(err);
          alert(err);
        });
    }
  };

  const handleNotifySMS = () => {
    let confirmDelete = confirm(`Confirmer ?`);

    if (confirmDelete) {
      axios
        .post(`${$config.backendURL}/sms/send`, { title, amount }, headers)
        .then((res) => alert("✅ Envoi des notifications en cours"))
        .catch((err) => {
          console.log(err);
          alert(err);
        });
    }
  };

  const handleNotifyEmail = () => {
    let confirmDelete = confirm(`Confirmer ?`);

    if (confirmDelete) {
      axios
        .post(`${$config.backendURL}/email/send`, { title, amount }, headers)
        .then((res) => alert("✅ Envoi des notifications en cours"))
        .catch((err) => {
          console.log(err);
          alert(err);
        });
    }
  };

  const handleNotifyPush = () => {
    let confirmDelete = confirm(`Voulez-vous lancer les notifications push?`);
    if (confirmDelete) {
      axios
        .get(`${$config.backendURL}/webinars/notify-client/${_id}`, headers)
        .then((res) => console.log("Done"))
        .catch((err) => console.log(err));
    }
  };

  const handleAddNewWebinar = async (e) => {
    // for (const field in newWebinar) {
    //   console.log(field);

    //   if (!newWebinar[field] && field != "amount") {
    //     alert(`Veuillez remplir le champ ${field} !`);
    //     return;
    //   }
    // }

    if (!amount) amount = 0;

    addNewWebinarLoading = true;

    if (!tyype) {
      alert(`Veuillez remplir le champ : TYPE !`);
      return;
    }

    axios
      .put(
        `${$config.backendURL}/webinars/${_id}`,
        { ...newWebinar, tyype: tyype.value },
        {
          headers: { authorization: localStorage.getItem("jwt") },
        },
      )
      .then((res) => {
        showAddWebinarForm = false;
        addNewWebinarLoading = false;
        dispatch("update");
      })
      .catch((err) => {
        addNewWebinarLoading = false;
        console.log(err);
        alert(err);
      });
  };

  let participants = null;
  let loadingParticipants = false;

  const fetchParticipants = async () => {
    loadingParticipants = true;
    let res = await axios.get(
      `${$config.backendURL}/webinars/participants/${_id}`,
      headers,
    );

    loadingParticipants = false;
    participants = res.data;
  };

  let newPhotoLoading = false;
  let newPoster;

  const handleEditPhoto = async (e) => {
    const formData = new FormData();

    let resizedImg;

    resizedImg = await resizeImage(newPoster[0]);
    formData.append("poster", resizedImg);

    newPhotoLoading = true;

    axios
      .put(`${$config.backendURL}/webinars/poster/${_id}`, formData, {
        headers: { authorization: localStorage.getItem("jwt") },
      })
      .then((res) => {
        showAddWebinarForm = false;
        newPhotoLoading = false;
        dispatch("update");
        newPoster = false;
        alert("\n✅ L'affiche a été changée\n");
      })
      .catch((err) => {
        alert("\n❌ Erreur de connection, veuillez essayer a nouveau\n");
        newPhotoLoading = false;
        console.log(err);
        alert(err);
      });
  };

  const handleManualAdd = async () => {
    let email = prompt("Entrez l'email de l'utilisateur à ajouter");

    if (!email) return;
    email = email.toLocaleLowerCase().trim();

    let res = await axios.post(
      `${$config.backendURL}/users/addcourse`,
      { email, webinarID: _id },
      headers,
    );

    console.log(res.data);

    if (res.data.error) alert(res.data.message);
    else alert("✅ Effectué");
  };
</script>

<!-- Add Conference -->
<Modal
  show={showAddWebinarForm}
  on:modalClose={() => (showAddWebinarForm = false)}
  {title}
>
  <div class="grid gap-y-2">
    <div class="grid grid-cols-1 gap-2">
      <!-- <Select
        placeholder="Type"
        bind:selectedValue={tyype}
        items={["cours", "atelier", "pdf"]}
      /> -->
      <div class="flex justify-start">
        <span class="rounded-md bg-brand-primary px-2 py-1 text-gray-700">
          {tyype}
        </span>
      </div>

      {#if tyype != "pdf" && tyype != "activité"}
        <input bind:value={newWebinar.ID} type="text" placeholder="Lien URL" />
      {/if}

      <input bind:value={newWebinar.title} type="text" placeholder="Titre" />
      <!-- <input
        bind:value={newWebinar.amount}
        type="number"
        step="any"
        placeholder="Prix en Dollars"
      /> -->
      <!-- <textarea
        bind:value={newWebinar.hours}
        type="text"
        placeholder="Horaire - Example: Tous les Jeudis, 20h00 de Kinshasa, du 2 au 22 mars."
        rows="4"
      /> -->
      <textarea
        bind:value={newWebinar.description}
        type="text"
        placeholder="Description"
        rows="4"
      />
    </div>

    {#if addNewWebinarLoading}
      <div class="grid grid-cols-1 gap-8 !w-full">
        <div class="btn btn-primary !w-full">
          <Wave size="25" unit="px" color="#3695cb" />
          <span class="ml-4">Veuillez Patienter</span>
        </div>
      </div>
    {:else}
      <!-- else description here -->
      <div class="flex">
        <button class=" !w-full btn btn-third" on:click={handleAddNewWebinar}>
          <ion-icon name="checkmark-circle" class="text-2xl mr-2" />
          Fait
        </button>
        <button
          class="ml-4 !w-full btn btn-primary"
          on:click={(e) => (showAddWebinarForm = false)}
        >
          <ion-icon name="close-circle" class="text-2xl mr-2" />
          Fermer
        </button>
      </div>
    {/if}
  </div>
</Modal>

<!-- Participants -->
<Modal
  show={showParticipantsForm}
  on:modalClose={() => (showParticipantsForm = false)}
>
  {#if loadingParticipants}
    <Loading text="Veuillez Patienter" />
  {:else}
    <div class="flex flex-col justify-between">
      <div class="max-h-[65vh] overflow-y-scroll">
        <div class="grid grid-cols-1 gap-3">
          {#each participants as p (Math.random())}
            <ParticipantCard {...p} />
          {:else}
            <div class="flex justify-center items-center">
              <Empty text="Aucun Participant" />
            </div>
          {/each}
        </div>
      </div>
      <div class="mt-3 flex">
        <button
          class="!w-full btn btn-secondary"
          on:click={(e) => (showParticipantsForm = false)}
        >
          <ion-icon name="close-circle" class="text-2xl mr-2" />
          Fermer
        </button>
      </div>
    </div>
  {/if}
</Modal>

<div
  class="px-2 py-2 rounded-md shadow-sm bg-brand-white-light flex flex-col justify-between border border-gray-300/20"
>
  <div class="flex items-center mb-4">
    <!-- <div
      class="flex items-center py-[2px] px-1 mr-2 rounded-md bg-brand-primary text-base text-gray-300"
    >
      ${amount}
    </div> -->
    <h1
      class="flex items-center uppercase tracking-wider text-brand-primary text-sm"
    >
      {title}
      <div
        class="rounded-md px-2 py-1 text-xs shadow-sm ml-2 border border-gray-400/30"
      >
        {get(tyype, "value") || tyype}
      </div>
    </h1>
  </div>

  <div class="line-clamp-3 text-sm">
    {description}
  </div>

  {#if amount > 0}
    <div class="mt-2 grid grid-cols-2 gap-2">
      <button
        on:click={() => {
          fetchParticipants();
          showParticipantsForm = true;
        }}
        class="btn btn-green !w-full !py-[0.4rem] !text-xs"
        title="💡 Voir les acheteurs"
      >
        <ion-icon name="wallet" class="text-base mr-2" />
        Acheteurs
      </button>
      <button
        on:click={() => {
          handleManualAdd();
          fetchParticipants();
        }}
        class="btn btn-green !w-full !py-[0.4rem] !text-xs"
        title="💡 Ajouter manuellement un acheteur via son email"
      >
        <ion-icon name="add-circle" class="text-base mr-2" />
        Ajouter
      </button>
    </div>
  {/if}

  {#if amount > 0}
    {#if get(tyype, "value") == "pdf" || tyype == "pdf"}
      <div class="mt-2 grid grid-cols-2 gap-2">
        <button
          on:click={() => {
            fetchParticipants();
            showParticipantsForm = true;
          }}
          class="btn btn-green !w-full !py-[0.4rem] !text-xs"
          title="💡 Voir les acheteurs"
        >
          <ion-icon name="wallet" class="text-base mr-2" />
          Acheteurs
        </button>
        <button
          on:click={() => {
            handleManualAdd();
            fetchParticipants();
          }}
          class="btn btn-green !w-full !py-[0.4rem] !text-xs"
          title="💡 Ajouter manuellement un acheteur via son email"
        >
          <ion-icon name="add-circle" class="text-base mr-2" />
          Ajouter
        </button>
      </div>
    {/if}
  {/if}

  <div class="mt-2 grid grid-cols-2 md:grid-cols-2 gap-2">
    <button
      on:click={() => (showAddWebinarForm = true)}
      class="btn bg-brand-white !text-gray-800 border border-gray-500/25 !w-full !py-[0.4rem] !text-xs"
      title="💡 Modifier"
    >
      <ion-icon name="pencil" class="text-base mr-2" />
      Modifier
    </button>
    <button
      on:click={handleDelete}
      class="btn bg-brand-white !text-gray-800 border border-gray-500/25 !w-full !py-[0.4rem] !text-xs"
      title="💡 Supprimer"
    >
      <ion-icon name="close-circle" class="text-base mr-2" />
      Supprimer
    </button>
  </div>

  <div class="grid grid-cols-3 gap-2">
    <!-- <button
      on:click={handleNotifyPush}
      class="btn bg-brand-primary !w-full !py-[0.4rem] !text-xs"
      title="💡 Envoyer des notifications push"
    >
      🔔 Push
    </button> -->
    <!-- <button
      on:click={handleNotifySMS}
      class="btn bg-brand-primary !w-full !py-[0.4rem] !text-xs"
      title="💡 Envoyer des notifications via SMS"
    >
      📱 SMS
    </button> -->
    <!-- <button
      on:click={handleNotifyEmail}
      class="btn bg-brand-primary !w-full !py-[0.4rem] !text-xs"
      title="💡 Envoyer des notifications via Email"
    >
      📧 Email
    </button> -->
  </div>

  <div class="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
    <div class:col-span-full={!newPoster} class="">
      <label
        for="new-poster-{_id}"
        class:border-brand-primary={newPoster}
        class:text-brand-primary={newPoster}
        class:border-gray-100={!newPoster}
        class:text-gray-400={!newPoster}
        class="text-xs shadow-sm py-1 px-4 flex items-center justify-center cursor-pointer col-span-2 h-full bg-brand-white rounded-md border border-gray-500/25"
      >
        {#if newPoster}
          <span class="material-symbols-outlined mr-2 text-2xl">
            task_alt
          </span>
          Poster Selectionné
        {:else}
          <img class="w-10 h-8 object-cover mr-2" src={poster} alt="poster" />
          Changer l'affiche
        {/if}
      </label>
    </div>

    {#if newPoster}
      <button
        on:click={handleEditPhoto}
        class="btn btn-secondary !w-full !py-[0.4rem] !text-xs"
        title="💡 Sauvegarder le nouveau poster"
      >
        {#if newPhotoLoading}
          Veuillez Patienter...
        {:else}
          Sauvegarder
        {/if}
        <ion-icon name="send" class="ml-2 text-xl" />
      </button>
    {/if}
  </div>
</div>

<div class="hidden">
  <input
    bind:files={newPoster}
    type="file"
    accept="image/*"
    id="new-poster-{_id}"
    class="appearance-none"
  />
</div>
