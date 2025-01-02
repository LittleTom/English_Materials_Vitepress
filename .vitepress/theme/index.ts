// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";

import "./rainbow.css";
import "./vars.css";
import "./overrides.css";
// import "./style.css";

if (typeof document !== "undefined") {
  // 仅在浏览器环境中执行的代码
  document.documentElement.classList.add("rainbow");
}

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  },
} satisfies Theme;
