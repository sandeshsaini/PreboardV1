// Upar wali bar: logo, theme button, date aur done count + mobile nav
// Props: doneCount (completed questions), onToggleTheme (dark/light badalne ka function)
function TopBar({ doneCount, onToggleTheme }) {
  // Aaj ki date nikalna
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div className="top">
        <span className="mlogo logo"><b>P</b>prepboard.</span>
        <span className="label crumb">
          Your practice &rarr; <b style={{ color: "var(--text)" }}>Overview</b>
        </span>
        <div>
          <button onClick={onToggleTheme} aria-label="Toggle dark mode">&#9790;</button>
          <span id="date">{today}</span>
          <span className="badge label"><b>{doneCount}</b>done</span>
        </div>
      </div>

      {/* Mobile navigation */}
      <nav className="mnav">
        <a href="#top">Overview</a>
        <a href="#qs">Question bank</a>
      </nav>
    </>
  );
}

export default TopBar;
