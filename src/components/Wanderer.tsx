import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

const MESSAGE_MS = 2400;

interface WandererProps {
  /** Accessible name of the tap target. */
  label: string;
  /** Names the figure for styling: the wrapper gets the class `w-<kind>`. */
  kind: string;
  /** "rotate" turns the figure to face where it is heading (top-down); "flip" mirrors it. */
  facing: 'rotate' | 'flip';
  /** Text shown above the figure when it is tapped; receives how many times it has been tapped. */
  message: (taps: number) => string;
  /** Flatten on tap and come back in from an edge afterwards. */
  squash?: boolean;
  tone?: 'ink' | 'acc' | 'ok';
  /** Width and height of the tap target, in px. */
  size?: number;
  /** Width and height of the drawing, in px. */
  iconSize?: number;
  /** Walking speed in px per second. */
  speed?: number;
  /** Sit in the page flow instead of being pinned to the bottom of the nearest positioned parent. */
  inline?: boolean;
  /** Draw a dotted ground line under the lane. */
  ground?: boolean;
  children: ReactNode;
}

/**
 * A little figure that wanders back and forth along a lane. It only moves while its lane is on
 * screen (or, inside the hero, while the hero's app view is showing). Tapping it shows `message`.
 */
export function Wanderer({
  label,
  kind,
  facing,
  message,
  squash = false,
  tone = 'ink',
  size = 44,
  iconSize = 28,
  speed = 46,
  inline = false,
  ground = false,
  children,
}: WandererProps) {
  const still = useReducedMotion();
  const lane = useRef<HTMLDivElement>(null);
  const wrap = useRef<HTMLDivElement>(null);
  const bubble = useRef<HTMLSpanElement>(null);
  const api = useRef({ respawn: () => {}, nudge: (_half: number) => {} });
  const busy = useRef(false);
  const taps = useRef(0);
  const timer = useRef(0);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const box = lane.current;
    const el = wrap.current;
    if (!box || !el) return;

    const room = () => Math.max(0, box.clientWidth - size);
    let x = room() * 0.18;
    let target = x;
    let dir = 1;
    let wait = 0;
    let last = 0;
    let raf = 0;

    const place = () => {
      el.style.transform = `translate3d(${x}px,0,0)`;
    };
    const face = () => el.setAttribute('data-dir', dir > 0 ? 'r' : 'l');
    const pick = () => {
      const w = room();
      let t = Math.random() * w;
      for (let n = 0; n < 6 && Math.abs(t - x) < 90 && w > 180; n++) t = Math.random() * w;
      target = t;
      dir = t >= x ? 1 : -1;
      face();
    };

    place();
    face();
    api.current = {
      respawn: () => {
        x = Math.random() < 0.5 ? 0 : room();
        wait = 0.4;
        pick();
        place();
      },
      // keep the label inside the lane when the figure is near an edge
      nudge: (half) => {
        const lo = Math.max(0, half + 4 - size / 2);
        const hi = Math.max(lo, room() + size / 2 - half - 4);
        x = Math.min(Math.max(x, lo), hi);
        place();
      },
    };
    if (still) return;

    pick();
    const tick = (now: number) => {
      if (!last) last = now;
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (!busy.current) {
        if (wait > 0) {
          wait -= dt;
          el.classList.remove('walk');
        } else {
          const step = speed * dt * dir;
          if ((dir > 0 && x + step >= target) || (dir < 0 && x + step <= target)) {
            x = target;
            wait = 0.8 + Math.random() * 1.8;
            pick();
          } else {
            x += step;
            el.classList.add('walk');
          }
          place();
        }
      }
      raf = requestAnimationFrame(tick);
    };

    const run = () => {
      if (raf) return;
      last = 0;
      raf = requestAnimationFrame(tick);
    };
    const halt = () => {
      cancelAnimationFrame(raf);
      raf = 0;
      el.classList.remove('walk');
    };

    // inside the hero the app view fades in late, so follow its "live" class; elsewhere follow visibility
    const app = box.closest('.app');
    let mo: MutationObserver | undefined;
    let io: IntersectionObserver | undefined;
    if (app) {
      const sync = () => (app.classList.contains('live') ? run() : halt());
      mo = new MutationObserver(sync);
      mo.observe(app, { attributes: true, attributeFilter: ['class'] });
      sync();
    } else {
      io = new IntersectionObserver(([entry]) => (entry.isIntersecting ? run() : halt()));
      io.observe(box);
    }

    const onResize = () => {
      x = Math.min(x, room());
      place();
      pick();
    };
    window.addEventListener('resize', onResize);
    return () => {
      mo?.disconnect();
      io?.disconnect();
      window.removeEventListener('resize', onResize);
      halt();
    };
  }, [still, size, speed]);

  useEffect(() => {
    if (!msg) return;
    api.current.nudge((bubble.current?.offsetWidth ?? 120) / 2);
  }, [msg]);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const tap = () => {
    if (busy.current) return;
    busy.current = true;
    wrap.current?.classList.remove('walk');
    taps.current += 1;
    setMsg(message(taps.current));
    timer.current = window.setTimeout(() => {
      if (squash) api.current.respawn();
      busy.current = false;
      setMsg('');
    }, MESSAGE_MS);
  };

  const style = { '--w-size': `${size}px`, '--w-in': `${iconSize}px` } as CSSProperties;
  const laneClass = `w-lane${inline ? ' inline' : ''}${ground ? ' ground' : ''}`;
  const hit = msg ? (squash ? ' squashed' : ' hello') : '';

  return (
    <div className={laneClass} ref={lane} style={style}>
      <div className={`wander w-${kind} face-${facing}${hit}`} ref={wrap} data-dir="r">
        <button className="w-btn" type="button" aria-label={label} onClick={tap}>
          <span className="w-in">{children}</span>
        </button>
        <span className={`w-msg tone-${tone}${msg ? ' on' : ''}`} role="status" ref={bubble}>
          {msg}
        </span>
      </div>
    </div>
  );
}
