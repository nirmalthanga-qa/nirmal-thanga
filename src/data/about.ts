export interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

export const aboutParagraphs: readonly string[] = [
  "I’m Nirmal Kumar Thangaraju, a senior SDET with 8 years in quality engineering. I turn product requirements into automated checks that run on every pull request and tell the team what broke and why.",
  "Most of my career has been on healthcare and government products, where privacy and accessibility are requirements. I test for HIPAA-aware data handling and Section 508 and WCAG compliance from the first sprint, not the last.",
  "Right now I’m exploring how AI agents can plan, write and repair Playwright tests, and where a person still needs to make the call.",
];

export const stats: readonly Stat[] = [
  { value: 8, suffix: "+", label: "years in quality engineering" },
  { value: 3, label: "manual, automation, ai-driven" },
];
