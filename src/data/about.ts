export interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

export const aboutParagraphs: readonly string[] = [
  "I’m Nirmal Kumar Thangaraju, a Senior Quality Engineer with 8+ years of experience in Software Product Development, specializing in test automation, quality strategy, and building scalable testing solutions.",
  "I bring expertise in software quality assurance, advanced test automation, and framework architecture, with a strong understanding of system design, integration, and distributed systems debugging. I focus on transforming business requirements into reliable, maintainable automated tests that integrate seamlessly into CI/CD pipelines, enabling faster feedback, early defect detection, and confident software releases.",
  "With a strong emphasis on continuous improvement and engineering excellence, I’m also exploring AI-driven testing and next-generation quality engineering, particularly how AI agents can plan, generate, and maintain automated tests while keeping human judgment at the center of quality decisions.",
];

export const stats: readonly Stat[] = [
  { value: 8, suffix: "+", label: "Years in Quality Engineering" },
  { value: 3, label: "Manual, Automation, AI-Driven" },
];
