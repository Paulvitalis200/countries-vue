<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
<template>
    <main>
        <div class="container">
            <RouterLink to="/">
        <a-typography-title :level="4" class="title">Where in the world?</a-typography-title>
    </RouterLink>
        <a-typography-text class="dark-mode-text">Dark Mode</a-typography-text>
        </div>
    </main>
</template>
<style scoped>

.container {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
}
main {
   
    padding: 15px 0;
    background: white;
    box-shadow: rgba(99, 99, 99, 0.122) 0px 2px 8px 0px;
}

.title {
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 700;
    margin: 0;
}

.dark-mode-text {
    font-size: 16px;
    font-weight: 500;
}

a { text-decoration: none; color: black }
</style>