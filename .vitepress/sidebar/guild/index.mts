import type { DefaultTheme } from "vitepress";
import SidebarWhatIsEnglish from "./what-is-english.mjs";
import SidebarVocabulary from "./vocabulary.mjs";
import SidebarGrammar from "./grammar.mjs";

const SidebarGuide: DefaultTheme.SidebarItem[] = [
  SidebarWhatIsEnglish,
  SidebarVocabulary,
  SidebarGrammar,
];

export default SidebarGuide;
