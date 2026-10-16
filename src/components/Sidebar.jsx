// Left side ka sidebar (mobile pe CSS se hide ho jata hai)
// Props: total (kitne questions hain)
function Sidebar({ total }) {
  return (
    <aside>
      <div className="logo"><b>P</b>prepboard.</div>
      <div className="label" style={{ marginBottom: 6 }}>Your workspace</div>
      <a href="#top">Overview</a>
      <a href="#qs">Question bank <span>{total}</span></a>
      <div className="card tip">
        <b style={{ color: "var(--text)" }}>One at a time.</b><br />
        Small, steady practice beats a perfect plan.
      </div>
    </aside>
  );
}

export default Sidebar;
