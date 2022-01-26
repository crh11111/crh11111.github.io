<template>
  <div class="aplayer"></div>
</template>

<script setup>
import { defineProps, toRefs } from "vue";
import ids from "./music";

const props = defineProps({
  id: String,
});
let { id } = toRefs(props);
ids.push(id);
</script>
