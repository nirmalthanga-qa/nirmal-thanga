import { aboutParagraphs, stats } from "../data/about";
import { CountUp } from "./CountUp";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section className="sec" id="about">
      <Reveal as="h2">
        <span className="hl">About</span> me
      </Reveal>{" "}
      <div className="about">
        <div>
          {aboutParagraphs.map((text, i) => (
            <Reveal key={i} as="p" delay={i * 0.1}>
              {text}
            </Reveal>
          ))}
        </div>
        <div className="stats">
          {stats.map((s, i) => (
            <Reveal key={s.label} className="stat" delay={i * 0.12}>
              <b>
                <CountUp to={s.value} />
                {s.suffix}
              </b>
              <span>{s.label}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
