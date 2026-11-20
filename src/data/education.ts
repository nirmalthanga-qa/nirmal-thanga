export interface EducationItem {
  title: string;
  meta: string;
  description?: string;
}

/** Shown on the right of the Education section. */
export const educationFocus: readonly string[] = [
  "Quality Engineering",
  "Lean Six Sigma",
  "Operations Management",
  "Continuous Improvement",
  "Organizational Dynamics",
];

export const education: readonly EducationItem[] = [
  {
    title: "Master of Science in Technology",
    meta: "University of Central Missouri, USA - 2016",
    description:
      "Focused on building quality into products and processes through measurement, standards and continuous improvement.",
  },
  {
    title: "Graduate Certification in Lean Six Sigma",
    meta: "American Society for Quality, USA - 2016",
  },
];
