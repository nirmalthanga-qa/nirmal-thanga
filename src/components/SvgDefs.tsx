/** SVG filter used by the Atlassian logo (.atlas-mark in global.css). */
export function SvgDefs() {
  return (
    <svg
      aria-hidden="true"
      width={0}
      height={0}
      style={{ position: "absolute" }}
    >
      <defs>
        <filter id="atlas-blue" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 .145  0 0 0 0 .518  0 0 0 0 1  1.5 0 0 0 -0.45"
          />
        </filter>
      </defs>
    </svg>
  );
}
