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
          <div class="item-mc-top"></div>
          <div class="item-mc-bottom">{{ item.name }}</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import friends from "../friends/index";
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
  margin-left: 20px;
  margin-top: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
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
}
.friends-list .item .item-mc .item-mc-top {
  background: rgba(255, 255, 255, 0.6);
}
.friends-list .item .item-mc .item-mc-bottom {
  background: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  text-align: center;
  line-height: 75px;
  color: #851ce7;
  font-weight: bold;
}
</style>
