const { path } = require("@vuepress/utils");

const mayFly = {
  name: "vuepress-theme-mayFly",
  extends: "@vuepress/theme-default",
  layouts: {
    // Layout: path.resolve(__dirname, "./Layout.vue"),
    404: path.resolve(__dirname, "./404.vue"),
  },
};

module.exports = mayFly;
