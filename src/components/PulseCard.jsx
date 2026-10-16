// Weekly pulse card: progress circle (ring) + text
// Props: done (completed count), total (total questions), pct (percentage)
function PulseCard({ done, total, pct }) {
  return (
    <div className="card pulse">
      <div>
        <div className="label">&#9679; Your weekly pulse</div>
        <h3>A little progress<br /><em>adds up.</em></h3>
        <div className="note">
          {total ? done + " of " + total + " complete" : "Add a question to get started."}
        </div>
      </div>

      {/* --p CSS variable se circle ka percentage control hota hai */}
      <div className="ring" style={{ "--p": pct }}>
        <div>
          <span><b>{pct}</b>%</span>complete
        </div>
      </div>
    </div>
  );
}

export default PulseCard;
