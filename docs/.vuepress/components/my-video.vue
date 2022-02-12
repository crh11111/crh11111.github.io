<template>
  <video
    class="player"
    playsinline
    controls
    webkit-playsinline
    x-webkit-airplay="allow"
    :data-poster="indexBg"
    v-show="videoIsShow"
    preload="metadata"
  >
    <source
      :src="src.includes('http') ? src : $withBase(src)"
      type="video/mp4"
    />
  </video>
</template>

<script setup>
import { defineProps, toRefs } from "vue";
import store from "../store/index";
let { videoIsShow } = toRefs(store);

const props = defineProps({
  indexBg: String,
  src: String,
});

let { indexBg, src } = toRefs(props);
</script>

<style>
.player {
  width: 100% !important;
  border-radius: 4px;
}
.plyr {
  width: 100%;
  border-radius: 4px;
}
:root {
  --plyr-color-main: var(--c-brand);
}
</style>
