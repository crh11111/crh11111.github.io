<template>
  <div class="not-found-page">
    <div class="header">
      <img src="../public/logo.svg" alt="" class="logo" @click="goHome" />
      <span class="name" @click="goHome">微若蜉蝣</span>
    </div>
    <div class="main-page">
      <div class="left">
        <div class="tip">404</div>
        <div class="tip-content">你好像迷失了方向呢</div>
        <div class="tip-content">
          我来帮你<span @click="goHome" style="" class="goHome">回家</span>吧！
        </div>
      </div>
      <div class="right">
        <img
          src="../public/404.gif"
          width="313"
          height="482"
          alt="Girl has dropped her ice cream."
        />
      </div>
    </div>
  </div>
</template>
<script setup>
const goHome = () => {
  window.location = "/";
};
</script>
<style scoped>
html {
  font-size: 16px;
}
.not-found-page {
  width: 100vw;
  height: 100vh;
}
.header {
  width: 50%;
  height: 70px;
  margin: 0 auto;
  padding-top: 15px;
  display: flex;
  align-items: center;
}
.header .logo {
  width: 70px;
  height: 70px;
  cursor: pointer;
}
.header .name {
  font-size: 28px;
  height: 25px;
  opacity: 0.8;
  font-weight: bold;
  cursor: pointer;
}
.main-page {
  display: flex;
  width: 50%;
  margin: 200px auto;
}
.main-page .left {
  flex: 1;
}
.main-page .left .tip {
  font-size: 9rem;
  font-weight: 700;
  color: rgba(51, 149, 159, 0.8);
}
.main-page .left .tip-content {
  font-size: 2rem;
  opacity: 0.8;
  margin-bottom: 30px;
}
.goHome {
  color: rgba(51, 149, 159, 0.8);
  cursor: pointer;
  font-weight: bold;
}

.main-page .right {
  flex: 1;
}

@media screen and (max-width: 1213px) {
  html {
    font-size: 13px;
  }
}
@media screen and (max-width: 731px) {
  .main-page {
    display: block;
    margin-top: 0px;
  }
  html {
    font-size: 10px;
  }
}
</style>
