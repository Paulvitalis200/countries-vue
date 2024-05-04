<script setup lang="ts">
import CountryCard from '../components/CountryCard.vue'
import SkeletonCard from '../components/SkeletonCard.vue';
import { ref, reactive, watch } from 'vue';
import {SearchOutlined, DownOutlined } from '@ant-design/icons-vue';
import type { MenuProps } from 'ant-design-vue';
import { useMonitorSize } from '../composables/monitor-size'
import type { FlexProps } from 'ant-design-vue';
import {useCountryStore} from '@/stores/countries'
import { storeToRefs } from 'pinia';
const search = ref<string>('');

const region:any = ref('')
const handleMenuClick: MenuProps['onClick'] = e => {
  if (e.key === 'all') {
    countryStore.fetchCountries()
    region.value = ''
  } else {
    countryStore.fetchRegionCountries(e.key)
    region.value = e.key
  }
  
};
const sizes = useMonitorSize();

const searchInput = ref('search-input-mobile-width')
const searchInputDesktop = ref('search-input-desktop-width')
const spanSize = () => {
  if (sizes.isMobile.value ) {
    return 24
  } else if (sizes.isTablet.value) {
    return 8
  } else {
    return 6
  }
}
const alignOptions = reactive<FlexProps['align'][]>(['flex-start', 'center', 'flex-end']);

const countryStore = useCountryStore()

const { filteredCountries, loading } = storeToRefs(countryStore)


const skeletons = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

watch(search, () => {
  countryStore.filterCountries(search.value)
})
</script>

<template>
  <main>
    <div class="container">
      <a-flex gap="large" :align="sizes.isMobile.value ? 'flex-start':  'center'" :justify="'space-between'" :vertical="!sizes.isMobile.value ? false: true" class="header">
        <a-input v-model:value="search" placeholder="Search for a country..." class="search-input" :class="sizes.isMobile.value ? searchInput : searchInputDesktop" >
          <template #prefix>
        <SearchOutlined style="color:#84848" />
      </template></a-input>
      <a-dropdown class="dropdown">
      <template #overlay>
        <a-menu @click="handleMenuClick">
          <a-menu-item key="all">
            All
          </a-menu-item>
          <a-menu-item key="Africa">
            Africa
          </a-menu-item>
          <a-menu-item key="America">
            America
          </a-menu-item>
          <a-menu-item key="Asia">
            Asia
          </a-menu-item>
          <a-menu-item key="Europe">
            Europe
          </a-menu-item>
          <a-menu-item key="Oceania">
            Oceania
          </a-menu-item>
        </a-menu>
      </template>
      <a-button v-if="region">
        Filter by Region: {{ region }}
        <DownOutlined />
      </a-button>
      <a-button v-else>
        Filter by Region
        <DownOutlined />
      </a-button>
    </a-dropdown>
  </a-flex>
    <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 74 }" v-if="!loading">
      
    <a-col class="gutter-row" :span="spanSize()" :key="country?.name.common" v-for="country in filteredCountries" >
      <CountryCard :country="country"/>
    </a-col>
  
   
    </a-row>

    <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 74 }" v-else>
      
    
      <a-col class="gutter-row" :span="spanSize()" :key="skeleton" v-for="skeleton in skeletons">
        
        <SkeletonCard />
      </a-col>
     
    </a-row>
  </div>
   
  </main>
</template>
<style scoped>
.container {
  width: 90%;
  padding-top: 48px;
  margin: 0 auto 0 auto;
  overflow-x: hidden;
}

main {
  background: #FAFAFA;
  height: 100vh;
}

.search-input {
  background-color: white;
  border: none;
  padding: 10px 10px 10px 32px;
  box-shadow: rgba(99, 99, 99, 0.122) 0px 2px 8px 0px;

}

.search-input-mobile-width {
  width: 100%;
}

.search-input-desktop-width {
  width: 30%;
}


.header {
  margin-bottom: 30px;
}

.region-select {
  border: none !important;
  box-shadow: rgba(99, 99, 99, 0.122) 0px 2px 8px 0px;
}

.dropdown {
  border-radius: 5px;
  border: none;
  box-shadow: rgba(99, 99, 99, 0.122) 0px 2px 8px 0px;
}
</style>