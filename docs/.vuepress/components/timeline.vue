<template>
  <div class="timeline">
    <div class="header">
      <span class="text"
        >很好！目前共计{{
          timeline.filter((item) => item.type == "acticle").length
        }}篇日志,继续努力！</span
      >
    </div>
    <div class="item" v-for="(item, index) in timeline" :key="index">
      <div class="article" v-if="item.type == 'acticle'">
        <div class="date">{{ item.date }}</div>
        <h3 class="title">
          <a :href="item.link" v-if="item.link">{{ item.title }}</a>
          <span v-else style="cursor: default">{{ item.title }}</span>
        </h3>
      </div>
      <div class="year" v-else>
        <h2 class="text">{{ item.value }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import timeline from "../timeline/index";
</script>

<style scoped>
@font-face {
  font-family: "fira-code";
  src: url("../public/FiraCode-Medium.ttf");
}
.timeline {
  position: relative;
  font-family: "fira-code";
  margin-top: 40px;
}
.timeline::before {
  background-image: linear-gradient(to bottom left, #3af3a0, #9b3df3);
  content: " ";
  height: 100%;
  left: 0;
  margin-left: -2px;
  position: absolute;
  top: 1.25em;
  width: 4px;
}
.timeline .header {
  font-size: 1.125em;
  position: relative;
  margin-bottom: 80px;
}
.timeline .header::before {
  background-color: #3eaf7c;
  box-shadow: 0 0 1px 1px #bdbdbd;
  border: 1px solid #fff;
  border-radius: 50%;
  content: " ";
  height: 10px;
  left: 0;
  margin-left: -6px;
  margin-top: -4px;
  position: absolute;
  top: 50%;
  width: 10px;
}
.text {
  display: inline-block;
  margin: 0 0 0 20px;
}
.timeline .year {
  margin: 60px 0;
  position: relative;
}
.timeline .year::before {
  background: #851ce7;
  box-shadow: 0 0 1px 1px #bdbdbd;
  border: 1px solid #fff;
  border-radius: 50%;
  content: " ";
  height: 10px;
  width: 10px;
  left: 0;
  margin-left: -5px;
  margin-top: -4px;
  position: absolute;
  top: 42%;
}
.timeline .article {
  margin: 40px 0;
  padding-left: 15px;
  position: relative;
  transition-property: border;
  transition-delay: 0s;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
}
.timeline .article::before {
  background-color: #fff;
  border: 1px solid #fff;
  box-shadow: 0 0 1px 1px #bdbdbd;
  border-radius: 50%;
  content: " ";
  height: 8px;
  left: 0;
  margin-left: -4px;
  position: absolute;
  top: 0.35em;
  transition-property: background;
  width: 8px;
  transition-delay: 0s;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
}
.timeline .article:hover::before {
  background: #3eaf7c;
}
.article .date {
  display: inline;
  font-size: 0.75em;
  margin-right: 10px;
}
.article .title {
  display: inline;
  font-size: 1em;
  font-weight: 400;
  margin-bottom: 0;
  margin-top: 0;
}
.article .title a {
}
</style>
