module.exports = [
  { text: "首页", link: "/" },
  { text: "前言", link: "/foreword" },
  { text: "归档", link: "/timeline" },
  {
    text: "生活",
    children: [
      { text: "随记", link: "/life/note" },
      { text: "游戏", link: "/life/game" },
      { text: "魔方", link: "/life/cube" },
      { text: "书籍", link: "/life/book" },
    ],
  },
  {
    text: "前端",
    children: [
      { text: "JavaScript", link: "/frontend/javascript/event-bus" },
      { text: "TypeScript", link: "/frontend/typescript/" },
      { text: "Jquery", link: "/frontend/jquery" },
      { text: "CSS", link: "/frontend/css/xielunyan" },
      { text: "Sass", link: "/frontend/sass/" },
      { text: "Less", link: "/frontend/less/" },
      { text: "Canvas", link: "/frontend/canvas/" },
      { text: "Vue2", link: "/frontend/vue2/" },
      { text: "Vue3", link: "/frontend/vue3/" },
      { text: "React", link: "/frontend/react/" },
      { text: "Svelte", link: "/frontend/svelte/" },
      { text: "Vite", link: "/frontend/vite/" },
      { text: "NuxtJS", link: "/frontend/nuxtjs/" },
      { text: "Webpack", link: "/frontend/webpack/" },
      { text: "Uniapp", link: "/frontend/uniapp/uni-file-picker" },
      { text: "ElementUI", link: "/frontend/elementui/" },
    ],
  },
  // {
  //   text: "后端",
  //   children: [
  //     { text: "Nodejs", link: "/backend/nodejs/" },
  //     { text: "MySQL", link: "/backend/mysql/" },
  //   ],
  // },
  // { text: "算法", link: "/algorithms/" },
  {
    text: "开发工具",
    children: [
      // { text: "Git", link: "/tools/git/" },
      { text: "VSCode", link: "/tools/vscode/" },
      { text: "Hbuilder", link: "/tools/hbuilder/" },
    ],
  },
  // {
  //   text: "笔记",
  //   children: [
  //     { text: "CSS基础", link: "/note/css/" },
  //     { text: "HTML基础", link: "/note/html/" },
  //     { text: "ES5基础", link: "/note/es5/" },
  //     { text: "ES6基础", link: "/note/es6/" },
  //     { text: "Jquery基础", link: "/note/Jquery/" },
  //     { text: "Vue基础", link: "/note/vue/" },
  //   ],
  // },
  { text: "友链", link: "/friends" },
  {
    text: "关于",
    children: [
      {
        text: "我",
        link: "/about/me/",
      },
      {
        text: "本站",
        link: "/about/my-blog/",
      },
      {
        text: "我的前端之路",
        link: "/about/learn-frontend/html-css",
      },
      {
        text: "看片",
        link: "/about/video/",
      },
    ],
  },
  {
    text: "Github",
    link: "https://github.com/2383155523/2383155523.github.io",
  },
];
