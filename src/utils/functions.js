import { get } from 'svelte/store';
import countries from '../stores/countries';

export const deriveCurrency = (countryName) => {
  let country = get(countries).find(c => c.name == countryName);
  if (!country) return "";
  else return country.curr;
}


export const derivePrefix = (countryName) => {
  let country = get(countries).find(c => c.name == countryName);
  if (!country) return "";
  else return country.prefix;
}