<template>
  <ClientOnly>
    <a class="img-box">
      <img :src="src" alt="" class="header-img" />
      <div class="mc" :class="'mc-' + theme">
        <div class="title">{{ title }}</div>
        <div class="info">
          <span>
            <!-- <i class="calendar" :class="'calendar-' + theme"></i> -->
            <svg
              t="1644040323260"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4976"
              width="200"
              height="200"
              class="calendar"
              :fill="theme == 'dark' ? '#dfdbdb' : 'var(--c-brand)'"
            >
              <path
                d="M234.666667 213.333333h57.706666v63.978667L234.666667 277.333333v106.666667h554.666666v-106.666667h-55.232v-64H789.333333a64 64 0 0 1 64 64v512a64 64 0 0 1-64 64H234.666667a64 64 0 0 1-64-64V277.333333a64 64 0 0 1 64-64z m554.666666 234.666667H234.666667v341.333333h554.666666V448z m-384 192v64h-106.666666v-64h106.666666z m160 0v64h-106.666666v-64h106.666666z m160 0v64h-106.666666v-64h106.666666z m-320-128v64h-106.666666v-64h106.666666z m160 0v64h-106.666666v-64h106.666666z m160 0v64h-106.666666v-64h106.666666zM697.728 170.666667v106.666666h-64.021333V170.666667h64z m-104.170667 42.666666v64l-160.618666-0.021333V213.333333h160.618666z m-197.013333-42.666666v106.666666h-64V170.666667h64z"
                p-id="4977"
              ></path></svg
            >{{ time }}</span
          >

          <span>
            <svg
              t="1644037420124"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4093"
              width="200"
              height="200"
              class="fire"
            >
              <path
                d="M854.35904 613.09952v44.52864c-0.6656 2.16576-1.46944 4.33152-1.92 6.54336-4.55168 23.53664-7.1168 47.68768-13.9776 70.528-20.36224 67.39968-58.5216 123.57632-112.01024 169.43616-41.25184 35.39968-87.68512 60.9024-140.75904 73.45152-17.44896 4.13696-35.34336 6.57408-53.0432 9.79968h-44.51328c-2.16576-0.6656-4.3776-1.67424-6.59456-1.8176-46.99136-2.93376-91.52512-15.16544-133.2992-36.51072-78.96576-40.22272-135.93088-100.11136-161.9456-186.27072-5.53984-18.41664-7.85408-37.71392-11.69408-56.62208v-42.48064c1.67424-10.4448 3.1232-20.97664 5.0944-31.41632 8.41728-45.58848 28.67712-85.9648 55.51104-123.22816 25.30304-35.072 52.18304-69.04832 76.1856-105.0112 25.94816-39.0144 38.5024-82.31936 31.13984-129.80224-1.44896-9.37984-2.80576-18.75968-4.22912-28.08832 0.95744-0.24576 1.92-0.44032 2.87744-0.7168 57.92256 60.70784 67.3536 135.2192 59.07968 215.74144 2.11456-2.26304 3.8912-3.84 5.24288-5.66272 49.16224-66.48832 70.28224-139.93984 54.25152-222.208-10.1888-52.33664-32.22016-99.3792-68.67456-138.496-15.83104-16.93696-34.97984-30.79168-52.6336-46.08h18.21696c1.50528 0.6144 2.90816 1.67424 4.4288 1.8176 32.0512 2.75968 62.1568 12.65152 90.83904 26.56256 65.59744 31.75424 118.77376 78.69952 163.25632 135.95648 65.3824 84.26496 107.88864 177.73056 116.31104 285.35296 3.2256 41.08288-0.96256 81.01376-11.91424 120.40192-4.13696 14.91456-9.96864 29.3376-15.3088 44.8768 21.21728-9.0368 37.34016-22.84544 49.79712-40.74496 37.1456-53.48864 47.53408-113.13664 39.1168-179.08224 2.73408 3.1744 4.13696 4.4288 5.08928 6.00576 22.3744 35.34848 39.1168 73.0624 47.85664 114.04288 3.47136 16.22016 5.49376 32.8192 8.22272 49.19296m-349.952-78.42816c-0.82944 0.5888-1.7408 1.19808-2.60096 1.792-1.16224 16.24576-2.0224 32.52224-3.59936 48.768-2.31424 24.78592-8.2432 48.6912-19.84 70.91712-14.17728 27.22816-37.88288 44.16-64.1536 57.63072-28.32896 14.6176-46.17216 35.49696-48.4864 68.4544-2.41664 33.8944 7.77728 62.37696 35.10272 83.20512 25.6 19.49696 55.50592 25.85088 87.21408 24.79104 50.60608-1.64864 88.32512-25.7024 103.43424-76.35968 10.85952-36.36224 9.088-72.97024 1.82784-109.568-9.92768-50.176-28.09344-96.94208-59.1872-137.92256-8.7296-11.45344-19.7632-21.17632-29.70624-31.70816"
                p-id="4094"
                :fill="theme == 'dark' ? '#dfdbdb' : 'var(--c-brand)'"
              ></path></svg
            >热度{{ hotNum }}℃</span
          >
          <span>
            <!-- <i class="tag" :class="'tag-' + theme"></i> -->
            <svg
              t="1644040628148"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="7184"
              width="200"
              height="200"
              class="tag"
              :fill="theme == 'dark' ? '#dfdbdb' : 'var(--c-brand)'"
            >
              <path
                d="M833.2 1008L538.8 679.8c-14.3-16-39.3-16-53.6 0L190.8 1008c-22 24.6-62.8 9-62.8-24V36c0-19.9 16.1-36 36-36h696c19.9 0 36 16.1 36 36v948c0 33-40.8 48.6-62.8 24zM538.8 572L824 890V72H200v817.9l285.2-318c14.3-15.9 39.3-15.9 53.6 0.1z"
                p-id="7185"
              ></path></svg
            >{{ classify }}</span
          >
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
  src: String,
});
let { date, title, src } = toRefs(props);

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
.fire {
  margin-left: 10px;
  width: 20px;
  height: 20px;
}
.tag {
  margin-left: 15px;
  width: 17px;
  height: 17px;
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
