import QuestionRow from "./QuestionRow";

// Poori table: heading row + saare questions
// Props: shown (filter ke baad wale questions), total (kul questions), onUpdate, onDelete
function QuestionList({ shown, total, onUpdate, onDelete }) {
  return (
    <div className="card table">
      <div className="row head label">
        <span></span><span>Type</span><span>Question</span><span>Difficulty</span><span>Status</span><span></span>
      </div>

      <div>
        {/* Case 1: koi question hi nahi hai */}
        {total === 0 && (
          <div className="empty">
            <b>No questions yet</b>Click "Add a question" to begin.
          </div>
        )}

        {/* Case 2: questions hain par filter se kuch match nahi hua */}
        {total > 0 && shown.length === 0 && (
          <div className="empty">
            <b>No matching questions</b>Try a different search or filter.
          </div>
        )}

        {/* Case 3: map() har question ke liye ek QuestionRow banata hai */}
        {/* key unique honi chahiye - React ko list track karne ke liye chahiye */}
        {shown.map((q) => (
          <QuestionRow key={q.id} question={q} onUpdate={onUpdate} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}

export default QuestionList;
