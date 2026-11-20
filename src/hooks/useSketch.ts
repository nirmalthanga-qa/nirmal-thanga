import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

/**
 * Starts a sketch animation the first time the SVG is half visible, and lets the
 * caller replay it. The SVG should use `key={run}` so a replay remounts it and the
 * CSS animations start from the beginning. With reduced motion the finished
 * drawing is shown and nothing animates.
 */
export function useSketch(onStart?: () => void) {
  const still = useReducedMotion();
  const ref = useRef<SVGSVGElement>(null);
  const [run, setRun] = useState(0);

  useEffect(() => {
    if (still) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRun((r) => r || 1);
          io.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [still]);

  useEffect(() => {
    if (run > 0 && !still) onStart?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [run, still]);

  const className = `sks${still ? ' static' : run > 0 ? ' draw' : ''}`;
  const replay = () => {
    if (!still) setRun((r) => r + 1);
  };

  return { ref, run, className, replay };
}
