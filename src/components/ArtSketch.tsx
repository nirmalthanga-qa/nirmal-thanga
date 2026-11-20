import { useRef } from 'react';
import { useSketch } from '../hooks/useSketch';
import { Reveal } from './Reveal';

const MOUNTAINS = 'M12 150L66 84L98 122L146 52L206 150L238 112L270 150L308 150';
const WAVES = 'M12 170q20-8 40 0t40 0t40 0t40 0t40 0t40 0t40 0';
const SUN = 'M231 44a15 15 0 1 0 30 0a15 15 0 1 0-30 0';

export function ArtSketch() {
  const motion = useRef<SVGElement>(null);
  const sketch = useSketch(() => (motion.current as unknown as SVGAnimationElement | null)?.beginElement?.());

  return (
    <Reveal as="figure" className="int">
      <svg
        id="sk1"
        key={sketch.run}
        ref={sketch.ref}
        className={sketch.className}
        viewBox="0 0 320 190"
        role="img"
        aria-label="A pencil sketching mountains, a sun and waves"
      >
        <g>
          <path fill="#97699f" d="M0 144 66 84l45 58 36-90 80 88 17-31 76 47v34H0z" />
          <path fill="#594476" d="m146 52 61 98-40-16-9-45-12 8z" />
          <path fill="#ffc9a7" d="m146 52-22 33 13-6 9 6 8-14 9 7z" />
          <path fill="#345a80" d="M0 150q55-13 117 1t111 0 92-4v43H0z" />
          <path fill="#368a99" d="M0 170q68-14 148-1t172-4v25H0z" />
        </g>
        <path id="skp" fill="none" d={`${MOUNTAINS}${SUN}${WAVES}`} />
        <path className="sk-line m" pathLength={1} d={MOUNTAINS} />
        <path className="sk-line wv" pathLength={1} d={WAVES} />
        <circle className="sunfill" cx={246} cy={44} r={15} style={{ fill: 'var(--acc)' }} />
        <path className="sk-line sun" pathLength={1} style={{ stroke: 'var(--acc)' }} d={SUN} />
        <g className="pen">
          <animateMotion ref={motion} dur="5s" begin="indefinite" fill="freeze" calcMode="linear">
            <mpath href="#skp" />
          </animateMotion>
          <g transform="rotate(35)">
            <path d="M0 0L-3.2-10H3.2Z" fill="#E8C9A0" />
            <path d="M0 0L-1.1-3.6H1.1Z" fill="#2B2B2B" />
            <rect x={-3.2} y={-34} width={6.4} height={24} fill="#F6C343" />
            <rect x={-3.2} y={-39} width={6.4} height={5} rx={1.2} fill="#E06C75" />
          </g>
        </g>
      </svg>
      <figcaption>
        <h3>Art</h3>
        <button className="redo" type="button" onClick={sketch.replay}>
          Sketch again
        </button>
      </figcaption>
    </Reveal>
  );
}
