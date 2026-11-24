import type { AssetKey } from "../assets";

export interface Tool {
  name: string;
  /** Remote icon URL (devicon / simple-icons). */
  src?: string;
  /** Local image from src/assets. */
  asset?: AssetKey;
  className?: string;
  /** Hand-drawn icon rendered by ToolIcon. */
  custom?: "accessibility" | "ai" | "sql";
}

export const tools: readonly Tool[] = [
  {
    name: "TypeScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },

  // { name: "Python", src: "/python.png" },
  {
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  // {
  //   name: "SQL",
  //   custom: "sql",
  // },
  {
    name: "Playwright",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg",
  },
  {
    name: "Cypress",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg",
  },
  {
    name: "Postman",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  },
  {
    name: "Swagger",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg",
  },
  {
    name: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "GitHub Actions",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
  },
  {
    name: "Docker",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    name: "Accessibility",
    custom: "accessibility",
  },
  {
    name: "k6",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/k6/k6-original.svg",
  },
  { name: "Jira", src: "/jira.png" },

  // asset: "atlassian",
  // className: "supplied atlas-mark",
  // },
  {
    name: "Zephyr",
    asset: "zephyr",
    className: "supplied white-paper",
  },
  // {
  //   name: "TestRail",
  //   asset: "testrail",
  //   className: "supplied white-paper",
  // },
  {
    name: "Slack",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg",
  },
  {
    name: "Notion",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/notion/notion-original.svg",
  },
  {
    name: "VS Code",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  },
  {
    name: "GitHub Copilot",
    src: "https://cdn.simpleicons.org/githubcopilot/deecf5",
  },
  { name: "AI Tools", src: "/ai.png" },
];
