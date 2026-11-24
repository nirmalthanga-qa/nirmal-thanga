export interface Stage {
  title: string;
  description: string;
  outputs: readonly string[];
}

export const stages: readonly Stage[] = [
  {
    title: "Gather business requirements",
    description:
      "I work with product owners and stakeholders to understand what the business needs and who will use it. I also ask what could go wrong.",
    outputs: [
      "Clear acceptance criteria",
      "Risks and open questions",
      "Requirements that can be tested",
    ],
  },
  {
    title: "Analyze design documents",
    description:
      "I read designs, API specs and data flows to find gaps and contradictions before anyone writes code.",
    outputs: [
      "A list of gaps and conflicts",
      "A map of data and integrations",
      "Accessibility notes",
    ],
  },
  {
    title: "Create the test strategy",
    description:
      "I decide what to test, at which layer (UI, API, accessibility, performance), and what to automate or keep manual, based on risk.",
    outputs: [
      "Scope and test layers",
      "A risk matrix",
      "Entry and exit criteria",
    ],
  },
  {
    title: "Plan the testing",
    description:
      "I turn the strategy into a plan with owners, environments, test data and compliance needs such as HIPAA.",
    outputs: [
      "A test plan with timeline and owners",
      "Environment and test data plan",
      "Compliance checkpoints",
    ],
  },
  {
    title: "Develop test cases",
    description:
      "I write clear cases for happy paths, edge cases and negative scenarios, each traced back to a requirement.",
    outputs: [
      "Test cases with traceability",
      "Regression suite scope",
      "Reusable test data sets",
    ],
  },
  {
    title: "Select automation tools",
    description:
      "I compare tools against the team’s stack, skills and budget, then prove the choice with a small pilot.",
    outputs: [
      "A tool comparison",
      "Pilot results",
      "A framework decision the team agrees with",
    ],
  },
  {
    title: "Implement automation",
    description:
      "I build maintainable suites in TypeScript with Playwright, using page objects, typed API clients, fixtures and accessibility checks.",
    outputs: [
      "UI, API and accessibility suites",
      "A reusable framework",
      "Readable test reports",
    ],
  },
  {
    title: "AI utilization",
    description:
      "I use AI where it saves time and keep a person in charge. It helps me draft test ideas from requirements, generate Playwright tests with agents, repair broken locators and summarize failures.",
    outputs: [
      "Test ideas generated from requirements",
      "AI-drafted tests that I review before they merge",
      "Faster failure triage with AI summaries",
    ],
  },
  {
    title: "Run it in CI/CD",
    description:
      "I run the suites on every pull request with GitHub Actions and Docker, split into parallel shards so feedback arrives in minutes.",
    outputs: [
      "Quality gates in the pipeline",
      "Parallel, repeatable runs",
      "Failure reports with traces",
    ],
  },
  {
    title: "Manage defects",
    description:
      "I log defects with steps, evidence and severity, triage them with the team and verify every fix.",
    outputs: [
      "Reproducible defect reports",
      "Triage and priority",
      "Fix verification and regression checks",
    ],
  },
  {
    title: "Release and support",
    description:
      "I run smoke checks after release, watch for problems in production and help the team resolve them quickly.",
    outputs: [
      "Release sign-off",
      "Post-release smoke checks",
      "Production issue analysis",
    ],
  },
  {
    title: "Review and improve",
    description:
      "I track flaky tests, escaped defects and cycle time, then improve the process with the team using continuous improvement habits from Lean Six Sigma.",
    outputs: [
      "Quality metrics",
      "Fixes for flaky tests",
      "Retrospective actions",
    ],
  },
];
