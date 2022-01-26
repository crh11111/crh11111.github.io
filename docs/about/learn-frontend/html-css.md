<ClientOnly>
<initbg/>
</ClientOnly>

# <my-text color="#49eb6c" weight="bold">锻翼篇</my-text>

<p style="text-indent:1em;font-size:18px;">
 由于是自学的缘由，我的起步之路异常艰难，因为需要不停的搜寻学习资料，
 不过功夫不负有心人，我的自学第一站也是找到了，腾讯课堂渡一教育公开课，
 至此我的白嫖之路拉开了序幕......
</p>

<p style="text-indent:1em;font-size:18px;">
俗话说：<my-text color="#4eaaff" weight="bold" size="20px">一时白嫖一时爽，一直白嫖一直爽！</my-text>
</p>

<p style="text-indent:1em;font-size:18px;">
不过白嫖归白嫖，咱一般学完后都给视频作者点赞了的，咱绝不是那种事了拂袖去的主，所以别尬黑博主。
</p>

<p style="text-indent:1em;font-size:18px;">
如果没记错的话，那个讲师应该是姓袁，具体名字不记得了，css部分讲挺细的，不过那是后话了，入门第一天我对HTML CSS的感觉是——好简单。以至于我后面好几天就没看视频了，直接百度搜菜鸟教程直接看文档上手敲了。
</p>

<p style="text-indent:1em;font-size:18px;">
如此反复几天后，我基本吧div+span 布局学的差不多了，此时的我异常膨胀，在网上不停的寻找着我的第一个临摹目标，找了一上午我将目标锁定在了<a href="https://www.maoyan.com/" target="_blank"><my-text  weight="bold">猫眼电影</my-text></a>身上。
</p>

<p style="text-indent:1em;font-size:18px;">
在写这个网页的过程中我遇到了我整个前端之路上的第一道大坎——<my-text color="red" weight="bold">Css高度坍塌</my-text>
<br>
当时的我惯用float浮动布局，刚开始写简单的页头布局还行，越写到中间部分这布局越来越不对劲，很多子元素超出父元素的布局之外。
</p>

<p style="text-indent:1em;font-size:18px;">
为了解决这个问题我百度了挺久的，因为当时还不知道这种情况的名词叫做高度坍塌，所以只能按着我的现象去搜，挺难搜到的，我搜了一堆不知能不能解决的答案，结果都没解决。
于是我还是觉得得停下，不能在继续写了，还得继续去看公开课。
</p>
<p style="text-indent:1em;font-size:18px;">
这是我第一次认识到了自己的自负，也为之浪费了许多时间，在看完了袁老师HMTL CSS系列全部的视频后我终于是豁然开朗，自信渐渐找了回来。
</p>
<tips  type="warn">
<template v-slot:title>
小蝣说：
</template>
以下附上当时的解决方案。  <my-text size="25px" weight="bold">↓</my-text>
</tips>

```css:no-line-numbers
.clearfix::after {
    content: "";
    display: block;
    clear: both;
}

 将 clearfix 添加到坍塌的父元素的class上

```

<tips>
<template v-slot:title>
小蝣说：
</template>
重整旗鼓的我终于是完成了整个静态页面，以下就是我当时写出的成果截图  ↓
</tips>

![猫眼电影成果截图](https://s3.bmp.ovh/imgs/2022/01/d232253482e749b6.png)

![猫眼电影CSS成果截图](https://s3.bmp.ovh/imgs/2022/01/b2c8ea08e8026e59.png)

![猫眼电影HTML成果截图](https://s3.bmp.ovh/imgs/2022/01/bda75e1b83cfc0ba.png)

<p style="text-indent:1em;font-size:18px;">
虽然目前看来写的很差，但是对于当时的我来说足矣......
</p>

<ClientOnly>
<comment/>
</ClientOnly>

<my-code/>
