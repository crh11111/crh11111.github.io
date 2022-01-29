<script setup>
import { onMounted, onUnmounted, toRefs } from "vue";
import store from "../store/index";
let { videoIsShow } = toRefs(store);

onUnmounted(() => {
  videoIsShow.value = false;
});
onMounted(() => {
  const head = document.querySelector("head");
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://cdn.plyr.io/3.6.12/plyr.css";
  const scriptEl = document.createElement("script");
  scriptEl.src = "https://cdn.plyr.io/3.6.12/plyr.polyfilled.js";
  head.appendChild(link);
  head.appendChild(scriptEl);

  const timer = setInterval(() => {
    try {
      if (Plyr) {
        clearInterval(timer);
        Array.from(document.querySelectorAll(".player")).map(
          (p) => new Plyr(p)
        );
        videoIsShow.value = true;
      }
    } catch (error) {}
  }, 500);
});
</script>
