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
        <i class="leancloud-visitors-count">1000000</i>
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
  import("valine").then((module) => {
    const Valine = module.default;
    new Valine({
      el: "#vcomments",
      appId: "2uDda4eFqUHLJzN4jfrSPur8-gzGzoHsz",
      appKey: "SboyOjdkRRAkjvU3TKUNYCrr",
      avatar: "monsterid",
      visitor: true,
      placeholder: "各位看官写点什么吧！",
      path: pathName,
      enableQQ: false,
      recordIP: false,
    });
    const vsubmit = document.querySelector(".vsubmit");
    vsubmit.onclick = () => {
      const Email = document.querySelector(".vmail").value;
      console.log(Email);
    };
    // console.dir(document.querySelector(".vsubmit"));
  });
});
</script>

<style scoped>
#vcomments {
  margin-top: 20px;
}
</style>
