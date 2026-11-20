import { education, educationFocus } from "../data/education";
import { Reveal } from "./Reveal";
import { WanderingPlane } from "./Wanderers";

export function Education() {
  return (
    <section className="sec" id="education">
      <Reveal className="eh">
        <h2>
          Education
          <span className="hl"> and </span>
          Certifications
        </h2>
      </Reveal>
      <div className="edu-wrap">
        <Reveal as="ol" className="edu">
          {education.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <small>{item.meta}</small>
              {item.description && <p>{item.description}</p>}
            </li>
          ))}
          <WanderingPlane />
        </Reveal>

        <ul className="focus">
          {educationFocus.map((topic, i) => (
            <Reveal
              as="li"
              key={topic}
              className="from-right"
              delay={0.15 + i * 0.1}
            >
              {topic}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
