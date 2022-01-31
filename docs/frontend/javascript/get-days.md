<header-img title="获取当前星期星期一的年月日" date="2022-01-22"/>

# <my-title textColor_h="rgb(76, 175, 80)" lineColor="rgb(76, 175, 80)" display="none">获取当前星期星期一的年月日</my-title>

## 思路

### 一、获取当天的时间戳

```js:no-line-numbers
//获取当天的时间戳
let currentTimeStamp = new Date().getTime();
```

### 二、获取当天是本星期的星期几

```js:no-line-numbers
//因为星期天在js里返回的是 0 所以这里弄成人类容易理解的7
let currentWeek = new Date().getDay() == 0 ? 7 : new Date().getDay();
```

### 三、求出当前星期离星期一有多少天

```js:no-line-numbers
//用当日星期几 - 1  就得出了当日星期离当前星期的星期一有多少天
let daysApartCount = currentWeek - 1;
```

### 四、求出一天的时间戳

```js:no-line-numbers
//计算 一天的时间戳  一共有多少毫秒
let timeStampOfOneDay = 24 * 60 * 60 * 1000;
```

### 五、求出相隔天数的总时间戳

```js:no-line-numbers
//用相隔的天数 乘 一天的时间戳（毫秒）得出相隔的天的毫秒
 let countTimeStamp = daysApartCount * timeStampOfOneDay;
```

### 六、得到 Date 对象

```js:no-line-numbers
//最后 拿当日的时间戳（毫秒）减去 相隔天数的时间戳（毫秒）
//放进new Date 里 他会自动识别时间戳 所对应的日期
 let date = new Date(currentTimeStamp - countTimeStamp);
```

## <my-title textColor_h="#00c3ff" lineColor="#00c3ff">Javascript</my-title>

```js:no-line-numbers
function getCurrentWeekMondadyDate() {
let currentTimeStamp = new Date().getTime();
let currentWeek = new Date().getDay() == 0 ? 7 : new Date().getDay();
let daysApartCount = currentWeek - 1;
let timeStampOfOneDay = 24 _ 60 _ 60 _ 1000;
let countTimeStamp = daysApartCount _ timeStampOfOneDay;
let date = new Date(currentTimeStamp - countTimeStamp);

return {
year: date.getFullYear(),
month: date.getMonth() + 1,
day: date.getDate(),
   };
}

```

## <my-title textColor_h="#09ff00" lineColor="#09ff00">Typescript</my-title>

```ts:no-line-numbers
interface ReturnCurrentWeekMondadyDateInterface {
  readonly year: number;
  readonly month: number;
  readonly day: number;
}

const getCurrentWeekMondadyDate: () => ReturnCurrentWeekMondadyDateInterface =
  () => {
    const orginDate: Date = new Date();
    const currentTimeStamp: number = orginDate.getTime();
    const currentWeek: number = orginDate.getDay() == 0 ? 7 : orginDate.getDay();
    const daysApartCount: number = currentWeek - 1;
    const timeStampOfOneDay: number = 24 * 60 * 60 * 1000;
    const countTimeStamp: number = daysApartCount * timeStampOfOneDay;
    const endDate: Date = new Date(currentTimeStamp - countTimeStamp);
    return {
      year: endDate.getFullYear(),
      month: endDate.getMonth() + 1,
      day: endDate.getDate(),
    };
  };
```

<tips type="warn">
<template v-slot:title>
小蝣说：
</template>
返回的数据格式如下：
</tips>

```js:no-line-numbers
{
    day:xx,
    month:xx,
    year:xxxx
}
```

<ClientOnly>
<comment/>
</ClientOnly>

<my-code/>
