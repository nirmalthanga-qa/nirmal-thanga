import { Wanderer } from "./Wanderer";

/** Under "Education": a plane cruises back and forth; tap it for the Master’s GPA. */
export function WanderingPlane() {
  return (
    <Wanderer
      label="Show my Master’s GPA"
      kind="plane"
      facing="flip"
      tone="ok"
      size={64}
      iconSize={56}
      speed={64}
      inline
      message={() => "GPA 4.00/4.00 in Masters"}
    >
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <g transform="translate(24 24) scale(.8) translate(6 0)">
          <path
            d="M22 0L-6 -6L-14 -22L-20 -22L-14 -5L-26 -3L-30 -9L-34 -9L-30 0L-34 9L-30 9L-26 3L-14 5L-20 22L-14 22L-6 6Z"
            fill="var(--acc)"
            stroke="var(--acc)"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </Wanderer>
  );
}

/** Under "Projects": a laptop floats along; tap it for the success rate. */
export function WanderingLaptop() {
  return (
    <Wanderer
      label="Show the success rate"
      kind="laptop"
      facing="flip"
      tone="ok"
      size={64}
      iconSize={56}
      speed={34}
      inline
      message={() => "100% Success Rate"}
    >
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <g transform="translate(0 3)">
          <rect
            x="9"
            y="8"
            width="30"
            height="22"
            rx="3"
            fill="#121315"
            stroke="var(--acc)"
            strokeWidth="2.6"
          />
          <path
            d="M17 19.5l5 5 9-10"
            stroke="#28C840"
            strokeWidth="2.8"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M4 33h40l-3 4.5H7z" fill="var(--acc)" />
        </g>
      </svg>
    </Wanderer>
  );
}
