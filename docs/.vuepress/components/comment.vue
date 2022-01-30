<template>
  <section
    class="my-comment"
    :style="{
      background:
        theme == 'dark' ? 'rgba(45, 49, 56, 0.8)' : 'rgba(255, 255, 255, 0.8)',
    }"
  >
    <div v-if="redNum" class="redNum">
      <span
        :id="pathName"
        class="leancloud_visitors"
        data-flag-title="Your Article Title"
      >
        <em class="post-meta-item-text">热度：</em>
        <i class="leancloud-visitors-count">0</i>
        <span> ℃ </span>
      </span>
    </div>
    <div id="vcomments"></div>
  </section>
</template>

<script setup>
import { onMounted, defineProps, toRefs } from "vue";
import store from "../store/index";
let { theme } = toRefs(store);
const props = defineProps({
  redNum: {
    type: Boolean,
    default: true,
  },
});
const pathName = window.location.pathname;
onMounted(() => {
  const head = document.querySelector("head");
  const scriptEl = document.createElement("script");
  scriptEl.src = "/Valine/Valine.js";
  head.appendChild(scriptEl);

  const timer = setInterval(() => {
    try {
      if (Valine) {
        clearInterval(timer);
        new Valine({
          el: "#vcomments",
          appId: "2uDda4eFqUHLJzN4jfrSPur8-gzGzoHsz",
          appKey: "SboyOjdkRRAkjvU3TKUNYCrr",
          avatar: "monsterid",
          visitor: true,
          placeholder: "各位看官写点什么吧！",
          path: pathName,
        });
      }
    } catch (error) {}
  }, 500);

  const timer2 = setInterval(() => {
    try {
      const len = document.querySelectorAll(".vimg").length;
      if (len) {
        clearInterval(timer2);
        const vsubmit = document.querySelector(".vsubmit");
        vsubmit.addEventListener("click", () => {
          // autocomplete="off"
          // document.querySelector(".vnick").value = "";
          // document.querySelector(".vmail").value = "";
          // document.querySelector(".vlink").value = "";
          setTimeout(() => {
            Array.from(document.querySelectorAll(".vimg")).forEach((item) => {
              const email = item.getAttribute("email");
              if (email.includes("@qq.com")) {
                const qq = email.split("@")[0];
                item.src = ` https://apis.jxcxin.cn/api/qq?qq=${qq}`;
              }
            });
          }, 300);
        });

        Array.from(document.querySelectorAll(".vimg")).forEach((item) => {
          const email = item.getAttribute("email");
          if (email.includes("@qq.com")) {
            const qq = email.split("@")[0];
            item.src = ` https://apis.jxcxin.cn/api/qq?qq=${qq}`;
          }
        });
      }
    } catch (error) {}
  }, 500);
});
</script>

<style scoped>
.my-comment {
  position: relative;
  border-radius: 7px;
  box-sizing: border-box;
  padding: 20px;
  margin-top: 50px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  transition: background 0.3s ease,
    transform 0.6s cubic-bezier(0.6, 0.2, 0.1, 1) 0s,
    -webkit-transform 0.6s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;
  z-index: 1;
}
.my-comment:hover {
  transform: translateY(-5px);
}
#vcomments {
  margin-top: 20px;
}
.redNum {
  text-align: right;
}
.leancloud-visitors-count {
  color: var(--c-brand);
}
.my-comment :deep(.vnick) {
  color: var(--c-brand);
}
#vcomments :deep(.vat),
#vcomments :deep(a) {
  color: var(--c-brand);
}
</style>
