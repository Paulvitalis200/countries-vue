
<template>
    <RouterLink to="/country/233">
     <a-card hoverable class="card">
    <template #cover>
      <a-skeleton-image class="flag" />
    </template>
    <a-skeleton active />
  </a-card>
</RouterLink>
</template>
<style scoped>
.flag{
    /* height: 160px; */
    border-radius: 5px 5px 0 0 !important;
    /* width: 100%; */
}


.card {
    box-shadow: rgba(99, 99, 99, 0.122) 0px 2px 8px 0px;
    border-radius: 5px;
    margin-bottom: 80px;
}

</style>