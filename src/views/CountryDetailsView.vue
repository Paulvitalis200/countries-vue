<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue';
import { ArrowLeftOutlined } from '@ant-design/icons-vue';
import type { FlexProps } from 'ant-design-vue';
import { useMonitorSize } from '../composables/monitor-size';
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';
import  CountryInterface  from '../models/country';

import axios from "axios";
const customGapSize = ref<number>(44);
const detailsGapSize = ref<number>(150)

const alignOptions = reactive<FlexProps['align'][]>(['flex-start', 'center', 'flex-end']);
const alignItems = ref(alignOptions[1]);

const sizes = useMonitorSize();
const country = ref<CountryInterface | {}>({})
const loading = ref(true)

onMounted(async () => {
    const route = useRoute()
    const routeparams:string = route.params.name
    const { data } = await axios.get(`https://restcountries.com/v3.1/name/${routeparams}?fullText=true`);
    country.value = data[0]
    loading.value = false
})


</script>
<template>
    <main>
        <div class="container">
            <RouterLink to="/">
            <a-flex gap="middle" horizontal class="back-btn" :class="sizes.isMobile.value ? 'top-mobile' : 'top'" :align="alignItems">
            <ArrowLeftOutlined />
            
                <a-typography-text class="back-text">Back</a-typography-text>

        </a-flex>
    </RouterLink>
       
        <a-flex :gap="customGapSize" :vertical="!sizes.isMobile.value ? false: true" v-if="country && !loading">
            <img :src="country.flags.png" :class="sizes.isMobile.value ? 'country-flag-mobile' : 'country-flag'"/>
            <a-flex vertical>
                <a-typography-title :level="2">{{ country.name.common }}</a-typography-title>
             
                <a-flex :gap="sizes.isMobile.value ? 32 : detailsGapSize" :vertical="!sizes.isMobile.value ? false: true">
                    <a-flex gap="middle" vertical>
                        <a-typography-text strong>Native name: <span class="native">{{ country.name.nativeName[
                              Object.keys(country.name.nativeName)[0]
                            ].common }}</span></a-typography-text>
                        <a-typography-text strong>Population: <span class="native">{{ country.population }}</span></a-typography-text>
                        <a-typography-text strong>Region: <span class="native">{{ country.region }}</span></a-typography-text>
                        <a-typography-text strong>Sub Region: <span class="native">{{ country.subregion }}</span></a-typography-text>
                        <a-typography-text strong>Capital: <span class="native">{{ country.capital[0] }}</span></a-typography-text>
                    </a-flex>
                    <a-flex gap="middle" vertical>
                        <a-typography-text strong>Top level Domain: <span class="native">{{ country.tld[0] }}</span></a-typography-text>
                        <a-typography-text strong>Currencies: <span class="native">{{ country.currencies[
                              Object.keys(country.currencies)[0]
                            ].name }}</span></a-typography-text>
                        <a-typography-text strong>Languages: <span class="native">{{ Object.values(country.languages).join(", ") }}</span></a-typography-text>
                    </a-flex>
                </a-flex>
                <a-flex 
                gap="middle"
                 :align="sizes.isMobile.value ? 'flex-start' :  'center'"
                  :vertical="!sizes.isMobile.value ? false: true"
                   class="border-countries-container"
                    :wrap="'wrap'"
                    v-if="country.borders">
                    <a-typography-text strong>Border Countries: </a-typography-text>
                    <a-flex gap="middle" horizontal >
                        <a-typography-text class="border-countries" v-for="border in country.borders" :key="border">{{ border }}</a-typography-text>
                    </a-flex>
                </a-flex>
            </a-flex>
        </a-flex>

        <a-flex :gap="customGapSize" :vertical="!sizes.isMobile.value ? false: true" v-else>
            <a-skeleton-image />
            <a-skeleton active />
            
        </a-flex>
</div>
    </main>
</template>
<style scoped>
main {
    font-family: "Nunito Sans", sans-serif;
}
.top {
    margin-top: 80px;
    margin-bottom: 80px;
}
.country-flag {
    width: 30%;
}

.country-mobile {
  
    height: 230px;
}

.container {
    width: 80%;
    margin: 0 auto;
}

.native {
    font-weight: 400;
    font-family: "Nunito Sans", sans-serif;
}
.border-countries {
    padding: 5px 15px;
   box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
   border-radius: 5px;
}

.border-countries-container {
    margin-top: 50px;
}

.top-mobile {
    margin-top: 40px;
    margin-bottom: 40px;
}

img {
    border-radius: 5px;
}

.back-btn {
    width: 100px;
    padding: 5px 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
   border-radius: 5px;
}

a { text-decoration: none; color: black }
</style>