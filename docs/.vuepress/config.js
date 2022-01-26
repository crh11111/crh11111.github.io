const { path } = require("@vuepress/utils");
const navs = require("./config/nav");
const sidebar = require("./config/sidebar");

module.exports = {
  lang: "zh-CN",
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  title: "微若蜉蝣",
  description: "微若蜉蝣的个人博客",
  // theme: "@vuepress/theme-default",
  theme: path.resolve(__dirname, "./theme/index.js"),
  themeConfig: {
    logo: "/logo.svg",
    navbar: navs,
    sidebar: sidebar,
    contributors: true,
  },
  plugins: [
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "搜索",
          },
          //   "/EN/": {
          //     placeholder: "Search",
          //   },
        },
      },
    ],
    [
      "@vuepress/register-components",
      {
        componentsDir: path.resolve(__dirname, "./components"),
      },
    ],
  ],
};
