import { useEffect, useRef } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

const ROUTE = 'M90 165C250 -10 560 -10 710 125';
const FLY_MS = 4800;
const HOLD_MS = 2000;

/** A plane flies the arc from India to the USA, pauses to land, then takes off again. */
export function Flight() {
  const reduced = useReducedMotion();
  const wrap = useRef<HTMLDivElement>(null);
  const route = useRef<SVGPathElement>(null);
  const trail = useRef<SVGPathElement>(null);
  const flight = useRef<SVGGElement>(null);
  const plane = useRef<SVGGElement>(null);

  useEffect(() => {
    const box = wrap.current;
    const path = route.current;
    const line = trail.current;
    const group = flight.current;
    const jet = plane.current;
    if (!box || !path || !line || !group || !jet) return;

    const len = path.getTotalLength();
    line.style.strokeDasharray = `${len}`;

    const draw = (p: number) => {
      const at = p * len;
      const pt = path.getPointAtLength(at);
      const before = path.getPointAtLength(Math.max(0, at - 1));
      const after = path.getPointAtLength(Math.min(len, at + 1));
      const angle = (Math.atan2(after.y - before.y, after.x - before.x) * 180) / Math.PI;
      jet.setAttribute('transform', `translate(${pt.x} ${pt.y}) rotate(${angle})`);
      line.style.strokeDashoffset = `${len * (1 - p)}`;
    };

    if (reduced) {
      draw(1);
      box.classList.add('landed');
      return;
    }

    const cycle = FLY_MS + HOLD_MS;
    let raf = 0;
    let start = 0;
    let running = false;

    const tick = (now: number) => {
      if (!start) start = now;
      const t = (now - start) % cycle;
      const k = Math.min(1, t / FLY_MS);
      const eased = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
      draw(eased);
      box.classList.toggle('landed', t >= FLY_MS);
      const fade = cycle - 500;
      group.style.opacity = t > fade ? String(1 - (t - fade) / 500) : '1';
      raf = requestAnimationFrame(tick);
    };

    draw(0);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !running) {
          running = true;
          start = 0;
          raf = requestAnimationFrame(tick);
        } else if (!entry.isIntersecting && running) {
          running = false;
          cancelAnimationFrame(raf);
        }
      },
      { threshold: 0.3 },
    );
    io.observe(box);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <div className="flight" ref={wrap}>
      <svg viewBox="0 0 800 220" role="img" aria-label="A plane flying from India to the USA">
        <g aria-hidden="true">
          <g transform="translate(0 38)">
            <path className="cloud c1" d="M0 0q10-14 24-8q10-12 24 2q14 0 14 10H0z" />
          </g>
          <g transform="translate(0 110)">
            <path className="cloud c2" d="M0 0q10-14 24-8q10-12 24 2q14 0 14 10H0z" />
          </g>
          <g transform="translate(0 70)">
            <path className="cloud c3" d="M0 0q10-14 24-8q10-12 24 2q14 0 14 10H0z" />
          </g>
          <path ref={route} className="route" d={ROUTE} />
          <g ref={flight}>
            <path ref={trail} className="trail" d={ROUTE} />
            <g ref={plane}>
              <path
                transform="scale(.85)"
                d="M22 0L-6 -6L-14 -22L-20 -22L-14 -5L-26 -3L-30 -9L-34 -9L-30 0L-34 9L-30 9L-26 3L-14 5L-20 22L-14 22L-6 6Z"
                fill="var(--acc)"
                stroke="var(--acc)"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </g>
          </g>
          <circle cx="90" cy="165" r="6" fill="var(--ink)" />
          <text x="90" y="196" textAnchor="middle" className="pin-label">
            India
          </text>
          <circle className="ring" cx="710" cy="125" r="6" fill="none" stroke="var(--acc)" strokeWidth="2" />
          <circle cx="710" cy="125" r="6" fill="var(--acc)" />
          <text x="710" y="156" textAnchor="middle" className="pin-label usa">
            USA
          </text>
        </g>
      </svg>
      <p className="flight-cap">Flew to the USA for my Master’s at the University of Central Missouri.</p>
    </div>
  );
}
