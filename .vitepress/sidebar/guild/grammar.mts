import type { DefaultTheme } from "vitepress";

const BaseLink = "/documents/guide/grammar";

const SidebarGrammar: DefaultTheme.SidebarItem = {
  text: "英语语法",
  items: [
    {
      text: "什么是英语语法？",
      link: BaseLink + "/",
    },
  ],
};

export default SidebarGrammar;
