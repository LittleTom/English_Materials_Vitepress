import { defineConfig } from "vitepress";
import { set_sidebar } from "./utils/auto_sidebar.mjs";
import SidebarGuide from "./sidebar/guild/index.mjs";

const ogUrl = "https://english.voids.cn/";
const ogImage = `${ogUrl}/logo/eng.png#1`;
const title = "英语 · 学习笔记";
const description = "为英文初学者撰写的英语学习指导手册";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  // base: "/English_Materials_Vitepress/",
  title,
  titleTemplate: title + " | " + description,
  description,
  head: [
    ["link", { rel: "icon", href: "/favicon.ico", type: "image/svg+xml" }],
    [
      "link",
      {
        rel: "alternate icon",
        href: "/images/favicon.ico",
        type: "image/png",
        sizes: "16x16",
      },
    ],
    ["meta", { name: "author", content: "Anthony Fu" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { name: "og:title", content: title }],
    ["meta", { name: "og:description", content: title }],
    ["meta", { name: "twitter:title", content: title }],
    ["meta", { name: "twitter:card", content: "summary_large_image" }],
    ["meta", { name: "twitter:image", content: ogImage }],
    ["meta", { name: "twitter:site", content: "@" }],
    ["meta", { name: "twitter:url", content: "" }],
    [
      "link",
      {
        rel: "search",
        type: "application/opensearchdescription+xml",
        href: "/search.xml",
        title: title,
      },
    ],
  ],
  themeConfig: {
    logo: "/images/logo/eng.svg",

    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "认识英语",
        items: [
          {
            text: "认识英语",
            items: [
              {
                text: "什么是英语",
                link: "/documents/guide/what-is-english/",
              },
              {
                text: "词汇",
                link: "/documents/guide/vocabulary/",
              },
              {
                text: "语法",
                link: "/documents/guide/grammar/",
              },
            ],
          },
        ],
      },
      {
        text: "人教版 · 教材",
        items: [
          {
            text: "小学阶段",
            items: [
              { text: "三年级", link: "/item-1" },
              { text: "四年级", link: "/item-3" },
              { text: "五年级", link: "/item-3" },
              { text: "六年级", link: "/item-3" },
            ],
          },
          {
            text: "初中阶段",
            items: [
              { text: "七年级", link: "/item-1" },
              { text: "八年级", link: "/item-3" },
              { text: "九年级", link: "/item-3" },
            ],
          },
        ],
      },
      {
        text: "人教版 · 高中教材",
        items: [
          {
            text: "必修",
            items: [
              { text: "必修 · 一", link: "/item-1" },
              { text: "必修 · 二", link: "/item-2" },
              { text: "必修 · 三", link: "/item-3" },
            ],
          },
          {
            text: "选修",
            items: [
              { text: "选修 · 一", link: "/item-3" },
              { text: "选修 · 二", link: "/item-3" },
              { text: "选修 · 三", link: "/item-3" },
              { text: "选修 · 四", link: "/item-3" },
            ],
          },
        ],
      },
      {
        text: "新概念英语",
        items: [
          { text: "第一册", link: "/item-1" },
          { text: "第二册", link: "/item-2" },
          { text: "第三册", link: "/item-3" },
          { text: "第四册", link: "/item-3" },
        ],
      },
      { text: "关于", link: "/documents/pages/about" },
    ],

    sidebar: {
      "/documents/guide": SidebarGuide,
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/LittleTom/English_Materials",
      },
    ],

    footer: {
      copyright: "Copyright © 2019-PRESENT - VOIDS.CN - Thanatos.",
    },

    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",

    outline: {
      label: "页面导航",
    },

    editLink: {
      pattern:
        "https://github.com/LittleTom/English_Materials/edit/master/:path",
      text: "在 GitHub 上编辑此页面",
    },

    lastUpdated: {
      text: "最后更新于",
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
  },
  lastUpdated: true,
  appearance: "dark",

  markdown: {
    theme: {
      light: "vitesse-light",
      dark: "vitesse-dark",
    },

    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true,
    },

    // 在markdown配置中自定义插件
    config: (md) => {
      // 自定义渲染规则
      md.renderer.rules.text = function (tokens, idx) {
        let content = tokens[idx].content;

        // 使用正则表达式匹配自定义颜色标签
        content = content.replace(/{:(color=[^}]+)}/g, (match, colorValue) => {
          // 提取颜色值并包裹成 span 标签
          const color = colorValue.split("=")[1];
          return `<span style="color:${color};">`;
        });

        // 处理结束标签
        content = content.replace(/{:color}/g, "</span>");

        return content;
      };
    },
  },
});
