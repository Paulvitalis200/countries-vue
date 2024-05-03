<script setup lang="ts">
import {  RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import {useCountryStore} from '@/stores/countries'
import { ref, reactive, onMounted } from 'vue';

const countryStore = useCountryStore();
onMounted(() => {
  countryStore.fetchCountries()
})
</script>

<template>
  <Navbar />
  <RouterView />
</template>

<style scoped>

</style>
