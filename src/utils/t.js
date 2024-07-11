let defautLang = "fr";

const t = (fr, en, es) => {

  let lang = localStorage.getItem('lang');

  if (!lang) localStorage.setItem("lang", defautLang);

  if (lang !== "en" && lang !== "fr" && lang !== "es") localStorage.setItem("lang", defautLang);

  switch (lang) {
    case "fr": return fr;
    case "en": return en;
    case "es": return es;
    default: return fr;
  }
}

export default t;