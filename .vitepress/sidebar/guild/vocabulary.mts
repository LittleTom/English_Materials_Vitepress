import type { DefaultTheme } from "vitepress";

const BaseLink = "/documents/guide/vocabulary";

const SidebarVocabulary: DefaultTheme.SidebarItem = {
  text: "英语词汇",
  items: [
    {
      text: "什么是英语词汇？",
      link: BaseLink + "/",
    },
    {
      text: "词汇的词性",
      link: BaseLink + "/part-of-speech",
    },
  ],
};

export default SidebarVocabulary;
