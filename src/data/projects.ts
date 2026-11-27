export interface ProjectLink {
  href: string;
  label: string;
}

export interface Project {
  title: string;
  description: string;
  link?: ProjectLink;
}

export interface ProjectGroup {
  title: string;
  projects: readonly Project[];
}

export const projectGroups: readonly ProjectGroup[] = [
  {
    title: "Independent Consultant / Freelance Projects",
    projects: [
      {
        title: "Software QA Support",
        description:
          "Offering freelance QA support to help businesses deliver reliable, high-quality software through comprehensive testing and quality assurance. Specializing in end-to-end test automation using Playwright with TypeScript, covering critical user journeys, UI workflows, and API validation.",
      },
    ],
  },
  {
    title: "US Federal Healthcare IT",
    projects: [
      {
        title: "Quality Payment Program (QPP)",
        description:
          "A CMS program supporting high-quality, value-based healthcare by connecting Medicare clinician payments to performance. It supports quality reporting and participation in value-based payment pathways.",
      },
      {
        title: "Measure Authoring Tool (MAT)",
        description:
          "A web-based tool used by measure developers to create electronic clinical quality measures (eCQMs). It helps define measure logic and structure for evaluating healthcare quality using electronic data.",
      },
      {
        title: "Medicaid and CHIP (MAC)",
        description:
          "Medicaid and the Children’s Health Insurance Program (CHIP) provide health coverage to eligible populations. Medicaid serves eligible low-income adults, children, pregnant women, older adults, and people with disabilities, while CHIP extends coverage to eligible children.",
      },
    ],
  },
  {
    title: "Personal projects",
    projects: [
      {
        title: "SDET Learning Hub",
        description:
          "A learning platform for software testers with guided lessons in quality engineering, TypeScript, Playwright, Cypress, API testing, and AI-assisted testing. Learners can follow a roadmap and track their progress as they complete each lesson.",
        link: {
          href: "https://sdet-learning-hub.vercel.app/",
          label: "Visit SDET Learning Hub ↗",
        },
      },
      {
        title: "SDET Practice Lab",
        description:
          "Pick between Playwright, Cypress, and Selenium to practice automation testing. A hands-on learning platform in development for aspiring and experienced SDETs.",
        link: {
          href: "https://sdet-practice-lab.onrender.com/",
          label: "Visit SDET Practice Lab ↗",
        },
      },
      // {
      //   title: "Professional Portfolio",
      //   description:
      //     "My professional portfolio showcasing my quality engineering experience, skills, and development journey.",
      // },
    ],
  },
];
