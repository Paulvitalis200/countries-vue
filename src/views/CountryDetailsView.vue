<script setup lang="ts">
import { reactive, ref } from 'vue';
import { ArrowLeftOutlined } from '@ant-design/icons-vue';
import type { FlexProps } from 'ant-design-vue';
import { useMonitorSize } from '../composables/monitor-size';
import { RouterLink } from 'vue-router';
const customGapSize = ref<number>(44);
const detailsGapSize = ref<number>(150)

const alignOptions = reactive<FlexProps['align'][]>(['flex-start', 'center', 'flex-end']);
const alignItems = ref(alignOptions[1]);

const sizes = useMonitorSize();

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
       
        <a-flex :gap="customGapSize" :vertical="!sizes.isMobile.value ? false: true">
            <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" :class="sizes.isMobile.value ? 'country-flag-mobile' : 'country-flag'"/>
            <a-flex vertical>
                <a-typography-title :level="2">Belgium</a-typography-title>
             
                <a-flex :gap="sizes.isMobile.value ? 32 : detailsGapSize" :vertical="!sizes.isMobile.value ? false: true">
                    <a-flex gap="middle" vertical>
                        <a-typography-text strong>Native name: <span class="native">Belgie</span></a-typography-text>
                        <a-typography-text strong>Population: <span class="native">Belgie</span></a-typography-text>
                        <a-typography-text strong>Region: <span class="native">Belgie</span></a-typography-text>
                        <a-typography-text strong>Sub Region: <span class="native">Belgie</span></a-typography-text>
                        <a-typography-text strong>Capital: <span class="native">Belgie</span></a-typography-text>
                    </a-flex>
                    <a-flex gap="middle" vertical>
                        <a-typography-text strong>Top level Domain: <span class="native">Belgie</span></a-typography-text>
                        <a-typography-text strong>Currencies: <span class="native">Belgie</span></a-typography-text>
                        <a-typography-text strong>Languages: <span class="native">Belgie</span></a-typography-text>
                    </a-flex>
                </a-flex>
                <a-flex gap="middle" :align="sizes.isMobile.value ? 'flex-start' :  'center'" :vertical="!sizes.isMobile.value ? false: true" class="border-countries-container" :wrap="'wrap'">
                    <a-typography-text strong>Border Countries: </a-typography-text>
                    <a-flex gap="middle" horizontal>
                        <a-typography-text class="border-countries">France</a-typography-text>
                        <a-typography-text class="border-countries">Germany</a-typography-text>
                        <a-typography-text class="border-countries">Netherlands</a-typography-text>
                    </a-flex>
                </a-flex>
            </a-flex>
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