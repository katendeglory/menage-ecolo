<script>
  import MyProfileHeading from "./../components/MyProfileHeading.svelte";
  import Select from "svelte-select";
  import get from "lodash.get";
  import config from "../stores/config";
  import axios from "axios";
  import { onMount } from "svelte";
  import { Circle } from "svelte-loading-spinners";
  import Container from "../components/utils/Container.svelte";
  import SectionHeading from "../components/utils/SectionHeading.svelte";
  import countries from "../stores/countries";

  let loading = true;
  let profile = null;
  let uploading = false;
  let uploadingPwd = false;
  let currentPassword;
  let newPassword;
  let confirmNewPassword;

  const loadSettings = () => {
    axios
      .get(`${$config.backendURL}/me`, {
        headers: { authorization: localStorage.getItem("jwt") },
      })
      .then((res) => {
        profile = res.data;
        loading = false;
      })
      .catch((err) => {
        loading = false;
        console.log(err);
      });
  };

  const handleSubmit = () => {
    uploading = true;
    axios
      .put(
        `${$config.backendURL}/users/${profile._id}`,
        {
          ...profile,
          accountType: get(profile, "accountType.value"),
          country: get(profile, "country.value"),
        },
        { headers: { authorization: localStorage.getItem("jwt") } },
      )
      .then((res) => {
        alert("✅ Fait!");
        console.log(res);
        uploading = false;
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        uploading = false;
      });
  };

  const handleSubmitNewPwd = () => {
    if (newPassword != confirmNewPassword) {
      alert("Nouveau mot de passe & Confirm Password Don't match");
      return;
    }
    uploadingPwd = true;
    axios
      .put(
        `${$config.backendURL}/users/password/${profile._id}`,
        { currentPassword, newPassword },
        { headers: { authorization: localStorage.getItem("jwt") } },
      )
      .then((res) => {
        alert("✅ Done Successfully!");
        console.log(res);
        uploadingPwd = false;
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        uploadingPwd = false;
        alert("Make sure your current password was entered correctly!");
      });
  };

  onMount(async () => {
    loadSettings();
  });
</script>

<svelte:head>
  <title
    >Votre Profile - Ménage Écolo - La propreté est un luxe à la portée de tout
    le monde</title
  >
</svelte:head>

<MyProfileHeading />

<div class="mt-6 min-h-screen">
  <Container>
    {#if loading}
      <div class="h-52 w-full flex items-center justify-center">
        <Circle size="50" color="#3695cb" unit="px" />
      </div>
    {:else}
      <form
        on:submit|preventDefault={handleSubmit}
        class="grid grid-cols-1 gap-y-4 text-gray-500 pb-8"
      >
        <!-- <div class="grid grid-cols-2 gap-4 mb-4">
          <div class="flex items-center">
            <input
              type="checkbox"
              class="mr-2 h-6 w-6 text-brand-primary rounded-md"
              bind:checked={profile.emailMe}
            /> Recevoir SMS
          </div>
          <div class="flex items-center">
            <input
              type="checkbox"
              class="mr-2 h-6 w-6 text-brand-primary rounded-md"
              bind:checked={profile.smsMe}
            /> Recevoir Emails
          </div>
        </div> -->

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 items-center">
            <div>Votre Region:</div>
            <div class="lg:col-span-2 select-item-1">
              <Select
                placeholder="Votre Region"
                bind:selectedValue={profile.country}
                items={$countries.map(({ name }) => name)}
              />
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 items-center">
            <div>Nom Complet:</div>
            <input
              class="lg:col-span-2 shadow-sm placeholder-gray-300"
              type="text"
              bind:value={profile.name}
              placeholder="Nom Complet"
              required
            />
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 items-center">
            <div>Telephone:</div>
            <input
              class="lg:col-span-2 shadow-sm placeholder-gray-300"
              type="text"
              bind:value={profile.tel}
              placeholder="telephone"
              required
            />
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 items-center">
            <div>Nom d'utilisateur:</div>
            <input
              class="lg:col-span-2 shadow-sm placeholder-gray-300"
              type="text"
              bind:value={profile.email}
              placeholder="email"
              required
              readonly
            />
          </div>
        </div>

        {#if uploading}
          <div class="grid grid-cols-1 gap-8">
            <div
              class="flex items-center justify-center btn btn-aurora"
              style="width: 100%;"
            >
              <Circle size="25" color="#3695cb" unit="px" />
              <span class="ml-4 py-2">Veuillez Patienter</span>
            </div>
          </div>
        {:else}
          <button class="btn btn-aurora" style="width: 100%;">
            <span class="material-symbols-outlined text-2xl mr-2">
              check_circle
            </span>
            Sauvegarder
          </button>
        {/if}
      </form>

      <!-- Change Password -->
      <!-- Change Password -->

      <h1 class="mt-12 text-gray-500 text-xl uppercase">
        CHANGER LE MOT DE PASSE
      </h1>

      <form
        on:submit|preventDefault={handleSubmitNewPwd}
        class="mt-8 grid grid-cols-1 gap-y-4 text-gray-500 pb-8"
      >
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 items-center">
            <div>Mot de passe actuel:</div>
            <input
              class="lg:col-span-2 shadow-sm placeholder-gray-300"
              type="password"
              bind:value={currentPassword}
              placeholder="Mot de passe actuel"
              required
            />
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 items-center">
            <div>Nouveau mot de passe:</div>
            <input
              class="lg:col-span-2 shadow-sm placeholder-gray-300"
              type="password"
              bind:value={newPassword}
              placeholder="Nouveau mot de passe"
              required
            />
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-2 items-center">
            <div>Confirmer:</div>
            <input
              class="lg:col-span-2 shadow-sm placeholder-gray-300"
              type="password"
              bind:value={confirmNewPassword}
              placeholder="Confirmer nouveau mot de passe"
              required
            />
          </div>
        </div>

        {#if uploadingPwd}
          <div class="grid grid-cols-1 gap-8">
            <div class="flex items-center justify-center btn btn-aurora">
              <Circle size="25" color="#3695cb" unit="px" />
              <span class="ml-4 py-2">Veuillez Patienter</span>
            </div>
          </div>
        {:else}
          <button class="btn btn-aurora" style="width: 100%;">
            <span class="material-symbols-outlined text-2xl mr-2">
              check_circle
            </span>
            Changer mot de passe
          </button>
        {/if}
      </form>
    {/if}
  </Container>
</div>
