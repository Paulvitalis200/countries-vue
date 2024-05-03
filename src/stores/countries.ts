import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useCountryStore = defineStore("countries", () => {
  const countries = ref([]);
  const loading = ref(false);

  const fetchCountries = async () => {
    loading.value = true;

    const { data } = await axios.get("https://restcountries.com/v3.1/all");

    countries.value = data;
    loading.value = false;
  };

  return { countries, loading, fetchCountries };
});
