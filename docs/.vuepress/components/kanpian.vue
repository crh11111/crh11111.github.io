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
  fetch(
    `https://apis.jxcxin.cn/api/jx?apiKey=dbaddf2225d05bbb21e0663bce935571&url=${pianName.value}`
  )
    .then((res) => res.json())
    .then((data) => {
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
  scriptEl.src = "https://cdn.jsdelivr.net/npm/dplayer@1.26.0";
  head.appendChild(scriptEl);
  const init = () => {
    alert("准备就绪");
  };
  scriptEl.onload = init;
});
</script>
<style scoped>
#dplayer {
  width: 100%;
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
  border: 3px solid var(--c-brand);
}
button {
  width: 90%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 18px;
  background: var(--c-brand);
  border-radius: 15px;
  display: block;
  margin: 0 auto;
  border: none;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: background 0.3s ease;
  color: #fff;
}
button:hover {
  background: var(--c-brand-light);
}
</style>
