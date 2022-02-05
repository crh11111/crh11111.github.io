<template></template>
<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const codes = document.querySelectorAll("code");
  const code_box_header = `
  <div class="codebox-header">
    <div class="circle one"></div>
    <div class="circle two"></div>
    <div class="circle three"></div>
    <svg t="1644040761636" class="copy" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7993" ><path class="copy-p" d="M576 384a64 64 0 0 1 64 64v341.333333a64 64 0 0 1-64 64H234.666667a64 64 0 0 1-64-64V448a64 64 0 0 1 64-64h341.333333z m0 64H234.666667v341.333333h341.333333V448z m-64 192v64H298.666667v-64h213.333333zM789.333333 170.666667a64 64 0 0 1 64 64v341.333333a64 64 0 0 1-64 64h-106.666666v-64h106.666666V234.666667H448v106.666666h-64v-106.666666a64 64 0 0 1 64-64h341.333333zM512 533.333333v64H298.666667v-64h213.333333z" p-id="7994"></path></svg>
  </div>
 `;
  //  <div class="copy"></div>

  Array.from(codes).forEach((item) => {
    item.parentElement.parentElement.style.cssText = `
    margin-top:60px;
    background:rgba(41,45,62,0.9);
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    position: relative;
    `;
    item.parentElement.parentElement.innerHTML += code_box_header;
  });
  const copys = document.querySelectorAll(".copy");

  const copyHandle = (e) => {
    if (e.target.nodeName == "svg") {
      const copyContent =
        e.target.parentElement.previousElementSibling.children[0].innerText;
      const oInput = document.createElement("input");
      oInput.value = copyContent;
      document.body.appendChild(oInput);
      oInput.select();
      document.execCommand("copy");
      document.body.removeChild(oInput);
      alert("复制成功");
    }
  };
  copys.forEach((el) => {
    el.onclick = copyHandle;
  });
});
</script>

<style>
.codebox-header {
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: rgba(27, 30, 43, 0.9);
  border-radius: 4px 4px 0 0;
  height: 30px;
  position: absolute;
  top: -30px;
  left: 0;
}
.circle {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-left: 10px;
}
.one {
  background: #fc625d;
}
.two {
  background: #fdbc40;
}
.three {
  background: #35cd4b;
}
.copy {
  display: block;
  width: 24px;
  height: 80%;
  position: absolute;
  top: 2px;
  right: 10px;

  cursor: pointer;
  transition: transform 0.6s cubic-bezier(0.6, 0.2, 0.1, 1) 0s,
    -webkit-transform 0.6s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;
}
.copy-p {
  fill: #dbdbdb;
  transition: all 0.3s ease 0s;
}

.copy:hover {
  transform: translateY(-2px);
}
.copy:hover .copy-p {
  fill: var(--c-brand);
}
@font-face {
  font-family: "fira-code";
  src: url("../public/font/FiraCode-Medium.ttf");
}
code {
  font-family: "fira-code";
  font-size: 20px;
}

.line-numbers {
  line-height: 28px !important;
}
.line-number {
  color: var(--c-brand);
  font-size: 20px !important;
  font-weight: bold;
}
@media screen and (max-width: 500px) {
  code {
    font-family: "fira-code";
    font-size: 16px;
  }
  .line-number {
    font-size: 14px !important;
  }
  .line-numbers {
    line-height: 23px !important;
    font-weight: bold !important;
  }
  .circle {
    width: 10px;
    height: 10px;
  }
}
@media screen and (max-width: 419px) {
  .theme-default-content div[class*="language-"] {
    margin: 60px 0 !important;
    border-radius: 0;
  }
}
@media (max-width: 718px) {
  .theme-default-content div[class*="language-"] {
    width: 95%;
    margin: 60px auto !important;
  }
}
</style>
