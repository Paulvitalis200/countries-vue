<script setup lang="ts">
import { reactive, ref } from 'vue';
import { ArrowLeftOutlined } from '@ant-design/icons-vue';
import type { CSSProperties } from 'vue';
import type { FlexProps } from 'ant-design-vue';
type SizeType = 'small' | 'middle' | 'large' | undefined;
const gapSize = ref<SizeType | 'customize'>(undefined);

const customGapSize = ref<number>(100);
const detailsGapSize = ref<number>(150);
    const justifyOptions = reactive<FlexProps['justify'][]>([
  'flex-start',
  'center',
  'flex-end',
  'space-between',
  'space-around',
  'space-evenly',
]);

const alignOptions = reactive<FlexProps['align'][]>(['flex-start', 'center', 'flex-end']);
const justify = ref(justifyOptions[0]);
const alignItems = ref(alignOptions[1]);
</script>
<template>
    <main>
        <div class="container">
        <a-flex gap="middle" horizontal class="top" :align="alignItems">
            <ArrowLeftOutlined />
            <a-typography-text class="back-text">Back</a-typography-text>
        </a-flex>
       
        <a-flex :gap="customGapSize" horizontal>
            <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" class="country-flag"/>
            <div>
                <a-typography-title :level="2">Belgium</a-typography-title>
             
                <a-flex :gap="detailsGapSize" horizontal>
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
                <a-flex gap="middle" :align="alignItems" horizontal class="border-countries-container">
                    <a-typography-text strong>Border Countries: </a-typography-text>
                    <a-flex gap="middle" horizontal>
                        <a-typography-text class="border-countries">France</a-typography-text>
                        <a-typography-text class="border-countries">Germany</a-typography-text>
                        <a-typography-text class="border-countries">Netherlands</a-typography-text>
                    </a-flex>
                </a-flex>
            </div>
        </a-flex>
</div>
    </main>
</template>
<style scoped>
.top {
    margin-top: 80px;
    margin-bottom: 80px;
}
.country-flag {
    width: 30%;
}

.container {
    width: 80%;
    margin: 0 auto;
}

.native {
    font-weight: 400;
}
.border-countries {
    padding: 5px 15px;
   box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
   border-radius: 5px;
}

.border-countries-container {
    margin-top: 50px;
}
</style>