<script setup lang="ts">
import { RouterLink } from 'vue-router';

const {country} = defineProps(['country'])
</script>
<template>
    <RouterLink to="/country/233">
     <a-card hoverable class="card">
    <template #cover>
      <img alt="example" :src="country.flags.png" class="flag"/>
    </template>
<h2 class="country-title">{{ country.name?.official }}</h2>
    <p class="population-text"><span class="bolden">Population: </span>{{ country.population }}</p>
      <p class="population-text"><span class="bolden">Region: </span>{{ country.region }}</p>
      <p class="population-text"><span class="bolden">Capital: </span>{{ country.capital?.length > 0 ? country?.capital[0] : '' }}</p>
  </a-card>
</RouterLink>
</template>
<style scoped>
.flag{
    height: 160px;
    border-radius: 5px 5px 0 0 !important;
}

.country-title {
    font-size: 16px;
    font-weight: 800;
    margin-bottom: 16px;
    font-family: "Nunito Sans", sans-serif;
}

.bolden {
    font-weight: 600;
}

.population-text {
    font-size: 14px;
    font-family: "Nunito Sans", sans-serif;
}

.card {
    box-shadow: rgba(99, 99, 99, 0.122) 0px 2px 8px 0px;
    border-radius: 5px;
    margin-bottom: 80px;
}

</style>