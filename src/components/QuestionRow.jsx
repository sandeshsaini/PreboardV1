import { CATEGORIES, DIFFICULTIES, STATUSES } from "../constants";

// Table ki ek row = ek question
// Props: question (object), onUpdate(id, field, value), onDelete(id)
function QuestionRow({ question, onUpdate, onDelete }) {
  const q = question;
  const isDone = q.status === "Completed";

  return (
    <div className="row">
      {/* Tick button: done <-> pending toggle */}
      <button
        className={"check" + (isDone ? " on" : "")}
        onClick={() => onUpdate(q.id, "status", isDone ? "Pending" : "Completed")}
        aria-label="Toggle complete"
      >
        {isDone ? "✓" : ""}
      </button>

      <select value={q.category} onChange={(e) => onUpdate(q.id, "category", e.target.value)}>
        {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
      </select>

      {/* Done hone par text pe line (strike) lag jati hai */}
      <span className={"t" + (isDone ? " done" : "")}>{q.title}</span>

      <select value={q.difficulty} onChange={(e) => onUpdate(q.id, "difficulty", e.target.value)}>
        {DIFFICULTIES.map((d) => <option key={d}>{d}</option>)}
      </select>

      <select value={q.status} onChange={(e) => onUpdate(q.id, "status", e.target.value)}>
        {STATUSES.map((s) => <option key={s}>{s}</option>)}
      </select>

      <button className="del" onClick={() => onDelete(q.id)} aria-label="Delete">
        &#10005;
      </button>
    </div>
  );
}

export default QuestionRow;
