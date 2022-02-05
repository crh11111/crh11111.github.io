<template>
  <div class="friends">
    <div class="friends-list">
      <a
        class="item"
        :href="item.url"
        target="_blank"
        v-for="(item, index) in friends"
        :key="index"
      >
        <img :src="item.blog_img" alt="" class="item-blog-img" />
        <div class="item-mc">
          <img :src="item.avatar" class="item-mc-avatar" />
          <div
            class="item-mc-top"
            :style="{
              background:
                theme == 'dark'
                  ? 'rgba(0, 0, 0, 0.6)'
                  : 'rgba(255, 255, 255, 0.6)',
            }"
          ></div>
          <div
            class="item-mc-bottom"
            :style="{
              background:
                theme == 'dark'
                  ? 'rgba(0, 0, 0, 0.9)'
                  : 'rgba(255, 255, 255, 0.9)',
            }"
          >
            {{ item.name }}
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { toRefs } from "vue";
import friends from "../friends/index";
import store from "../store/index";
let { theme } = toRefs(store);
</script>

<style scoped>
.friends {
  margin-top: 50px;
}

.friends-list {
  width: 100%;
  margin-bottom: 150px;
}
.friends-list .item {
  display: inline-block;
  width: 200px;
  height: 120px;
  border-radius: 4px;
  position: relative;
  margin-left: 19px;
  margin-top: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
}
@media (max-width: 513px) {
  .friends-list .item {
    width: 194px;
    height: 120px;
    margin-left: 15px;
    margin-top: 20px;
  }
  .friends-list {
    text-align: center;
  }
}
.friends-list .item:hover .item-blog-img {
  transform: scale(1.15);
}
.friends-list .item .item-blog-img {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  transition: transform 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;
}
.friends-list .item:hover .item-mc {
  top: -120px;
  left: 0;
}
.friends-list .item .item-mc {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: top 0.5s cubic-bezier(0.6, 0.2, 0.1, 1) 0s;
}
.friends-list .item .item-mc .item-mc-avatar {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}
.friends-list .item .item-mc .item-mc-top,
.friends-list .item .item-mc .item-mc-bottom {
  width: 100%;
  height: 50%;
  transition: background 0.3s ease;
}

.friends-list .item .item-mc .item-mc-bottom {
  font-size: 16px;
  text-align: center;
  line-height: 75px;
  color: var(--c-brand);
  font-weight: bold;
}
</style>
