# <my-title textColor_h="rgb(51, 149, 159)" lineColor="rgb(51, 149, 159)">调用系统 Notification 通知功能</my-title>

<tips>
<template v-slot:title>
小蝣说：
</template>
废话不多说上代码，代码如下  ↓
</tips>

```js:no-line-numbers
const $notification = (title, options) => {
  // 先检查浏览器是否支持
  if (!("Notification" in window)) {
    alert("很抱歉当前浏览器不支持桌面通知！");
  } else if (Notification.permission === "granted") {
    // 检查用户是否同意接受通知
    notification = new Notification(title, options);
    notification.onclick = function () {
      window.focus();
    };
  } else if (Notification.permission !== "denied") {
    // 否则我们需要向用户获取权限
    Notification.requestPermission(function (permission) {
      // 如果用户同意，就可以向他们发送通知
      if (permission === "granted") {
        notification = new Notification(title, options);
        notification.onclick = function () {
          window.focus();
        };
      }
    });
  }
};
```

## 参数介绍

```js:no-line-numbers
title:"一定会被显示的通知标题"

options:{
        dir: /*文字的方向*/'auto(自动)' | 'ltr(从左到右)' | 'rtl(从右到左)',
        lang:/*指定通知中所使用的语言*/,
        body:'通知中额外显示的字符串也就是内容',
        tag:/* 赋予通知一个ID，以便在必要的时候对通知进行刷新、替换或移除*/,
        icon:/*一个图片的URL，将被用于显示通知的图标*/
}

```

## 简单使用

```js:no-line-numbers
$notification('我是标题', {
        body: "我是内容",
        icon: 'https://fuyouplus.cn/logo.svg'
    })
    //记住一定要跑在serve端才有效果,如果只是普通的打开HTML页面没效果的
```

<tips type="warn">
<template v-slot:title>
小蝣说：
</template>
MDN官方文档介绍:<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/notification" target="_blank">https://developer.mozilla.org/zh-CN/docs/Web/API/notification</a>
</tips>

<ClientOnly>
<comment/>
</ClientOnly>
<my-code/>
