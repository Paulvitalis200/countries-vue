import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useCountryStore = defineStore("countries", () => {
  const countries = ref([]);
  const loading = ref(false);
  const filteredCountries = ref([]);
  const country = ref({});

  const fetchCountries = async () => {
    loading.value = true;

    const { data } = await axios.get("https://restcountries.com/v3.1/all");

    countries.value = data;
    filteredCountries.value = data;
    loading.value = false;
  };

  const fetchRegionCountries = async (region: any) => {
    loading.value = true;

    const { data } = await axios.get(
      `https://restcountries.com/v3.1/region/${region}`
    );

    filteredCountries.value = data;
    loading.value = false;
  };

  const filterCountries = (country: string) => {
    filteredCountries.value = countries.value.filter((countryState: any) =>
      countryState.name.common.toLowerCase().includes(country.toLowerCase())
    );
  };

  return {
    countries,
    loading,
    fetchCountries,
    fetchRegionCountries,
    filterCountries,
    filteredCountries,
  };
});
