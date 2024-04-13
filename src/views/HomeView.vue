<script setup lang="ts">
import CountryCard from '../components/CountryCard.vue'
import { watch, ref, onMounted, reactive } from 'vue';
import { UserOutlined, InfoCircleOutlined, SearchOutlined, DownOutlined } from '@ant-design/icons-vue';
import Navbar from '../components/Navbar.vue';
import type { MenuProps } from 'ant-design-vue';
import { useMonitorSize } from '../composables/monitor-size'
import type { FlexProps } from 'ant-design-vue';
const value = ref<string>('');
const value1 = ref<string>('');
watch(value, () => {
  console.log(value.value);
});
watch(value1, () => {
  console.log(value1.value);
});
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const handleMenuClick: MenuProps['onClick'] = e => {
  console.log('click', e);
};
const sizes = useMonitorSize();
console.log(sizes)

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
const alignItems = ref(alignOptions[1]);
const alignItemsMobile = ref(alignOptions[0]);
</script>

<template>
  <main>
    <div class="container">
      <a-flex gap="large" :align="sizes.isMobile.value ? alignItemsMobile :  alignItems" :justify="'space-between'" :vertical="!sizes.isMobile.value ? false: true" class="header">
        <a-input v-model:value="value" placeholder="Search for a country..." class="search-input" :class="sizes.isMobile.value ? searchInput : searchInputDesktop" >
          <template #prefix>
        <SearchOutlined style="color:#84848"/>
      </template></a-input>
      <a-dropdown class="dropdown">
      <template #overlay>
        <a-menu @click="handleMenuClick">
          <a-menu-item key="1">
            <UserOutlined />
            1st menu item
          </a-menu-item>
          <a-menu-item key="2">
            <UserOutlined />
            2nd menu item
          </a-menu-item>
          <a-menu-item key="3">
            <UserOutlined />
            3rd item
          </a-menu-item>
        </a-menu>
      </template>
      <a-button>
        Filter by Region
        <DownOutlined />
      </a-button>
    </a-dropdown>
  </a-flex>
    <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 74 }">
    <a-col class="gutter-row" :span="spanSize()" :key="card" v-for="card in cards">
      <CountryCard />
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
  font-family: 'Nunito Sans', sans-serif;
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