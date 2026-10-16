// Ek chhota stat card (number + description)
// Props: title, value, note
// Is component ko 4 baar reuse karenge - isi ko React me "reusable component" kehte hain
function StatCard({ title, value, note }) {
  return (
    <div className="card">
      <span>{title}</span>
      <div className="num">{value}</div>
      <div className="note">{note}</div>
    </div>
  );
}

export default StatCard;
