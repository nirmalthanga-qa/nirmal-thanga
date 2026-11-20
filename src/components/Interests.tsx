import { ArtSketch } from "./ArtSketch";
import { CarSketch } from "./CarSketch";
import { Reveal } from "./Reveal";

export function Interests() {
  return (
    <section className="sec" id="interests">
      <Reveal as="h2">
        <span className="hl">My</span> Interests
      </Reveal>{" "}
      <Reveal as="p" className="st-t wide">
        Outside quality engineering, I enjoy exploring the worlds of Art and
        Automotive. Art gives me an outlet for creativity and self-expression,
        while my passion for cars goes beyond appreciating their engineering and
        design — I love driving and going on road trips, discovering new places,
        and experiencing the journey along the way. With a background in
        Mechanical Engineering, my interest in cars comes naturally. Both
        passions reflect my appreciation for thoughtful design, attention to
        detail, creativity, and the beauty of understanding how things work.
        {/* {" "} */}
        {/* <a
          className="personal-website-link"
          href="https://www.nirmal-thanga.com"
          target="_blank"
          rel="noreferrer"
        >
          Click here for Personal Website
        </a> */}
        {/* . */}
      </Reveal>
      <div className="ints">
        <ArtSketch />
        <CarSketch />
      </div>
    </section>
  );
}
