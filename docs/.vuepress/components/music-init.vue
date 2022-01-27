<template></template>

<script setup>
import { onMounted, toRefs } from "vue";
import store from "../store/index";
let { musicIds } = toRefs(store);

onMounted(() => {
  const head = document.querySelector("head");
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css";
  const scriptEl = document.createElement("script");
  scriptEl.src = "https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js";
  head.appendChild(link);
  head.appendChild(scriptEl);

  const timer = setInterval(() => {
    try {
      if (APlayer) {
        clearInterval(timer);
        const aplayers = Array.from(document.querySelectorAll(".aplayer"));
        for (let i = 0; i < musicIds.value.length; i++) {
          let url = `https://api.i-meto.com/meting/api?server=netease&type=song&id=${
            musicIds.value[i].value
          }&r=${Math.random()}`;
          fetch(url)
            .then((res) => res.json())
            .then((data) => {
              let song = data[0];
              new APlayer({
                container: aplayers[i],
                theme: "#3eaf7c",
                loop: "loop",
                lrcType: 3,
                audio: [
                  {
                    name: song.title,
                    artist: song.author,
                    url: song.url,
                    cover: song.pic,
                    lrc: song.lrc,
                  },
                ],
              });
            });
        }
      }
    } catch (error) {}
  }, 500);
});
</script>
