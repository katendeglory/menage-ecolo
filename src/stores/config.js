import { writable } from 'svelte/store'

const config = writable({
  // backendURL: "http://localhost:5000",
  // backendURL: "http://192.168.137.1:5000",
  backendURL: "https://maison-adoration.onrender.com",
  currentUser: null,
  categories: null,
  stats: null,
  titles: null,
  settings: {
    MERCHANT: null,
    TOKEN_MOBILE: null,
    URL_CARD: null,
    CALL_BACK_URL: null,
    CURRENCY: null
  }
});

export default config;