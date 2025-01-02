import type { DefaultTheme } from "vitepress";

const BaseLink = "/documents/guide/what-is-english";

const SidebarWhatIsEnglish: DefaultTheme.SidebarItem = {
  text: "认识英语",
  items: [
    {
      text: "什么是英语？",
      link: BaseLink + "/",
    },
    {
      text: "英语的起源与发展",
      link: BaseLink + "/origin-and-development",
    },
    {
      text: "英语的全球影响",
      link: BaseLink + "/global-influence",
    },
    {
      text: "英语的语言特点",
      link: BaseLink + "/characteristics",
    },
  ],
};

export default SidebarWhatIsEnglish;
