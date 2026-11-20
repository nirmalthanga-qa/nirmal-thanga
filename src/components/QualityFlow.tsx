import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { stages } from "../data/stages";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { Reveal } from "./Reveal";

export function QualityFlow() {
  const still = useReducedMotion();
  const [current, setCurrent] = useState(0);
  const [animate, setAnimate] = useState(false);
  const tabsRef = useRef<HTMLDivElement>(null);
  const stage = stages[current];

  const go = (index: number) => {
    setCurrent(Math.max(0, Math.min(stages.length - 1, index)));
    setAnimate(true);
  };

  // On phones the tabs become a horizontal strip: keep the active tab centred.
  useEffect(() => {
    const tabs = tabsRef.current;
    if (!tabs || getComputedStyle(tabs).display !== "flex") return;
    const tab = tabs.children[current] as HTMLElement;
    tabs.scrollTo({
      left: tab.offsetLeft - (tabs.clientWidth - tab.clientWidth) / 2,
      behavior: still ? "auto" : "smooth",
    });
  }, [current, still]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const step =
      e.key === "ArrowDown" || e.key === "ArrowRight"
        ? 1
        : e.key === "ArrowUp" || e.key === "ArrowLeft"
          ? -1
          : 0;
    if (!step) return;
    e.preventDefault();
    const next = Math.max(0, Math.min(stages.length - 1, current + step));
    go(next);
    (tabsRef.current?.children[next] as HTMLElement | undefined)?.focus();
  };

  return (
    <section className="sec" id="skills">
      <Reveal as="h2">
        How do I perform <span className="acc">Quality Engineering?</span>
      </Reveal>
      <Reveal as="p" className="lead">
        From the first requirement to production support. Pick a stage to see
        what I do and what I hand over.
      </Reveal>
      <Reveal className="flow">
        <div
          className="tabs"
          id="tabs"
          ref={tabsRef}
          role="tablist"
          aria-label="Quality assurance stages"
          aria-orientation="vertical"
          onKeyDown={onKeyDown}
        >
          {stages.map((s, i) => (
            <button
              key={s.title}
              id={`tab${i}`}
              className={`tab${i < current ? " done" : ""}`}
              type="button"
              role="tab"
              aria-controls="panel"
              aria-selected={i === current}
              tabIndex={i === current ? 0 : -1}
              onClick={() => go(i)}
            >
              <b>{i + 1}</b>
              <span>{s.title}</span>
            </button>
          ))}
        </div>
        <div
          className="panel"
          id="panel"
          role="tabpanel"
          tabIndex={0}
          aria-labelledby={`tab${current}`}
        >
          <div className="prog">
            <i
              id="pg"
              style={{ width: `${((current + 1) / stages.length) * 100}%` }}
            />
          </div>
          <div
            id="pc"
            key={current}
            className={animate && !still ? "swap" : undefined}
          >
            <span className="n" id="pn">
              Stage {current + 1} of {stages.length}
            </span>
            <h3 id="pt">{stage.title}</h3>
            <p id="pd">{stage.description}</p>
            <h4>What I deliver</h4>
            <ul id="pl">
              {stage.outputs.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </div>
          <div className="pnav">
            <button
              className="btn"
              type="button"
              disabled={current === 0}
              onClick={() => go(current - 1)}
            >
              Back
            </button>
            <button
              className="btn p"
              type="button"
              disabled={current === stages.length - 1}
              onClick={() => go(current + 1)}
            >
              Next stage
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
