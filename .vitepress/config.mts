import { defineConfig } from 'vitepress'
import { set_sidebar } from "./utils/auto_sidebar.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  // base: "/English_Materials_Vitepress/",
  title: "英语 · 资料库",
  description: "英语 · 资料库",
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
      text: '最后更新于',
    },

    docFooter: {
			prev: "上一页",
			next: "下一页"
		},
  },
  lastUpdated: true,

  markdown: {
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true
    },
    
    // 在markdown配置中自定义插件
    config: (md) => {
      // 自定义渲染规则
      md.renderer.rules.text = function (tokens, idx) {
        let content = tokens[idx].content;

        // 使用正则表达式匹配自定义颜色标签
        content = content.replace(/{:(color=[^}]+)}/g, (match, colorValue) => {
          // 提取颜色值并包裹成 span 标签
          const color = colorValue.split('=')[1];
          return `<span style="color:${color};">`;
        });

        // 处理结束标签
        content = content.replace(/{:color}/g, '</span>');

        return content;
      };
    },
  }
})
