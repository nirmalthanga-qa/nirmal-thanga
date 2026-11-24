export interface EducationItem {
  title: string;
  meta: string;
  description?: string;
}

/** Shown on the right of the Education section. */
export const educationFocus: readonly string[] = [
  "Software Quality Assurance",
  "Advanced Test Automation",
  "System Design & Distributed Debugging",
  "AI & Next-gen Quality Engineering",
  "Continuous Improvement",
];

export const education: readonly EducationItem[] = [
  {
    title: "Master of Science in Technology",
    meta: "University of Central Missouri, USA - Dec 2016",
    description:
      "Focused on building quality into products and processes through measurement, standards and continuous improvement.",
  },
  {
    title: "Graduate Certification in Lean Six Sigma",
    meta: "American Society for Quality (ASQ)",
  },
  {
    title: "Build AI Agents for Software Testing",
    meta: "Udemy",
  },
];
