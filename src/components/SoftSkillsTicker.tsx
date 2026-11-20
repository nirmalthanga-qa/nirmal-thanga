import { useState } from 'react';
import { softSkills } from '../data/soft';
import { Reveal } from './Reveal';

/** News-flash style ticker. The list is rendered twice so the CSS loop wraps seamlessly. */
export function SoftSkillsTicker() {
  const [paused, setPaused] = useState(false);

  return (
    <Reveal className={`ticker${paused ? ' paused' : ''}`}>
      <span className="ticker-label" id="ticker-label">
        Soft skills
      </span>
      <div className="ticker-view" role="region" aria-labelledby="ticker-label">
        <ul className="ticker-track">
          {[...softSkills, ...softSkills].map((skill, i) => (
            <li key={i} aria-hidden={i >= softSkills.length ? true : undefined}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <button className="ticker-btn" type="button" aria-pressed={paused} onClick={() => setPaused((p) => !p)}>
        {paused ? 'Play' : 'Pause'}
      </button>
    </Reveal>
  );
}
