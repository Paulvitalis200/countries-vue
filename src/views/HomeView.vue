<script setup lang="ts">
import CountryCard from '../components/CountryCard.vue'
import { watch, ref } from 'vue';
import { UserOutlined, InfoCircleOutlined, SearchOutlined, DownOutlined } from '@ant-design/icons-vue';
import Navbar from '../components/Navbar.vue';
import type { MenuProps } from 'ant-design-vue';

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
</script>

<template>
  <main>
    <Navbar />
    <div class="container">
      <div class="header">
        <a-input v-model:value="value" placeholder="Search for a country..." class="search-input">
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
      </div>
    <a-row :gutter="74">
    <a-col class="gutter-row" :span="6" :key="card" v-for="card in cards">
      <CountryCard />
    </a-col>
   
    </a-row>
  </div>
   
  </main>
</template>
<style scoped>
.container {
  width: 90%;
  margin: 48px auto 0 auto;
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
  width: 30%;
}

.header {
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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