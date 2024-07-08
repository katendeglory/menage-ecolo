<script>
  import get from "lodash.get";
  import Select from "svelte-select";
  import countries from "../stores/countries";
  import config from "../stores/config";
  import axios from "axios";
  import Container from "../components/utils/Container.svelte";
  import { derivePrefix } from "../utils/functions";

  let prefix;

  let user = {
    country: null,
    email: "",
    tel: "",
    password: "",
    confirmPassword: "",
    name: "",
  };

  $: if (get(user, "country.value")) prefix = derivePrefix(user.country.value);

  let loading = false;

  const handleSubmit = () => {
    for (const field in user) {
      if (!user[field] && user[field] != "username") {
        alert(`Veuillez remplir le champ ${field} !`);
        return;
      }
    }

    if (user.password != user.confirmPassword) {
      alert("Mot de passe et Confirmer mot de passe non identiques !");
      return;
    }
    loading = true;
    axios
      .post(`${$config.backendURL}/register`, {
        ...user,
        tel: `${prefix || ""}${user.tel}`.replaceAll("+2430", "+243"),
        email: user.email.trim(),
        username: user.email.trim(),
        password: user.password.trim(),
        country: user.country.value,
      })
      .then((res) => {
        loading = false;
        alert("✅ Compte créé !");
        console.log(res);
        localStorage.setItem("email", user.email);
        window.location = "/login";
      })
      .catch((err) => {
        alert("Une erreur s'est produite, recharger la page et réessayer");
        loading = false;
        console.log(err);
      });
  };
</script>

<svelte:head>
  <title>Enregistrement - M.A.N. - Maison D'Adoration Pour les Nations</title>
</svelte:head>

{#if get($config, "currentUser.username")}
  {(window.location = "/")}
{:else}
  <div
    class="content h-screen"
    style="background-image: url(/images/faveur-12.jpg); background-size: cover; background-position: center;"
  >
    <div class="overlay h-screen">
      <Container>
        <div class="pt-24 grid lg:grid-cols-2 pb-2">
          <div
            class="grid grid-cols-1 gap-3 px-4 py-6 rounded-lg bg-brand-white patterns"
          >
            <h1>
              Veuillez <span class="text-brand-primary"> remplir </span> le formulaire
              vous enregistrer!
            </h1>

            <div class="grid grid-cols-1 gap-3 select-item-1">
              <Select
                placeholder="Pays"
                bind:selectedValue={user.country}
                items={$countries.map(({ name }) => name)}
              />
            </div>

            <input
              type="text"
              bind:value={user.name}
              placeholder="Nom Complet"
            />

            <input type="text" bind:value={user.email} placeholder="Email" />

            <div class="grid grid-cols-3 gap-3">
              <input
                type="text"
                readonly
                bind:value={prefix}
                placeholder="Préfixe"
              />
              <input
                class="col-span-2"
                type="text"
                bind:value={user.tel}
                placeholder="Téléphone"
              />
            </div>

            <input
              type="password"
              bind:value={user.password}
              placeholder="Mot de passe"
            />
            <input
              type="password"
              bind:value={user.confirmPassword}
              placeholder="Confirmer mot de passe"
            />

            {#if !loading}
              <button
                class="btn btn-secondary"
                style="width: 100%;"
                on:click={handleSubmit}
              >
                Créer Votre Compte
                <ion-icon name="paper-plane" class="text-xl ml-2" />
              </button>
            {:else}
              <button
                class="btn btn-secondary animate-pulse"
                style="width: 100%;"
              >
                <ion-icon name="hourglass-outline" class="text-xl mr-2" />
                Veuillez Patienter...
              </button>
            {/if}

            <a
              href="/login"
              class="!w-full mt-2 text-center text-brand-primary text-xs tracking-wider underline underline-offset-2 decoration-brand-primary/20"
            >
              Vous avez un compte? Connectez-vous ici.
            </a>
          </div>
        </div>
      </Container>
    </div>
  </div>
{/if}

<style>
  .patterns {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23000000' fill-opacity='0.015' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
</style>
