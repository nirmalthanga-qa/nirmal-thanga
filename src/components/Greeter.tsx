import { useEffect, useRef } from 'react';

/** Illustration that slides in from the right and waves hello when it scrolls into view. */
export function Greeter() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in');
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="hi" ref={ref}>
      <div className="hi-bubble" aria-hidden="true">
        Hi, I’m Nirmal!
      </div>
      <svg viewBox="0 0 240 240" role="img" aria-label="Illustration of Nirmal waving hello">
        <g className="hi-body">
          {/* resting arm and torso */}
          <path d="M40 160Q22 200 30 240L54 240Q56 200 58 168Z" fill="#E8690E" />
          <path d="M30 240V188Q30 150 72 142L128 142Q170 150 170 188V240Z" fill="var(--acc)" />
          {/* neck and collar */}
          <path d="M88 112h24v34q-12 10-24 0z" fill="#C98F63" />
          <path d="M84 143L100 166L116 143Z" fill="#E0AC82" />
          {/* head */}
          <circle cx="68" cy="88" r="7" fill="#D39A6E" />
          <circle cx="132" cy="88" r="7" fill="#D39A6E" />
          <ellipse cx="100" cy="86" rx="32" ry="36" fill="#E0AC82" />
          <path d="M67 84C62 44 90 36 104 38C128 38 140 56 133 84C128 66 118 58 100 58C84 58 72 66 67 84Z" fill="#4A3226" />
          <path d="M80 74q8-5 15-1M105 73q8-4 15 1" stroke="#4A3226" strokeWidth="3" fill="none" strokeLinecap="round" />
          <g className="hi-eyes">
            <circle cx="88" cy="85" r="3" fill="#1D1F22" />
            <circle cx="112" cy="85" r="3" fill="#1D1F22" />
          </g>
          <path d="M100 90q-3 8 1 10" stroke="#B87C52" strokeWidth="2.2" fill="none" strokeLinecap="round" />
          <path d="M88 105q12 11 24 0" stroke="#8A4A2B" strokeWidth="3" fill="none" strokeLinecap="round" />
          {/* waving arm: the forearm and hand rotate around the elbow */}
          <path d="M156 168L196 150" stroke="var(--acc)" strokeWidth="26" strokeLinecap="round" />
          <g className="hi-fore">
            <path d="M196 150L198 118" stroke="var(--acc)" strokeWidth="24" strokeLinecap="round" />
            <path d="M198 120L199 92" stroke="#E0AC82" strokeWidth="18" strokeLinecap="round" />
            <ellipse cx="199" cy="80" rx="12" ry="14" fill="#E0AC82" />
            <ellipse cx="187" cy="84" rx="4.5" ry="8" fill="#E0AC82" transform="rotate(-25 187 84)" />
            <path d="M192 74v-9M199 72v-11M206 74v-9" stroke="#E0AC82" strokeWidth="5" strokeLinecap="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}
