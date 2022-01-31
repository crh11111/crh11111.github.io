<header-img title="CSS实现写轮眼动画" date="2022-01-25"/>

# <my-title textColor_h="rgb(51, 149, 159)" lineColor="rgb(51, 149, 159)" display="none">CSS 实现写轮眼动画</my-title>

## 效果如下

<xielunyan/>

<tips>
<template v-slot:title>
小蝣说：
</template>
<p style="text-indent:1em;font-size:18px;">请在PC端下观看动画效果!</p>
<p style="text-indent:1em;font-size:18px;">移动端不展示效果因为效果较差!</p>

<p style="text-indent:1em;font-size:18px;">该动画并不是博主原创，是博主在刷掘金的时候偶然发现的一个帖子，觉得好看就学习了一下源码。</p>
</tips>

```html:no-line-numbers
  <div class="container">
        <!-- 写轮眼 -->
        <div class="zuo">
            <!-- 眼睛最中间那个黑点 -->
            <div class="zuoZong">
                <!-- 三勾玉所在的圈 -->
                <div class="zuoYu">
                    <!-- 三个勾玉 -->
                    <span class="yu"></span>
                    <span class="yu"></span>
                    <span class="yu"></span>
                </div>
            </div>
        </div>
        <!-- 轮回眼 -->
        <div class="you">
            <!-- 眼睛最中间那个黑点 -->
            <div class="dian"></div>
            <!-- 3个轮回圈 -->
            <div class="youYu">
                <span class="quan" style="--r:2;"></span>
                <span class="quan" style="--r:3;"></span>
                <span class="quan" style="--r:4;"></span>
            </div>
        </div>
    </div>
```

```css:no-line-numbers
    * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .container {
            height: 500px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #000;
        }

        .zuo,
        .you {
            width: 250px;
            height: 120px;
            background-color: rgb(255, 255, 255);
            border-bottom: 5px solid rgb(70, 70, 70);
            overflow: hidden;
            position: relative;
        }

        .zuo {
            transform: translateX(-135px);
            border-radius: 0 120px 0 120px;
            box-shadow: inset 3px 2px 3px rgba(17, 17, 17, 0.8);
        }

        .zuo::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 95px;
            height: 95px;
            border-radius: 50%;
            border: 2px solid #000;
            animation: colour 2s linear forwards;
        }

        @keyframes colour {

            0%,
            30% {
                background-color: rgb(0, 0, 0);
            }

            100% {
                background-color: rgb(255, 4, 4);
            }
        }

        .zuoZong {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 0px;
            height: 0px;
            border-radius: 50%;
            background-color: rgb(0, 0, 0);
            z-index: 1;
            animation: da 3s linear forwards;
        }

        @keyframes da {
            100% {
                width: 15px;
                height: 15px;
            }
        }

        .zuoYu {
            position: absolute;
            top: -25px;
            left: -25px;
            bottom: -25px;
            right: -25px;
            border-radius: 50%;
            border: 2px solid rgb(0, 0, 0);
            animation: zhuan 2s linear 2s forwards;
            opacity: 0;
        }

        @keyframes zhuan {

            100% {
                opacity: 1;
                transform: rotate(720deg);
            }
        }

        .zuoYu .yu {
            position: absolute;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background-color: rgb(0, 0, 0);

        }

        .zuoYu .yu::after {
            content: '';
            position: absolute;
            top: -6px;
            left: -1px;
            width: 6px;
            height: 20px;
            border-radius: 50%;
            border-left: 6px solid rgb(0, 0, 0);
        }

        .zuoYu .yu:nth-child(1) {
            animation: yu1 2s ease-in 2s forwards;
        }

        @keyframes yu1 {
            0% {
                opacity: 0;
                left: 50%;
                top: 50%;

                transform: translate(-50%, -50%) scale(0.1);
            }

            100% {
                left: 50%;
                top: -9%;
                transform: scale(1) rotate(80deg);
            }
        }

        .zuoYu .yu:nth-child(2) {
            animation: yu2 2s ease-in 2s forwards;
        }

        @keyframes yu2 {
            0% {
                opacity: 0;
                left: 50%;
                top: 50%;

                transform: translate(-50%, -50%) scale(0.1);
            }

            100% {
                top: 60%;
                left: -9%;
                transform: scale(1) rotate(-60deg);
            }
        }

        .zuoYu .yu:nth-child(3) {
            animation: yu3 2s ease-in 2s forwards;
        }

        @keyframes yu3 {
            0% {
                opacity: 0;
                right: 50%;
                top: 50%;

                transform: translate(-50%, -50%) scale(0.1);
            }

            100% {
                top: 60%;
                right: -9%;
                transform: scale(1) rotate(180deg);
            }
        }

        .zuo::before,
        .you::before {
            content: '';
            position: absolute;
            left: 38%;
            top: 30%;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: rgb(255, 255, 255);
            z-index: 10;
        }

        .you {
            transform: translateX(135px);
            border-radius: 120px 0 120px 0;
            box-shadow: inset -3px 2px 3px rgba(17, 17, 17, 0.8);
            /*             filter: drop-shadow( 8px -5px 3px  rgb(216, 59, 59));
 */
        }

        .you::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 95px;
            height: 95px;
            border-radius: 50%;
            border: 2px solid #000;
            animation: youcolor 2s linear forwards;
        }

        @keyframes youcolor {

            0%,
            30% {
                background-color: rgb(0, 0, 0);
            }

            100% {
                background-color: rgb(144, 130, 183);

            }
        }

        .dian {
            position: absolute;
            top: 50%;
            left: 50%;
            background-color: #000;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            z-index: 10;
            animation: youda 3s linear forwards;
        }

        @keyframes youda {
            0% {
                height: 0px;
                width: 0px;
            }

            100% {
                height: 15px;
                width: 15px;
            }
        }

        .youYu {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        .quan {
            position: absolute;
            border-radius: 50%;
            border: 2px solid #000;
            z-index: calc(1 - var(--r));
            animation: zhi 2s ease-out 2s forwards;
        }

        @keyframes zhi {
            0% {
                top: calc(var(--r) * 1px);
                left: calc(var(--r) * 1px);
                right: calc(var(--r) * 1px);
                bottom: calc(var(--r) * 1px);
            }

            100% {
                top: calc(var(--r) * -35px);
                left: calc(var(--r) * -35px);
                right: calc(var(--r) * -35px);
                bottom: calc(var(--r) * -35px);
                background-color: rgb(187, 177, 214);
            }
        }
```

<ClientOnly>
<comment/>
</ClientOnly>

<my-code/>
