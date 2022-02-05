<template>
  <ClientOnly>
    <div class="text-block" :class="'text-block-' + theme">
      <div
        class="text-block-header"
        :style="
          theme == 'light'
            ? 'background-image: var(--linear-gradient);'
            : 'background: rgba(27, 30, 43, 0.9);'
        "
      >
        <div class="circle one"></div>
        <div class="circle two"></div>
        <div class="circle three"></div>
      </div>

      <div class="title">
        <span>{{ title }}</span>
      </div>
      <slot></slot>
    </div>
  </ClientOnly>
</template>

<script setup>
import { defineProps, toRefs } from "vue";
import store from "../store/index";
let { theme } = toRefs(store);
const props = defineProps({
  color: String,
  title: String,
});

let { color, title } = toRefs(props);
</script>

<style scoped>
.text-block-light {
  background: rgba(255, 255, 255, 0.7);
  color: #333333;
}
.text-block-dark {
  background: rgba(45, 49, 56, 0.8);
  color: #dfdbdb;
}
.text-block {
  position: relative;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 16px;
  padding: 14px 20px;
  box-sizing: border-box;
  text-align: justify;
  overflow: unset;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 14px 38px rgb(0 0 0 / 8%), 0 3px 8px rgb(0 0 0 / 6%);
  font-size: 16px;
  transition: all 0.3s ease 0s, transform 0.6s cubic-bezier(0.6, 0.2, 0.1, 1) 0s,
    -webkit-transform 0.6s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;
}
@media (max-width: 718px) {
  .text-block {
    width: 95%;
    margin-top: 50px;
    margin-bottom: 16px;
    margin-left: auto;
    margin-right: auto;
  }
}
.text-block:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 38px rgb(0 0 0 / 14%), 0 3px 8px rgb(0 0 0 / 12%);
}
.text-block-header {
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 4px 4px 0 0;
  height: 30px;
  position: absolute;
  top: -30px;
  left: 0;
  transition: all 0.3s ease;
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

.text-block .title {
  display: inline-block;
  position: relative;
  margin-bottom: 10px;
  padding: 0 14px 0 32px;
  height: 32px;
  line-height: 32px;
  border-radius: 0 3px 3px 0;
  background-color: v-bind(color);
  color: #fff;
  transform: translateX(-35px);
}
.text-block .title::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 0;
  width: 0;
  height: 0;
  background-color: transparent;
  border-style: solid;
  border-width: 0 16px 16px 0;
  border-color: transparent;
  border-right-color: v-bind(color);
  filter: brightness(120%);
}
</style>
