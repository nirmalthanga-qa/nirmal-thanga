import { useState } from "react";
import { assets } from "../assets";
import { tools, type Tool } from "../data/stack";
import { AccessibilityIcon, AiIcon, SqlIcon } from "./icons";
import { Reveal } from "./Reveal";
import { SoftSkillsTicker } from "./SoftSkillsTicker";

function ToolIcon({ tool }: { tool: Tool }) {
  const [failed, setFailed] = useState(false);

  if (tool.custom === "accessibility") return <AccessibilityIcon />;
  if (tool.custom === "ai") return <AiIcon />;
  if (tool.custom === "sql") return <SqlIcon />;

  const src = tool.asset ? assets[tool.asset] : tool.src;
  if (!src || failed) {
    // Shown if a remote icon cannot load (for example when offline).
    return (
      <svg viewBox="0 0 48 48" role="img" aria-label={tool.name}>
        <text
          x="24"
          y="31"
          textAnchor="middle"
          fontSize="18"
          fill="currentColor"
        >
          {tool.name.slice(0, 2)}
        </text>
      </svg>
    );
  }
  return (
    <img
      className={tool.className}
      src={src}
      alt={tool.name}
      onError={() => setFailed(true)}
    />
  );
}

export function Stack() {
  return (
    <section className="sec" id="stack">
      <Reveal as="h2">
        My <span className="hl">Tech</span> Stack
      </Reveal>{" "}
      <Reveal as="p" className="lead">
        Hover over a logo, or tap it, to see its name.
      </Reveal>
      <ul className="logos">
        {tools.map((tool, i) => (
          <Reveal as="li" key={tool.name} delay={i * 0.04}>
            <div className="lg" data-n={tool.name} tabIndex={0}>
              <ToolIcon tool={tool} />
            </div>
          </Reveal>
        ))}
      </ul>
      <SoftSkillsTicker />
    </section>
  );
}
