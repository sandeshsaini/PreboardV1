import { MACHINE_STATUSES } from "../constants";

// Dark card jisme machine coding ka status select karte hain
// Props: value (current status), onChange (status badalne ka function)
function MachineCard({ value, onChange }) {
  return (
    <div className="card dark">
      <div className="label">Machine coding</div>
      <h3>Practice with <em>intention.</em></h3>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Machine coding status"
      >
        {MACHINE_STATUSES.map((s) => <option key={s}>{s}</option>)}
      </select>
    </div>
  );
}

export default MachineCard;
