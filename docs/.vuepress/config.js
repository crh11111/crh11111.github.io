const { path } = require("@vuepress/utils");
const navs = require("./config/nav");
const sidebar = require("./config/sidebar");

module.exports = {
  lang: "zh-CN",
  head: [["link", { rel: "icon", href: "/imgs/logo.svg" }],
  ["meta", { name: "referrer", content: "never" }],
  ],
  title: "霧",
  description: "霧的个人博客",
  theme: path.resolve(__dirname, "./theme/index.js"),
  themeConfig: {
    logo: "/imgs/logo.svg",
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
