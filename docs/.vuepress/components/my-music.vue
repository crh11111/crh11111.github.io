<template>
  <div class="aplayer"></div>
</template>

<script setup>
import { defineProps, toRefs } from "vue";
import store from "../store/index";
let { musicIds } = toRefs(store);

const props = defineProps({
  id: String,
});
let { id } = toRefs(props);
musicIds.value.push(id);
</script>

<style scoped>
.aplayer {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
