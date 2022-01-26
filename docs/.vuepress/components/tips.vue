<template>
  <div class="tips" :class="'t-' + type">
    <div class="tip-title" :class="'t-' + type + '-text'">
      <slot name="title">{{ replaceTypeText(type) }}</slot>
    </div>
    <div class="tip-content" :class="'t-' + type + '-text'">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, PropType, toRefs, computed } from "vue";

interface props {
  customMode?: boolean;
  type?: string;
  lineColor?: string;
  bgColor?: string;
}

const replaceTypeText = computed(() => {
  return (type) => {
    switch (type) {
      case "info":
        return "提示:";
      case "warn":
        return "注意:";
      case "error":
        return "警告:";
      case "success":
        return "成功:";
      default:
        return "主要:";
    }
  };
});
const props = defineProps({
  customMode: Boolean,
  type: {
    type: String as PropType<"info" | "warn" | "error" | "success" | "primary">,
    default: "primary",
  },
  lineColor: String,
  bgColor: String,
});
let { customMode, type, lineColor, bgColor } = toRefs(props);
</script>

<style>
:root {
  --t-info: #909399;
  --t-info-w: #d5d8dd;
  --t-warn: #d39014;
  --t-warn-w: #f5d5b1;
  --t-error: #e03a2b;
  --t-error-w: #f6ceca;
  --t-success: #67c23a;
  --t-success-w: #bcf5c3;
  --t-primary: #851ce7;
  --t-primary-w: #ddcdee;
}

.t-info {
  border-color: var(--t-info) !important;
  background: var(--t-info-w);
}
.t-info-text {
  color: var(--t-info);
}
.t-warn {
  border-color: var(--t-warn) !important;
  background: var(--t-warn-w);
}
.t-warn-text {
  color: var(--t-warn);
}
.t-error {
  border-color: var(--t-error) !important;
  background: var(--t-error-w);
}
.t-error-text {
  color: var(--t-error);
}
.t-success {
  border-color: var(--t-success) !important;
  background: var(--t-success-w);
}
.t-success-text {
  color: var(--t-success);
}
.t-primary {
  border-color: var(--t-primary) !important;
  background: var(--t-primary-w);
}
.t-primary-text {
  color: var(--t-primary);
}
.tips {
  width: 100%;
  margin: 50px auto;
  padding: 15px;
  box-sizing: border-box;
  border-left: 5px solid;
  min-height: 120px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  /* box-shadow: 0 14px 38px rgb(0 0 0 / 8%), 0 3px 8px rgb(0 0 0 / 6%); */
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  transition: all 0.3s ease 0s, transform 0.6s cubic-bezier(0.6, 0.2, 0.1, 1) 0s,
    -webkit-transform 0.6s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;
}
.tips:hover {
  transform: translateY(-5px);
}
.tips .tip-title {
  /* color: #851ce7; */
  font-size: 18px;
  font-weight: bold;
}
.tips .tip-content {
  margin-top: 15px;
  text-indent: 1em;
}
</style>
