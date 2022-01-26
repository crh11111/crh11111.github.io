<template>
  <div></div>
</template>
<script setup>
import { onMounted } from "vue";
onMounted(() => {
  const toggle_dark_button = document.querySelector(".toggle-dark-button");
  const html = document.querySelector("html");
  const page = document.querySelector(".page");
  const hours = new Date().getHours();

  const initTheme = () => {
    let text_block_header;
    const t1 = setTimeout(() => {
      text_block_header = document.querySelectorAll(".text-block-header");
      window.clearTimeout(t1);
    }, 100);
    if (html.className.includes("dark")) {
      //深色模式
      page.style.cssText = `
     background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACFJREFUeNpiZGBg4GegAsBlCD8TqSYNQg2Mo6FEBAAIMACdPABtrSW/IQAAAABJRU5ErkJggg==);
       background-repeat: repeat;
       background-attachment: fixed;
      min-height: 100vh;
      `;

      const t2 = setTimeout(() => {
        text_block_header.forEach((el) => {
          el.style.cssText = `
      background: rgba(27, 30, 43, 0.9);
      `;
        });
        window.clearTimeout(t2);
      }, 100);
    } else {
      //浅色模式
      page.style.cssText = `
       background: url(/bodyBG.png);
       background-repeat: repeat;
       background-attachment: fixed;
      min-height: 100vh;
      `;
      const t3 = setTimeout(() => {
        text_block_header.forEach((el) => {
          el.style.cssText = `
      background-image: linear-gradient(to bottom left, #4df0a6, #9f46f3);
      `;
        });

        window.clearTimeout(t3);
      }, 100);
    }
  };
  initTheme();
  toggle_dark_button.addEventListener("click", () => {
    initTheme();
  });
  if (hours >= 18 && !html.className.includes("dark")) {
    toggle_dark_button.click();

    setTimeout(() => {
      initTheme();
    }, 0);
  }
});
</script>
<style>
@font-face {
  font-family: "fira-code";
  src: url("../public/FiraCode-Medium.ttf");
}
#app .page {
  background: url(/bodyBG.png);
  background-repeat: repeat;
  background-attachment: fixed;
  min-height: 100vh;
  font-family: "fira-code" !important;
  font-size: 16px !important;
}
* ::selection {
  color: #fff;
  background-color: #3eaf7c;
}

* ::-moz-selection {
  color: #fff;
  background-color: #3eaf7c;
}

*::-webkit-selection {
  color: #fff;
  background-color: #3eaf7c;
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
</style>
