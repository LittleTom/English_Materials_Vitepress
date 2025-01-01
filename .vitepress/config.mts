import { defineConfig } from 'vitepress'
import { set_sidebar } from "./utils/auto_sidebar.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  // base: "/English_Materials_Vitepress/",
  title: "智慧线 · 英语 · 资料库",
  description: "智慧线 · 英语 · 资料库",
  themeConfig: {
    logo: '/images/logo/eng.svg',

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
              closeText: "关闭"
            },
          },
        },
      },
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],
    sidebar: [
      { text: '语法 · Grammar', items: set_sidebar("/docs/grammar") }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/LittleTom/English_Materials_Vitepress' }
    ],

    footer:{
      copyright:"Copyright © 2019-PRESENT VOIDS.CN - Thanatos."
    },

    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    outline: {
      label: "页面导航"
    },

    editLink: {
      pattern: 'https://github.com/LittleTom/English_Materials_Vitepress/edit/master/:path',
      text: "在 GitHub 上编辑此页面"
    },

    lastUpdated: {
      text: '最后修改',
    },

    docFooter: {
			prev: "上一页",
			next: "下一页"
		},
  },
  lastUpdated: true
})
