<template>
  <video
    class="player"
    playsinline
    controls
    :data-poster="indexBg"
    v-show="isLoad"
    :crossorigin="src.includes('http')"
  >
    <source
      :src="src.includes('http') ? src : $withBase(src)"
      type="video/mp4"
    />
  </video>
</template>

<script setup>
import { defineProps, toRefs, ref } from "vue";
import isLoad from "./video";

const props = defineProps({
  indexBg: String,
  src: String,
});

let { indexBg, src } = toRefs(props);
</script>

<style>
.player {
  border-radius: 4px;
}
.plyr {
  width: 100%;
  border-radius: 4px;
}
:root {
  --plyr-color-main: #3eaf7c;
}
</style>
