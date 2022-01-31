<header-img title="一键复制内容" date="2022-01-25"/>

# <my-title textColor_h="rgb(85, 138, 238)" lineColor="rgb(85, 138, 238)" display="none">一键复制内容</my-title>

## <my-text weight="bold" color="rgb(85, 138, 238)">思路</my-text>

<tips type="warn">
<template v-slot:title>
小蝣说：
</template>
以下有些是伪代码，只用来阐述思路
</tips>

### 一、先将要被复制的内容提取出来

```js:no-line-numbers
const copyContent = xxx;
```

### 二、用 JS 创建一个 Input 元素出来

```js:no-line-numbers
const oInput = document.createElement("input");
```

### 三、将第一步提取出的内容，作为 input 的 value 赋值给它

```js:no-line-numbers
oInput.value = copyContent;
```

### 四、将创建的 input 的元素插入到 body 中

```js:no-line-numbers
//(重中之重，如果无此操作后面的一切将无效)
//博主亲身经历的坑
document.body.appendChild(oInput);
```

### 五、调用 input 元素默认的选中函数

```js:no-line-numbers
oInput.select();
```

### 六、调用 execCommand 函数复制当前选中部分的内容

```js:no-line-numbers
document.execCommand("copy");
```

### 七、复制成功后将创建插入的 input 元素移除

```js:no-line-numbers
document.body.removeChild(oInput);
```

## <my-text weight="bold" color="rgb(85, 138, 238)">封装成函数</my-text>

```js:no-line-numbers
const $copy = (el/*触发复制功能的元素例如一个Button*/,copyContent)=>{
    el.onclick = () => {
        const oInput = document.createElement("input");
        oInput.value = copyContent;
        document.body.appendChild(oInput);
        oInput.select();
        document.execCommand("copy");
        document.body.removeChild(oInput);
        alert("复制成功");
    };
}
```

## <my-text weight="bold" color="rgb(85, 138, 238)">使用</my-text>

```js:no-line-numbers
const oButton = document.querySelector('button');

const copyContent = document.querySelector('content').innerText;

$copy(oButton,copyContent);

```

<ClientOnly>
<comment/>
</ClientOnly>

<my-code/>
