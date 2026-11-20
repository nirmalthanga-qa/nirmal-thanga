/** Decorative test-result cards that drift up and fade in the space above and below the editor. */
export function TestCards() {
  return (
    <div className="tc-layer" aria-hidden="true">
      <div className="tc top a">
        <span className="ok">✓</span> login.spec.ts <em>142ms</em>
      </div>
      <div className="tc top b">
        <span className="ok">✓</span> a11y: 0 violations
      </div>
      <div className="tc bot a">
        <span className="ok">✓</span> api/orders <em>98ms</em>
      </div>
      <div className="tc bot b flaky">
        <span className="s s1">
          <span className="bad">✗</span> checkout.spec.ts <em>failed</em>
        </span>
        <span className="s s2">
          <span className="warn">↻</span> retrying…
        </span>
        <span className="s s3">
          <span className="ok">✓</span> checkout.spec.ts <em>168ms</em>
        </span>
      </div>
    </div>
  );
}
