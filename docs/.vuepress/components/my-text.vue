<template>
  <span
    :style="{
      color,
      'font-size': size,
      'font-weight': weight,
    }"
    ><slot></slot
  ></span>
</template>

<script setup lang="ts">
import { defineProps, toRefs } from "vue";
interface props {
  color?: string;
  size?: string;
  weight?: string;
}

const props: props = defineProps({
  color: String,
  size: String,
  weight: String,
});

let { color, size, weight } = toRefs(props);
</script>
