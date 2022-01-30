<template></template>
<script setup>
import { onMounted, toRefs } from "vue";
import store from "../store/index";
onMounted(() => {
  const toggle_dark_button = document.querySelector(".toggle-dark-button");
  const html = document.querySelector("html");
  const app = document.querySelector("#app");
  const hours = new Date().getHours();
  const getRandom = (start, end) => {
    //获得指定区间的随机数
    return Math.floor(start + (end - start) * Math.random());
  };

  const initTheme = () => {
    let { theme } = toRefs(store);
    theme.value = html.className.includes("dark") ? "dark" : "light";
    if (html.className.includes("dark")) {
      //深色模式
      app.style.cssText = `
     background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACFJREFUeNpiZGBg4GegAsBlCD8TqSYNQg2Mo6FEBAAIMACdPABtrSW/IQAAAABJRU5ErkJggg==);
     background-repeat: repeat;
     background-attachment: fixed;
     min-height: 100vh;
      `;
    } else {
      //浅色模式
      const randomNum = getRandom(1, 4);
      app.style.cssText = `
       background: url(/imgs/bodyBG${randomNum}.png);
       background-repeat: repeat;
       background-attachment: fixed;
       min-height: 100vh;
      `;
    }
  };
  initTheme();
  toggle_dark_button.addEventListener("click", () => {
    initTheme();
  });
  if ((hours >= 18 || hours <= 5) && !html.className.includes("dark")) {
    toggle_dark_button.click();
    setTimeout(() => {
      initTheme();
    }, 0);
  }
});
</script>
<style>
#app .navbar,
#app .sidebar {
  opacity: 0.8;
}

@font-face {
  font-family: "fira-code";
  src: url("../public/font/FiraCode-Medium.ttf");
}
#app {
  /* background: url(/imgs/bodyBG.png); */
  /* background: url(/img);
  background-repeat: repeat;
  background-attachment: fixed;
  background-size: cover; */
  min-height: 100vh;
  font-family: "fira-code" !important;
  font-size: 16px !important;
}
* ::selection {
  color: #fff;
  background-color: var(--c-brand);
}

* ::-moz-selection {
  color: #fff;
  background-color: var(--c-brand);
}

*::-webkit-selection {
  color: #fff;
  background-color: var(--c-brand);
}

*::-webkit-scrollbar,
*::-webkit-scrollbar-track-piece {
  background-color: transparent;
}

*::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background-image: linear-gradient(to bottom left, #3af3a0, #9b3df3);
  /* background-color: #3eaf7c;
  background-image: -webkit-linear-gradient(
    45deg,
    hsla(0, 0%, 100%, 0.6) 25%,
    transparent 0,
    transparent 50%,
    hsla(0, 0%, 100%, 0.6) 0,
    hsla(0, 0%, 100%, 0.6) 75%,
    transparent 0,
    transparent
  ); */
}

*::-webkit-scrollbar {
  width: 7px;
  height: 6px;
}
.theme-default-content {
  max-width: 900px !important;
}
.back-to-top {
  background-image: linear-gradient(to bottom left, #3af3a0, #9b3df3);
}
@media (max-width: 959px) {
  .back-to-top {
    display: block !important;
  }
}
</style>
