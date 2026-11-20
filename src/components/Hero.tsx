import { useRef } from "react";
import { useIntroScroll } from "../hooks/useIntroScroll";
import { RoleRoller } from "./RoleRoller";
import { CodeEditor } from "./CodeEditor";
import { HeroBug } from "./HeroBug";
import { PassRate } from "./PassRate";
import { TestCards } from "./TestCards";

const RESUME_URL = "/nirmal-kumar-resume.pdf";

export function Hero() {
  const track = useRef<HTMLDivElement>(null);
  const intro = useRef<HTMLDivElement>(null);
  const app = useRef<HTMLDivElement>(null);
  const hint = useRef<HTMLDivElement>(null);

  useIntroScroll({ track, intro, app, hint });

  return (
    <div className="track" ref={track}>
      <div className="stage">
        <div className="intro" ref={intro}>
          <h1>
            Leveraging <span>Automation and AI</span> to Drive Quality.
          </h1>
          <div className="hint" ref={hint}>
            Scroll to enter
          </div>
        </div>
        <div className="app" ref={app}>
          <div>
            <RoleRoller />
            {/* <p className="sub">
              Responsible for end-to-end quality that helps teams ship with
              confidence.
            </p> */}
            <div className="btns">
              <a className="btn p" href="#projects">
                View my projects
              </a>
              <a className="btn" href={RESUME_URL} download>
                Download resume ↓
              </a>
            </div>
            <PassRate />
          </div>
          <div className="ide-wrap">
            <CodeEditor />
            <TestCards />
          </div>
          <HeroBug />
        </div>
      </div>
    </div>
  );
}
