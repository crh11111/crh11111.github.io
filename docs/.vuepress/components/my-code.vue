<template>
  <!-- <div class="codebox-header">
    <div class="circle one"></div>
    <div class="circle two"></div>
    <div class="circle three"></div>
  </div> -->
</template>
<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const codes = document.querySelectorAll("code");
  const code_box_header = `
  <div class="codebox-header">
    <div class="circle one"></div>
    <div class="circle two"></div>
    <div class="circle three"></div>
    <div class="copy"></div>
  </div>
 `;

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
    const copyContent =
      e.target.parentElement.previousElementSibling.children[0].innerText;
    const oInput = document.createElement("input");
    oInput.value = copyContent;
    document.body.appendChild(oInput);
    oInput.select();
    document.execCommand("copy");
    document.body.removeChild(oInput);
    alert("复制成功");
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
  width: 20px;
  height: 80%;
  position: absolute;
  top: 2px;
  right: 10px;
  background-image: url("../public/copy-gray.svg");
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  transition: all 0.3s ease 0s, transform 0.6s cubic-bezier(0.6, 0.2, 0.1, 1) 0s,
    -webkit-transform 0.6s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;
}

.copy:hover {
  background-image: url("../public/copy.svg");
  transform: translateY(-2px);
}
@font-face {
  font-family: "fira-code";
  src: url("../public/FiraCode-Medium.ttf");
}
code {
  font-family: "fira-code";
  font-size: 20px;
}

.line-numbers {
  line-height: 28px !important;
}
.line-number {
  color: #5aebbf;
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
</style>
