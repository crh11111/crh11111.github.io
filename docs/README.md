---
home: true
heroImage: /imgs/tx.jpg
heroText: 微若蜉蝣
tagline: 日记、笔记、博客
actions:
  - text: 立即进入
    link: /foreword/
    type: primary
features:
  - title: 技术向
    details: 博主真的没啥技术,就是一个小菜鸟...
  - title: 游戏向
    details: 博主LOL打的一般,但可以分享一些游戏经历和掉分小技巧...
  - title: 小说向
    details: 博主看过的小说不算多,但此生有个梦想——想写一本自己的小说(虽然挺难实现的)
footer: MIT Licensed | Copyright © 2022-present 微若蜉蝣
---

<script>
   setTimeout(() => {
const toggle_dark_button = document.querySelector(".toggle-dark-button");
  const html = document.querySelector("html");
  const app = document.querySelector("#app");
  const hours = new Date().getHours();
  const getRandom = (start, end) => {
    //获得指定区间的随机数
    return Math.floor(start + (end - start) * Math.random());
  };
    const initTheme = () => {
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
      // /imgs/bodyBG.png
      // https://apis.jxcxin.cn/api/dmimg
      // background-size:cover;
      const randomNum = getRandom(1, 5);
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
   },500)
  
</script>

<style>
  #app .navbar{
    opacity: 0.8;
  }
   .home .hero img{
       max-height: 269px !important;
       border-radius:1rem; 
   }

</style>
