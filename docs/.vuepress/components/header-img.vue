<template>
  <ClientOnly>
    <a class="img-box">
      <img src="https://apis.jxcxin.cn/api/dmimg" alt="" class="header-img" />
      <div class="mc" :class="'mc-' + theme">
        <div class="title">{{ title }}</div>
        <div class="info">
          <span
            ><i class="calendar" :class="'calendar-' + theme"></i
            >{{ time }}</span
          >

          <span
            ><i class="fire" :class="'fire-' + theme"></i>热度{{
              hotNum
            }}℃</span
          >
          <span><i class="tag" :class="'tag-' + theme"></i>{{ classify }}</span>
        </div>
      </div>
    </a>
  </ClientOnly>
</template>

<script setup>
import { toRefs, defineProps, onMounted, ref } from "vue";
import store from "../store/index";
let { theme } = toRefs(store);
const classify = ref("");
const hotNum = ref("");
const time = ref("");
const props = defineProps({
  title: String,
  date: String,
});
let { date, title } = toRefs(props);
onMounted(() => {
  const head = document.querySelector("head");
  const scriptEl = document.createElement("script");
  scriptEl.src = "/time-ago/index.js";
  head.appendChild(scriptEl);
  const init = () => {
    let { format } = timeago;
    time.value = format(date.value, "zh_CN").replace(" ", "");
  };
  scriptEl.onload = init;

  const timer2 = setInterval(() => {
    try {
      const classifyEl = document.querySelector(".sidebar-item");
      if (classifyEl) {
        clearInterval(timer2);
        classify.value = classifyEl.innerText;
      }
    } catch (error) {}
  });

  const timer = setInterval(() => {
    try {
      const redNum = document.querySelector(".leancloud-visitors-count");
      if (redNum.textContent != "0") {
        clearInterval(timer);
        hotNum.value = redNum.innerText;
      }
    } catch (error) {}
  }, 500);
});
</script>

<style scoped>
.calendar {
  width: 20px;
  height: 20px;
}
.calendar-light {
  background: url("../public/imgs/calendar-light.svg") no-repeat;
  background-size: cover;
}
.calendar-dark {
  background: url("../public/imgs/calendar-dark.svg") no-repeat;
  background-size: cover;
}
.fire {
  margin-left: 10px;
  width: 20px;
  height: 20px;
}
.fire-dark {
  background: url("../public/imgs/fire-dark.svg") no-repeat;
  background-size: cover;
}
.fire-light {
  background: url("../public/imgs/fire-light.svg") no-repeat;
  background-size: cover;
}
.tag {
  margin-left: 15px;
  width: 17px;
  height: 17px;
}
.tag-dark {
  background: url("../public/imgs/tag-dark.svg") no-repeat;
  background-size: cover;
}
.tag-light {
  background: url("../public/imgs/tag-light.svg") no-repeat;
  background-size: cover;
}
.calendar,
.fire,
.tag {
  display: inline-block;
  vertical-align: -4px;
  margin-right: 5px;
  transition: all 0.3s ease;
}
.info {
  margin-top: 15px;
}
.title {
  font-size: 20px;
  font-weight: bold;
}
.mc-dark {
  color: #dfdbdb;
  background: rgba(45, 49, 56, 0.8);
}
.mc-light {
  background-color: rgba(255, 255, 255, 0.8);
  color: var(--c-brand);
}
.mc {
  width: 100%;
  max-width: 100%;
  height: 80px;
  position: absolute;
  left: 0;
  bottom: 0;
  backdrop-filter: blur(5px) saturate(150%) brightness(1.1);
  padding: 10px;
  box-sizing: border-box;
  transition: all 0.3s ease;
}
.img-box {
  display: block;
  max-width: 100%;
  width: 100%;
  margin-top: 10px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  position: relative;
}
@media (max-width: 718px) {
  .img-box {
    margin-top: 0;
    border-radius: 0;
  }
  .title {
    font-size: 18px;
  }
  .header-img {
    border-radius: 0;
  }
}
.img-box:hover .header-img {
  transform: scale(1.05);
}
.header-img {
  display: block;
  max-width: 100%;
  max-height: 500px;
  width: 100%;
  border-radius: 5px;
  transition: transform 0.7s ease-out;
}
</style>
