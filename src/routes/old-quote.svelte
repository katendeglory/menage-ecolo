<script>
  import { onMount } from "svelte";
  import get from "lodash.get";
  import Select from "svelte-select";
  import config from "../stores/config";
  import axios from "axios";
  import Container from "../components/utils/Container.svelte";
  import t from "../utils/t";

  // live total
  let TOTAL = 0;
  let formattedPrices = [];

  const defaultFACTURE = {
    // Meta
    userLang: localStorage.getItem("lang"),
    type: "",
    frequence: "",
    // Prices
    text: {
      studios: "",
      maison: "",
      extraRegulier: [],
      extraGros: [],
    },
    prices: {
      studios: "",
      maison: "",
      extraRegulier: [],
      extraGros: [],
    },
  };

  let FACTURE = { ...defaultFACTURE };

  let categoriesLang = {
    fr: [
      {
        label: "Ménage régulier",
        value: "regulier",
        desc: "Régulier & fréquent",
      },
      {
        label: "Ménage léger",
        value: "leger",
        desc: "Dépoussiérage, passer l'aspirateur et nettoyage de la salle de bain + cuisine",
      },
      {
        label: "Gros ménage",
        value: "gros",
        desc: "" /*...............................*/,
      },
      {
        label: "Demenagement",
        value: "demenagement",
        desc: "" /*...............................*/,
      },
    ],
    en: [
      {
        label: "Regular cleaning",
        value: "regulier",
        desc: "Regular and frequent",
      },
      {
        label: "Lite cleaning",
        value: "leger",
        desc: "Dusting, vacuuming and cleaning the bathroom + kitchen",
      },
      {
        label: "Pretty Dirty",
        value: "gros",
        desc: "" /*...............................*/,
      },
      {
        label: "Moving Out",
        value: "demenagement",
        desc: "" /*...............................*/,
      },
    ],
    es: [
      {
        label: "Limpieza regular",
        value: "regulier",
        desc: "Regular y frecuente",
      },
      {
        label: "Limpieza liviana",
        value: "leger",
        desc: "Desempolvar, aspirar y limpiar el baño + cocina",
      },
      {
        label: "Bastante sucia",
        value: "gros",
        desc: "" /*...............................*/,
      },
      {
        label: "Mudarse",
        value: "demenagement",
        desc: "" /*...............................*/,
      },
    ],
  };

  let studioLang = {
    fr: ["studio", "1", "2", "3", "4", "5"],
    en: ["studio", "1", "2", "3", "4", "5"],
    es: ["studio", "1", "2", "3", "4", "5"],
  };

  let maisonLang = {
    fr: [
      "2 chambres et 2 salles de bain",
      "3 chambre et 2 salles de bain",
      "4 chambre, 2 salons et 1 salle familiale",
      "5 chambre 2 salons et 1 salle familiale",
    ],
    en: [
      "2 bedrooms and 2 bathrooms",
      "3 bedrooms and 2 bathrooms",
      "4 bedrooms, 2 living studios and 1 family room",
      "5 bedrooms 2 living studios and 1 family room",
    ],
    es: [
      "2 dormitorios y 2 baños",
      "3 dormitorios y 2 baños",
      "4 dormitorios, 2 salones y 1 sala familiar",
      "5 dormitorios 2 salas de estar y 1 sala familiar",
    ],
  };

  let extraRegulierLang = {
    fr: [
      "Intérieur du four",
      "Intérieur du micro-onde",
      "Vaisselle",
      "Faire les lits avec de nouveaux draps",
    ],
    en: [
      "Inside the oven",
      "Inside the microwave",
      "Dishes",
      "Make the beds with new sheets",
    ],
    es: [
      "Interior del horno",
      "Interior del microondas",
      "Platos",
      "Hacer las camas con sábanas nuevas",
    ],
  };

  let extraGrosLang = {
    fr: [
      "Intérieur du four",
      "Murs et portes",
      "Nettoyage des vitres à l'extérieur",
      "Intérieur du frigo",
      "Machine à laver et machine à sécher",
      "Stores",
      "Nettoyage luminaire",
      "Nettoyage des ventilations",
      "Micro-ondes",
    ],
    en: [
      "Inside the oven",
      "Walls and doors",
      "Cleaning the windows outside",
      "Inside the fridge",
      "Washing machine and dryer",
      "Blinds",
      "Cleaning the light fixture",
      "Cleaning the vents",
      "Microwave",
    ],
    es: [
      "Interior del horno",
      "Paredes y puertas",
      "Limpieza de cristales en el exterior",
      "Dentro de la nevera",
      "Lavadora y secadora",
      "Persianas",
      "Limpieza de iluminación",
      "Limpieza de la ventilación",
      "Microondas",
    ],
  };

  let frequenceLang = {
    fr: [
      { value: "0", label: "Une fois" },
      { value: "1", label: "Hebdomadairement" },
      { value: "2", label: "Toutes les 2 semaines" },
      { value: "3", label: "Mensuellement" },
    ],
    en: [
      { value: "0", label: "One Time" },
      { value: "1", label: "Weekly" },
      { value: "2", label: "Bi-Weekly" },
      { value: "3", label: "Monthly" },
    ],
    es: [
      { value: "0", label: "Una vez" },
      { value: "1", label: "Semanal" },
      { value: "2", label: "Cada 2 semanas" },
      { value: "3", label: "Mensual" },
    ],
  };

  // Studio, 1 Chambre ... 5 Chambres
  const tarifStudio = {
    regulier: [85, 95, 105, 115, 135, 155],
    leger: [65, 75, 85, 95, 105, 125],
    gros: [100, 120, 140, 160, 230, 250],
    demenagement: [125, 145, 165, 185, 255, 275],
  };

  const tarifMaison = [120, 150, 170, 190];

  const tarifExtraRegulier = [25, 10, 20, 20];

  const tarifExtraGros = [25, 30, 30, 30, 20, 35, 20, 10, 10];

  // ..............................................
  let categories = [];
  // ..............................................
  let studio = [];
  let maison = [];
  let extraRegulier = [];
  let extraGros = [];
  // ..............................................
  let frequence = [];
  // ..............................................

  const setValuesFromLang = () => {
    let lang = localStorage.getItem("lang");

    if (lang == "en") {
      categories = categoriesLang.en;
      // ..............................................
      studio = studioLang.en;
      maison = maisonLang.en;
      extraRegulier = extraRegulierLang.en;
      extraGros = extraGrosLang.en;
      // ..............................................
      frequence = frequenceLang.en;
    } else if (lang == "es") {
      categories = categoriesLang.es;
      // ..............................................
      studio = studioLang.es;
      maison = maisonLang.es;
      extraRegulier = extraRegulierLang.es;
      extraGros = extraGrosLang.es;
      // ..............................................
      frequence = frequenceLang.es;
    } else {
      categories = categoriesLang.fr;
      // ..............................................
      studio = studioLang.fr;
      maison = maisonLang.fr;
      extraRegulier = extraRegulierLang.fr;
      extraGros = extraGrosLang.fr;
      // ..............................................
      frequence = frequenceLang.fr;
    }
  };

  const toggleArray = (array, i) => {
    if (array.find((el) => el == `${i}`))
      array = array.filter((el) => el != `${i}`);
    else array = [...array, `${i}`];
    return array;
  };

  onMount(() => {
    setValuesFromLang();
  });

  $: {
    // 🟥🟥🟥 RESETTER : HERE 🟥🟥🟥
    TOTAL = 0;
    formattedPrices = [];

    let { categorie } = booking;

    if (categorie) {
      // "studios" : price depends on category
      if (booking.studios) {
        FACTURE.text.studios = "chambre(s): " + studioLang.fr[booking.studios];
        FACTURE.prices.studios = tarifStudio[categorie][booking.studios];
      }

      // "maison"
      if (booking.maison) {
        FACTURE.text.maison = maisonLang.fr[booking.maison];
        FACTURE.prices.maison = tarifMaison[booking.maison];
      }

      // "extraRegulier"
      if (booking.extraRegulier) {
        let texts = [];
        let prices = [];

        booking.extraRegulier.forEach((extra) => {
          texts.push(extraRegulierLang.fr[extra]);
          prices.push(tarifExtraRegulier[extra]);
        });

        FACTURE.text.extraRegulier = texts;
        FACTURE.prices.extraRegulier = prices;
      }

      // "extraGros"
      if (booking.extraGros) {
        let texts = [];
        let prices = [];

        booking.extraGros.forEach((extra) => {
          texts.push(extraGrosLang.fr[extra]);
          prices.push(tarifExtraGros[extra]);
        });

        FACTURE.text.extraGros = texts;
        FACTURE.prices.extraGros = prices;
      }

      // "frequence"
      if (booking.frequence) {
        FACTURE.frequence = frequenceLang.fr[booking.frequence].label;
      }

      let line1 = [
        !FACTURE.text.studios
          ? null
          : `$${FACTURE.prices.studios} -> ${FACTURE.text.studios}`,
        !FACTURE.text.maison
          ? null
          : `$${FACTURE.prices.maison} -> ${FACTURE.text.maison}`,
      ];

      if (FACTURE.prices.studios) TOTAL += FACTURE.prices.studios;
      if (FACTURE.prices.maison) TOTAL += FACTURE.prices.maison;

      let line2 =
        FACTURE.text.extraRegulier.length == 0
          ? []
          : FACTURE.text.extraRegulier.map((extra, i) => {
              TOTAL += FACTURE.prices.extraRegulier[i];
              return `$${FACTURE.prices.extraRegulier[i]} -> Extra: ${extra}`;
            });

      let line3 =
        FACTURE.text.extraGros.length == 0
          ? []
          : FACTURE.text.extraGros.map((extra, i) => {
              TOTAL += FACTURE.prices.extraGros[i];
              return `$${FACTURE.prices.extraGros[i]} -> Extra: ${extra}`;
            });

      formattedPrices = [...line1, ...line2, ...line3].filter((el) => el);

      console.log(formattedPrices);
    }
  }

  const defaultBooking = {
    studios: "",
    maison: "",
    extraRegulier: [],
    extraGros: [],
    // ..................................
    fullName: "", //
    email: "", //
    tel: "", //
    // ..................................
    addresse: "", //
    appart: "", //
    cite: "", //
    etat: "", //
    zip: "", //
    // ..................................
    instruction: "", //
    // ..................................
    frequence: "",
    // More...
    categorieDesc: "",
    date: "",
  };

  let booking = { categorie: "", ...defaultBooking };

  let loading = false;

  let handleSubmit = () => {
    // for (const field in booking) {
    //   if (!booking[field] && booking[field] != "username") {
    //     alert(`Veuillez remplir le champ ${field} !`);
    //     return;
    //   }
    // }

    loading = true;

    // ..................................
    let { userLang, type, frequence } = FACTURE;

    let templateParams = {
      ...booking,
      date: new Date(booking.date).toLocaleDateString(),
      userLang,
      type,
      frequence,
      formattedPrices,
      TOTAL,
    };

    let {
      extraGros,
      extraRegulier,
      maison,
      studios,
      ...cleanedTemplateParams
    } = templateParams;

    console.log(cleanedTemplateParams);

    emailjs
      .send("service_booking", "template_booking", cleanedTemplateParams)
      .then(
        (response) => {
          loading = false;
          console.log("SUCCESS!", response.status, response.text);
          alert(`✅ Thank you for the message, We'll get back to you!`);
          // 🟥🟥🟥 RESETTER : HERE 🟥🟥🟥
          booking = { categorie: "", ...defaultBooking };
          TOTAL = 0;
          FACTURE = { ...defaultFACTURE };
          FACTURE.text.maison = "";
          FACTURE.text.studios = "";
          FACTURE.prices.maison = 0;
          FACTURE.prices.studios = 0;
          formattedPrices = [];
        },
        (error) => {
          console.log("FAILED...", error);
          alert(`❌ The booking servers are down, Try again later!`);
          loading = false;
        },
      );
  };
</script>

<svelte:head>
  <title>
    {t(
      `Cotation - Ménage Écolo - La propreté est un luxe à la portée de tout le monde.`,
      "Quotation - Ménage Écolo - Cleanliness is a luxury within everyone's reach.",
      "Presupuesto - Ménage Écolo - La limpieza es un lujo al alcance de todos.",
    )}
  </title>
</svelte:head>

<div
  class="content min-h-[125vh]"
  style="background-image: url(/images/background-02.jpg); background-size: cover; background-position: center;"
>
  <div class="overlay min-h-[125vh] pt-[5rem]">
    <Container>
      <div
        class="pt-24 grid grid-cols-1 lg:grid-cols-3 pb-2 gap-y-2 lg:gap-x-2"
      >
        <div
          class="col-span-2 grid grid-cols-1 gap-5 px-4 py-6 rounded-lg border border-gray-300/40 bg-white"
        >
          <h1
            class="h-font text-xl text-brand-primary uppercase tracking-widest"
          >
            {t(`Faire une réservation`, `Make a booking`, `Hacer una reserva`)}
          </h1>

          <!--  -->
          <h2>{t(`Type`, `Type`, `Tipo`)}:</h2>
          <div class="-mt-4 grid grid-cols-1 select-item-1">
            <Select
              placeholder="..."
              items={categories}
              on:select={(e) => {
                // 🟥🟥🟥 RESETTER : HERE 🟥🟥🟥
                booking = { ...defaultBooking };
                FACTURE = { ...defaultFACTURE };
                FACTURE.text.maison = "";
                FACTURE.text.studios = "";
                FACTURE.prices.maison = 0;
                FACTURE.prices.studios = 0;

                formattedPrices = [];
                TOTAL = 0;

                console.log({ booking, FACTURE, formattedPrices, TOTAL });

                // Set values now...
                booking.categorie = e.detail.value;
                booking.categorieDesc = e.detail.desc;
                FACTURE.type = booking.categorie;
              }}
            />
          </div>
          <div class="-mt-4 text-sm pl-2 text-gray-600">
            {booking.categorieDesc || ""}
          </div>

          {#if booking.categorie}
            <!--  -->
            <h2>
              {t(
                `Nombre de chambres`,
                `Number of rooms`,
                `Número de habitaciones`,
              )} :
            </h2>
            <div class="-mt-4 grid grid-cols-3 gap-2">
              {#each studio as s, i}
                <button
                  class:!bg-brand-primary={booking.studios == `${i}`}
                  class:!text-white={booking.studios == `${i}`}
                  on:click={() => (booking.studios = `${i}`)}
                  class="text-sm px-4 py-2 flex items-center justify-center rounded-md bg-brand-white-light"
                >
                  {s}
                </button>
              {/each}
            </div>

            <!--  -->
            {#if booking.categorie == "regulier"}
              <h2>{t(`Ou Maison`, `Or House`, `O Casa`)}:</h2>
              <div class="-mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {#each maison as m, i}
                  <button
                    on:click={() => (booking.maison = `${i}`)}
                    class:!bg-brand-primary={booking.maison == `${i}`}
                    class:!text-white={booking.maison == `${i}`}
                    class="text-sm px-4 py-2 flex justify-center items-center rounded-md bg-brand-white-light text-gray-500"
                  >
                    {m}
                  </button>
                {/each}
              </div>
            {/if}

            <!--  -->
            {#if booking.categorie == "regulier"}
              <h2>Extra:</h2>
              <div class="-mt-4 grid grid-cols-2 gap-2">
                {#each extraRegulier as extra, i}
                  <button
                    on:click={() =>
                      (booking.extraRegulier = [
                        ...toggleArray(booking.extraRegulier, `${i}`),
                      ])}
                    class:!bg-brand-primary={booking.extraRegulier.find(
                      (el) => el == `${i}`,
                    )}
                    class:!text-white={booking.extraRegulier.find(
                      (el) => el == `${i}`,
                    )}
                    class="text-sm px-4 py-2 flex justify-center items-center rounded-md bg-brand-white-light text-gray-500"
                  >
                    {extra}
                  </button>
                {/each}
              </div>
            {/if}

            <!--  -->
            {#if booking.categorie == "gros"}
              <h2>Extra:</h2>
              <div class="-mt-4 grid grid-cols-2 gap-2">
                {#each extraGros as extra, i}
                  <button
                    on:click={() =>
                      (booking.extraGros = [
                        ...toggleArray(booking.extraGros, `${i}`),
                      ])}
                    class:!bg-brand-primary={booking.extraGros.find(
                      (el) => el == `${i}`,
                    )}
                    class:!text-white={booking.extraGros.find(
                      (el) => el == `${i}`,
                    )}
                    class="text-sm px-4 py-2 flex justify-center items-center rounded-md bg-brand-white-light text-gray-500"
                  >
                    {extra}
                  </button>
                {/each}
              </div>
            {/if}

            <!--  -->
            <h2>{t(`Frequence`, `How Often`, `Con qué frecuencia`)}:</h2>
            <div class="-mt-4 grid grid-cols-1 select-item-1">
              <Select
                placeholder="..."
                items={frequence}
                on:select={(e) => {
                  booking.frequence = e.detail.value;
                }}
              />
            </div>

            <!--  -->
            <h2>Date:</h2>
            <input
              type="date"
              bind:value={booking.date}
              placeholder={t(
                `Date du booking`,
                `Booking For`,
                `Fecha de reserva`,
              )}
            />

            <!--  -->
            <div class="h-[1px] bg-gray-300 col-span-full w-[70%] mx-auto" />
            <!--  -->

            <input
              type="text"
              bind:value={booking.fullName}
              placeholder={t(
                `Votre Nom Complet`,
                `Your Fullname`,
                `Tu nombre completo`,
              )}
            />

            <input
              type="text"
              bind:value={booking.email}
              placeholder={t(`Email`, `Email`, `Email`)}
            />
            <input
              type="text"
              bind:value={booking.tel}
              placeholder={t(`Telephone`, `Telephone`, `Telephone`)}
            />

            <!--  -->
            <div class="h-[1px] bg-gray-300 col-span-full w-[70%] mx-auto" />
            <!--  -->

            <input
              type="text"
              bind:value={booking.addresse}
              placeholder={t(`Addresse`, `Address`, `Direccion`)}
            />
            <input
              type="text"
              bind:value={booking.appart}
              placeholder={t(
                `Appart/Suite #`,
                `Appart/Suite #`,
                `Apartamento/Suite #`,
              )}
            />
            <input
              type="text"
              bind:value={booking.cite}
              placeholder={t(`Cité`, `City`, `Ciudad`)}
            />
            <input
              type="text"
              bind:value={booking.etat}
              placeholder={t(`Etat`, `State`, `Estado`)}
            />
            <input
              type="text"
              bind:value={booking.zip}
              placeholder={t(`ZIP`, `ZIP`, `Código postal`)}
            />

            <!--  -->
            <div class="h-[1px] bg-gray-300 col-span-full w-[70%] mx-auto" />
            <!--  -->

            <textarea
              rows="4"
              type="text"
              bind:value={booking.instruction}
              placeholder={t(
                `Intructions Speciales`,
                `Special Instructions`,
                `Instrucciones especiales`,
              )}
            />
          {:else}
            <div class="-mt-14 flex items-center justify-center">
              <img src="/favicon.png" class="h-28 md:h-32 mr-2" alt="home" />
            </div>
          {/if}
        </div>
        <!--  -->
        <div class="bg-brand-white text-gray-800 rounded-md px-2 py-4">
          {#each formattedPrices as fm}
            <div class="text-sm mt-2 px-4 py-2 rounded-md bg-white shadow-sm">
              {fm}
            </div>
          {/each}

          <div class="text-sm mt-2 px-4 py-2 rounded-md bg-white shadow-sm">
            TOTAL: ${TOTAL}
          </div>

          {#if !loading}
            <button
              class="mt-2 !py-1 !rounded-md btn btn-secondary !h-min"
              style="width: 100%;"
              on:click={handleSubmit}
            >
              {t(`Reserver`, `Book`, `Para reservar`)}

              <span class="material-symbols-outlined ml-2 text-3xl">
                trending_flat
              </span>
            </button>
          {:else}
            <button
              class="mt-2 !py-1 !rounded-md btn btn-secondary animate-pulse"
              style="width: 100%;"
            >
              <span class="material-symbols-outlined mr-2 text-3xl">
                hourglass_top
              </span>
            </button>
          {/if}
        </div>
      </div>
    </Container>
  </div>
</div>
