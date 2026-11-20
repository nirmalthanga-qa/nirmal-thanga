const ROLES = [
  { lead: "Senior", rest: " SDET " },
  { lead: "AI-Driven", rest: " Quality Engineer" },
  // The first role is repeated so the CSS loop wraps around seamlessly.
  { lead: "Senior", rest: " SDET " },
] as const;

export function RoleRoller() {
  return (
    <div
      className="role"
      role="text"
      aria-label="Senior SDET and AI-Driven Quality Engineer"
    >
      <ul aria-hidden="true">
        {ROLES.map((r, i) => (
          <li key={i}>
            <span className="w">{r.lead}</span>
            {r.rest}
          </li>
        ))}
      </ul>
    </div>
  );
}
