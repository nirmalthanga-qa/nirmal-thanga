import { useSketch } from '../hooks/useSketch';
import { Reveal } from './Reveal';

const BODY =
  'M4.5 24.4L3.2 22.8L3 18L4.2 16.2L5.2 15.6L15.8 9.3C18 8.2 21 8 24 8H33C36 8 38 8.6 40.5 10.4L49 14.8L61 16.6C63.8 17 65.4 18.4 65.8 20.4L66 22.8C66 23.8 65.4 24.4 64.4 24.4H61.5A6.5 6.5 0 0 0 48.5 24.4H24A6.5 6.5 0 0 0 11 24.4H4.5Z';

function Wheel({ cx }: { cx: number }) {
  const cy = 24.4;
  const spokes = `M${cx} 21V27.8M${cx - 3.4} ${cy}H${cx + 3.4} M${cx - 2.4} 22L${cx + 2.4} 26.8M${cx + 2.4} 22L${cx - 2.4} 26.8`;
  return (
    <g className="appear">
      <g className="wspin">
        <circle cx={cx} cy={cy} r={5.4} style={{ fill: '#2A2D32', stroke: '#0E0F11' }} strokeWidth={0.6} />
        <circle cx={cx} cy={cy} r={3.8} style={{ fill: '#14161A', stroke: '#9AA0A8' }} strokeWidth={0.5} />
        <path d={spokes} style={{ stroke: '#9AA0A8' }} strokeWidth={0.5} />
      </g>
      <rect x={cx + 1.3} y={21.9} width={2.6} height={1.5} rx={0.4} style={{ fill: '#E02B20' }} />
    </g>
  );
}

/** A Civic Type R that sketches itself, then "drives" (wheels spin, road scrolls). */
export function CarSketch() {
  const sketch = useSketch();

  return (
    <Reveal as="figure" className="int" delay={0.1}>
      <svg
        id="sk2"
        key={sketch.run}
        ref={sketch.ref}
        className={sketch.className}
        viewBox="0 0 320 190"
        role="img"
        aria-label="A Honda Civic Type R being sketched, then driving along a road"
      >
        <g transform="translate(40 38) scale(3.4)">
          <g className="bounce">
            <path className="appear" style={{ fill: '#F4F4F2' }} d={BODY} />
            <path className="appear" style={{ fill: 'var(--bar)' }} d="M15.2 14.8L18.6 10.4H29.6V14.8Z M31.2 10.4H33C35 10.4 36.4 10.9 38 12.2L43 14.8H31.2Z" />
            <path className="appear" style={{ fill: '#2A2D32' }} d="M24.6 22.6H48V24.4H24.6Z" />
            <path className="appear" fill="none" style={{ stroke: '#E02B20' }} strokeWidth={0.7} d="M24.6 22.4H48M60 23.4H65.8M3.3 18.2V20.6" />
            <path className="appear" fill="none" style={{ stroke: 'var(--bar)' }} strokeWidth={0.9} strokeLinecap="round" d="M61.8 18L65.1 19" />
            <Wheel cx={17.5} />
            <Wheel cx={55} />
            <path className="car-o" pathLength={1} d={BODY} />
          </g>
        </g>
        <line x1={0} x2={320} y1={141} y2={141} style={{ stroke: 'var(--line)' }} strokeWidth={2} />
        <line className="road" x1={-30} x2={340} y1={158} y2={158} style={{ stroke: 'var(--muted)' }} strokeWidth={2} strokeDasharray="16 14" />
      </svg>
      <figcaption>
        <h3>Automotive</h3>
        <button className="redo" type="button" onClick={sketch.replay}>
          Draw again
        </button>
      </figcaption>
    </Reveal>
  );
}
