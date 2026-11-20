import { projectGroups } from "../data/projects";
import { Reveal } from "./Reveal";
// import { WanderingLaptop } from "./Wanderers";

export function Projects() {
  return (
    <section className="sec" id="projects">
      <Reveal as="h2">
        Project <span className="hl">Profile</span>
      </Reveal>{" "}
      {projectGroups.map((group) => (
        <div key={group.title}>
          <Reveal as="h3" className="pg">
            {group.title}
          </Reveal>
          <ul className="cards">
            {group.projects.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 0.1}>
                <article className="card">
                  <h4>{p.title}</h4>
                  <p>{p.description}</p>
                  {p.link && (
                    <a
                      className="go"
                      href={p.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {p.link.label}
                    </a>
                  )}
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      ))}
      {/* <WanderingLaptop /> */}
    </section>
  );
}
