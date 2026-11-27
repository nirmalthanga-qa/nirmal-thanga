const ROLES = [
  { lead: "Senior", rest: " Quality Engineer " },
  {
    lead: "Automation • ",
    rest: " AI-Driven ",
  },
  // The first role is repeated so the CSS loop wraps around seamlessly.
  { lead: "Senior", rest: " Quality Engineer " },
] as const;

export function RoleRoller() {
  return (
    <div className="role" role="text" aria-label="Senior Quality Engineer">
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
