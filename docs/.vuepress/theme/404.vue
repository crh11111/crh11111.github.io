<template>
  <a class="not-found-page" href="/"></a>
</template>
<script setup>
const goHome = () => {
  window.location = "/";
};
</script>
<style scoped>
.not-found-page {
  display: block;
  width: 100vw;
  height: 100vh;
  background: url("../public/imgs/404.jpg") no-repeat;
  background-size: cover;
}
</style>
