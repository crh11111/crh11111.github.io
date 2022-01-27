<template>
  <video
    class="player"
    playsinline
    controls
    :data-poster="indexBg"
    v-show="videoIsShow"
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
