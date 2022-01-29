---
sidebar: false
lastUpdated: true
---

<ClientOnly>
<initbg/>
</ClientOnly>

<tips>
<template v-slot:title>
小蝣说：
</template>
欢迎各位大佬交换友链！请在下面评论区留下，博主会定期添加上去，格式如下   ↓<br>
</tips>

# <my-title textColor_h="var(--c-brand)" lineColor="var(--c-brand)">本站友链信息</my-title>

<style>
 .my-blog-info {
  font-weight: bold;
  margin-top:30px;
}
 .my-blog-info div {
  margin-bottom: 20px;
  font-size: 20px;
}
@media screen and (max-width: 500px) {
.my-blog-info div{
  font-size: 14px;
}
}
</style>

<text-block color="var(--c-brand)" title="Info">
 <div class="my-blog-info" >
      <div>
        网站名称：<span style="color: var(--c-brand)">微若蜉蝣</span>
      </div>
      <div>
        网站描述：<span style="color: var(--c-brand)"
          >芸芸众生，皆为蜉蝣</span
        >
      </div>
      <div>
        网站地址：<a
          href="https://fuyouplus.cn/"
          target="_blank"
          style="color: var(--c-brand)"
          >https://fuyouplus.cn/</a
        >
      </div>
      <div>
        友链头像：<a
          href="https://fuyouplus.cn/imgs/tx.jpg"
          target="_blank"
          style="color: var(--c-brand)"
          >https://fuyouplus.cn/imgs/tx.jpg</a
        >
      </div>
    </div>
</text-block>

# <my-title textColor_h="var(--c-brand)" lineColor="var(--c-brand)">友链列表</my-title>

<friends/>

<ClientOnly>
<comment :redNum="false"/>
</ClientOnly>
