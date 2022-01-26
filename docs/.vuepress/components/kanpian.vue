<template>
  <div>
    <input type="text" v-model="pianName" placeholder="看点什么吧" />
    <button @click="kanpian">看片</button>

    <div id="dplayer"></div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
const pianName = ref("");
const kanpian = () => {
  fetch(`https://apis.jxcxin.cn/api/jx?url=${pianName.value}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const dp = new DPlayer({
        container: document.getElementById("dplayer"),
        video: {
          url: data.url,
        },
      });
      pianName.value = "";
    });
};
onMounted(() => {
  const head = document.querySelector("head");
  const scriptEl = document.createElement("script");
  scriptEl.src =
    "https://cdn.bootcdn.net/ajax/libs/dplayer/1.26.0/DPlayer.min.js";
  head.appendChild(scriptEl);
  const timer = setInterval(() => {
    try {
      if (DPlayer) {
        clearInterval(timer);
        alert("准备就绪");
      }
    } catch (error) {}
  }, 500);
});
</script>
<style scoped>
#dplayer {
  width: 800px;
  margin: 100px auto;
  border-radius: 4px;
}
input {
  height: 40px;
  display: block;
  width: 90%;
  margin: 30px auto;
  padding-left: 20px;
  box-sizing: border-box;
  border-radius: 15px;
  border: 3px solid #3eaf7c;
}
button {
  width: 90%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 18px;
  background-image: linear-gradient(to bottom left, #4df0a6, #9f46f3);
  border-radius: 15px;
  display: block;
  margin: 0 auto;
  border: none;
}
</style>
