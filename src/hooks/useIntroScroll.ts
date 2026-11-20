import { useEffect, type RefObject } from 'react';
import { useReducedMotion } from './useReducedMotion';

const clamp = (v: number) => Math.max(0, Math.min(1, v));

interface IntroRefs {
  track: RefObject<HTMLDivElement>;
  intro: RefObject<HTMLDivElement>;
  app: RefObject<HTMLDivElement>;
  hint: RefObject<HTMLDivElement>;
}

/**
 * Drives the scroll-in effect: the big tagline zooms past and fades out while the
 * app view fades in. Styles are written straight to the DOM so scrolling never
 * triggers a React re-render.
 */
export function useIntroScroll({ track, intro, app, hint }: IntroRefs): void {
  const still = useReducedMotion();

  useEffect(() => {
    const t = track.current;
    const i = intro.current;
    const a = app.current;
    const h = hint.current;
    if (!t || !i || !a || !h) return;

    const frame = () => {
      const span = t.offsetHeight - window.innerHeight;
      const p = span > 0 ? clamp(window.scrollY / span) : 1;
      const out = clamp(p / 0.5);
      const inn = clamp((p - 0.3) / 0.45);

      i.style.opacity = String(1 - out);
      a.style.opacity = String(inn);
      i.style.transform = still ? '' : `scale(${1 + out * 0.6})`;
      a.style.transform = still ? '' : `translateY(${(1 - inn) * 40}px) scale(${0.95 + 0.05 * inn})`;
      h.style.opacity = String(1 - clamp(p / 0.15));
      a.classList.toggle('live', inn > 0.6);
      i.style.visibility = out >= 1 ? 'hidden' : 'visible';
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        frame();
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', frame);
    frame();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', frame);
    };
  }, [track, intro, app, hint, still]);
}
