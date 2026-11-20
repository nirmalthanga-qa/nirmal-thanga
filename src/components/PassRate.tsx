import { useEffect, useRef } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

const TESTS = 1248;
const COVERAGE = 92;
const RUN_MS = 2600;
const CYCLE_MS = 7600;

/** A small "CI run" strip: the bar fills, the counters tick up, then it settles on all green and runs again. */
export function PassRate() {
  const still = useReducedMotion();
  const root = useRef<HTMLDivElement>(null);
  const fill = useRef<HTMLElement>(null);
  const tests = useRef<HTMLElement>(null);
  const coverage = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    const bar = fill.current;
    const t = tests.current;
    const c = coverage.current;
    if (!el || !bar || !t || !c) return;

    const draw = (p: number) => {
      bar.style.transform = `scaleX(${p})`;
      t.textContent = Math.round(TESTS * p).toLocaleString('en-US');
      c.textContent = `${Math.round(COVERAGE * p)}%`;
      el.classList.toggle('done', p >= 1);
    };

    if (still) {
      draw(1);
      return;
    }

    const app = el.closest('.app');
    let raf = 0;
    let start = 0;

    const tick = (now: number) => {
      if (!start) start = now;
      const k = Math.min(1, ((now - start) % CYCLE_MS) / RUN_MS);
      draw(1 - Math.pow(1 - k, 3));
      raf = requestAnimationFrame(tick);
    };
    const run = () => {
      if (raf) return;
      start = 0;
      raf = requestAnimationFrame(tick);
    };
    const halt = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };
    const sync = () => (!app || app.classList.contains('live') ? run() : halt());

    draw(0);
    const mo = new MutationObserver(sync);
    if (app) mo.observe(app, { attributes: true, attributeFilter: ['class'] });
    sync();
    return () => {
      mo.disconnect();
      halt();
    };
  }, [still]);

  return (
    <div className="pr" ref={root} role="img" aria-label="Sample CI run: all tests passing, zero flaky tests">
      <div className="pr-head">
        <i className="pr-dot" />
        <span className="pr-run">Running…</span>
        <span className="pr-ok">✓ All passed</span>
        <span className="pr-tag">sample CI run</span>
      </div>
      <div className="pr-bar">
        <i className="pr-fill" ref={fill} />
      </div>
      <div className="pr-stats">
        <div>
          <b ref={tests}>0</b>
          <span>tests</span>
        </div>
        <div>
          <b ref={coverage}>0%</b>
          <span>coverage</span>
        </div>
        <div>
          <b className="zero">0</b>
          <span>flaky</span>
        </div>
      </div>
    </div>
  );
}
