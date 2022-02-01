<header-img title="uni-file-picker组件在ios点击失效" date="2022-01-23" src="https://w.wallhaven.cc/full/z8/wallhaven-z827xy.jpg"/>

# <my-title textColor_h="rgb(224, 64, 251)" lineColor="rgb(224, 64, 251)" display="none">uni-file-picker 组件在 ios 点击失效</my-title>

```js:no-line-numbers
//从组件源码里找到 choose-and-upload-file.js 文件
//查找 chooseAndUploadFile 方法，在方法里添加下面代码，保存即可解决
opts.sourceType = ['album','camera']
```

## 如下图所示：

![代码图](https://img-blog.csdnimg.cn/20210525200621817.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01yX0phdmFTY3JpcHQ=,size_16,color_FFFFFF,t_70)

<tips type="info">
<template v-slot:title>
小蝣说：
</template>
转载自：<a href="https://blog.csdn.net/Mr_JavaScript/article/details/117263483" target="_blank">https://blog.csdn.net/Mr_JavaScript/article/details/117263483</a>
</tips>
<ClientOnly>
<comment/>
</ClientOnly>

<my-code/>
