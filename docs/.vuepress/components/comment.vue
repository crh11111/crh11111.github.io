<template>
  <section
    style="border-top: 2px solid #eaecef; padding-top: 1rem; margin-top: 2rem"
  >
    <div v-if="redNum">
      <span
        :id="pathName"
        class="leancloud_visitors"
        data-flag-title="Your Article Title"
      >
        <em class="post-meta-item-text">阅读量 </em>
        <i class="leancloud-visitors-count">0</i>
      </span>
    </div>
    <div id="vcomments"></div>
  </section>
</template>

<script setup>
import { onMounted, defineProps, nextTick } from "vue";
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
#vcomments {
  margin-top: 20px;
}
</style>

m.cdn+a(e.get("mail"))+m.params
