import { useEffect, useRef, useState, type ChangeEvent } from "react";

const INITIAL = [
  "// Confidence in every release",
  "test('portfolio works', ",
  "async ({ page }) => {",
  "  await page.goto('/');",
  "  const title = page.locator('h1');",
  "  await expect(title).toBeVisible();",
  "});",
  "",
  "// Your turn: type anything below",
].join("\n");

/** A tiny, non-functional editor: line numbers, a live Ln/Col readout, nothing is executed. */
export function CodeEditor() {
  const [value, setValue] = useState(INITIAL);
  const [caret, setCaret] = useState(0);
  const gutterRef = useRef<HTMLPreElement>(null);
  const areaRef = useRef<HTMLTextAreaElement>(null);

  const lineCount = value.split("\n").length;
  const gutter = Array.from({ length: lineCount }, (_, i) => i + 1).join("\n");
  const beforeCaret = value.slice(0, caret).split("\n");
  const line = beforeCaret.length;
  const col = beforeCaret[beforeCaret.length - 1].length + 1;

  const syncCaret = () => setCaret(areaRef.current?.selectionStart ?? 0);
  const syncScroll = () => {
    if (gutterRef.current && areaRef.current)
      gutterRef.current.scrollTop = areaRef.current.scrollTop;
  };

  useEffect(syncScroll, [value]);

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    setCaret(e.target.selectionStart);
  };

  return (
    <div className="ide">
      <div className="bar">
        <i />
        <i />
        <i />
        <span>quality.spec.ts</span>
      </div>
      <div className="code">
        <pre className="gut" ref={gutterRef} aria-hidden="true">
          {gutter}
        </pre>
        <textarea
          id="ed"
          ref={areaRef}
          value={value}
          wrap="off"
          spellCheck={false}
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
          aria-label="Code editor. Type anything."
          onChange={onChange}
          onKeyUp={syncCaret}
          onClick={syncCaret}
          onFocus={syncCaret}
          onScroll={syncScroll}
        />
      </div>
      <div className="st">
        <span>
          Ln {line}, Col {col}
        </span>
        <span>TypeScript</span>
      </div>
    </div>
  );
}
