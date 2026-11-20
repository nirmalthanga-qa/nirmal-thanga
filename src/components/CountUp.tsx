import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface CountUpProps {
  to: number;
  durationMs?: number;
}

/** Counts from 0 to `to` once, when the number first scrolls into view. */
export function CountUp({ to, durationMs = 1100 }: CountUpProps) {
  const still = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(still ? to : 0);

  useEffect(() => {
    if (still) {
      setValue(to);
      return;
    }
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const step = (now: number) => {
          const k = Math.min(1, (now - start) / durationMs);
          setValue(Math.round(to * (1 - Math.pow(1 - k, 3))));
          if (k < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, durationMs, still]);

  return <span ref={ref}>{value}</span>;
}
