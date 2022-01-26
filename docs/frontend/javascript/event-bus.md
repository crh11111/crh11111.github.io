<ClientOnly>
<initbg/>
</ClientOnly>

# <my-title textColor_h="rgb(51, 149, 159)" lineColor="rgb(51, 149, 159)">高仿 vue2 EventBus API</my-title>

## <my-title textColor_h="#ff0062" lineColor="#ff0062">起因</my-title>

<p style="text-indent:1em;font-size:18px;">
EventBus(中央事件总线) 在Vue2中可谓是最好用的非父子组件之间的通讯手段,但就在不久前,Vue3发布了。
</p>
<p style="text-indent:1em;font-size:18px;">
随之而来的有许多好用的新特性，但也有遗憾————Vue3宣布已不在内置 $on $emit API,对于EventBus的取消，官方推荐的做法是让用户自己寻找使用第三方库，对于用惯了EventBus的用户来说，属实有些小难受。
</p>

## <my-title textColor_h="#ff0062" lineColor="#ff0062">所以，我来了</my-title>

<tips type="info">
<template v-slot:title>
小蝣说：
</template>
轻便小巧的EventBus来了，代码如下  ↓
</tips>

## <my-title textColor_h="#00c3ff" lineColor="#00c3ff">Javascript</my-title>

```js:no-line-numbers
var eventStack = {};

function $on(eventName, callBack) {
  if (eventStack[eventName]) {
    eventStack[eventName].callBacks.push(callBack);
    callBack(eventStack[eventName].value);
  } else {
    console.error("该接口未注册,请先通过emit方法注册接口,再来监听");
  }
}

function $emit(eventName, value) {
  if (eventStack[eventName] && eventStack[eventName].callBacks.length) {
    eventStack[eventName].value = value;
    eventStack[eventName].callBacks.forEach(function (callBack) {
      callBack(value);
    });
  } else {
    eventStack[eventName] = {
      value,
      callBacks: [],
    };
  }
}
var eventBus = {
  $emit,
  $on,
};

export function useEventBus() {
  return eventBus;
}
```

## <my-title textColor_h="#09ff00" lineColor="#09ff00">Typescript</my-title>

```ts:no-line-numbers
const eventStack: any = {};

const $on = (eventName: string, callBack: (value: any) => void): void => {
  if (eventStack[eventName]) {
    eventStack[eventName].callBacks.push(callBack);
    callBack(eventStack[eventName].value);
  } else {
    console.error("该接口未注册,请先通过emit方法注册接口,再来监听");
  }
};

interface evnetBusItem_interface {
  value: any;
  callBacks: Array<(value: any) => void>;
}
const $emit = (eventName: string, value: any): void => {
  if (eventStack[eventName] && eventStack[eventName].callBacks.length) {
    eventStack[eventName].value = value;
    eventStack[eventName].callBacks.forEach(function (
      callBack: (value: any) => void
    ) {
      callBack(value);
    });
  } else {
    const evnetBusItem: evnetBusItem_interface = {
      value,
      callBacks: [],
    };
    eventStack[eventName] = evnetBusItem;
  }
};

interface eventBus_interface {
  $emit: (eventName: string, value: any) => void;
  $on: (eventName: string, callBack: (value: any) => void) => void;
}

const eventBus: eventBus_interface = {
  $emit,
  $on,
};

export const useEventBus = (): eventBus_interface => {
  return eventBus;
};
```

<tips type="success">
<template v-slot:title>
小蝣说：
</template>
使用方法如下  ↓
</tips>

```js:no-line-numbers
import { useEventBus } from "./eventBus";//引入EventBus
const Bus = useEventBus();//创建Bus

Bus.$emit('num',10);//发布数据

Bus.$on('num',(val)=>{
//此处监听
//do some thing
})

```

## <my-title textColor_h="#09ff00" lineColor="#09ff00">总结</my-title>

<tips type="warn">
<template v-slot:title>
小蝣说：
</template>
可以看到，API的使用与之前一致,此方法并不与某一个框架强绑定，可以自由使用在任意项目环境中,全文系博主原创，转载请标明出处!
</tips>
<ClientOnly>
<comment/>
</ClientOnly>

<my-code/>
