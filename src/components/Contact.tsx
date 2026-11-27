import type { ReactNode } from "react";
import { ChatTalk } from "./ChatTalk";

interface ContactLink {
  label: string;
  href: string;
  icon: ReactNode;
  target?: "_blank";
}

const links: readonly ContactLink[] = [
  {
    label: "Email me",
    href: "mailto:nirmalthanga.qa@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect
          x="2"
          y="4.5"
          width="20"
          height="15"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="m3 6 9 7 9-7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/nirmalthanga-qa",
    target: "_blank",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 .7a11.4 11.4 0 0 0-3.6 22.2c.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.6 1.3 3.3 1 .1-.7.4-1.2.7-1.5-2.6-.3-5.4-1.3-5.4-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.2-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.9 0c2.2-1.5 3.2-1.2 3.2-1.2.7 1.6.3 2.8.2 3.1.7.8 1.2 1.8 1.2 3.1 0 4.5-2.8 5.5-5.5 5.8.5.4.8 1.1.8 2.2v3.2c0 .4.2.7.8.6A11.4 11.4 0 0 0 12 .7z"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nirmal-thanga",
    target: "_blank",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect width="24" height="24" rx="3" fill="white" />
        <path
          fill="black"
          d="M4 9h3v11H4zM5.5 4a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6zM10 9h3v1.5c1-2.5 7-3 7 3V20h-3v-6c0-3-4-3-4 0v6h-3z"
        />
      </svg>
    ),
  },
];

export function Contact() {
  return (
    <section className="contact-bg" id="contact">
      <div className="sec contact-in">
        <div>
          <h2>
            Let’s <span className="hl">connect</span>
          </h2>
          <p>
            Have a Senior Quality Engineering opportunity or a question about
            one of my projects?
          </p>
          <div className="btns">
            {links.map((l) => (
              <a
                key={l.label}
                className="btn"
                href={l.href}
                target={l.target}
                rel={l.target === "_blank" ? "noreferrer" : undefined}
                aria-label={l.label}
                title={l.label}
              >
                {l.icon}
              </a>
            ))}
          </div>
        </div>
        <ChatTalk />
      </div>
    </section>
  );
}
