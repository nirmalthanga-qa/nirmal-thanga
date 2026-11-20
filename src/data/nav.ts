export interface NavItem {
  id: string;
  label: string;
}

export const navItems: readonly NavItem[] = [
  { id: "top", label: "Home" },
  { id: "about", label: "About me" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Quality engineering" },
  { id: "stack", label: "My Tech Stack" },
  { id: "projects", label: "Projects" },
  { id: "interests", label: "My Interests" },
  { id: "contact", label: "Contact" },
];
