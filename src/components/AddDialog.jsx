import { useState, useEffect, useRef } from "react";

// Ye popup form hai jisme naya question add karte hain
// Props: open (popup khula hai ya nahi), onClose (band karne ka function), onAdd (question save karne ka function), questions (duplicate check ke liye)
function AddDialog({ open, onClose, onAdd, questions }) {
  // useRef se <dialog> tag ko direct access milta hai (showModal/close ke liye)
  const dlgRef = useRef(null);

  // Form ke inputs ki state
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("Medium");
  const [status, setStatus] = useState("Pending");

  // Error messages ki state
  const [titleError, setTitleError] = useState("");
  const [catError, setCatError] = useState("");

  // Jab "open" change ho, tab dialog ko kholo ya band karo
  useEffect(() => {
    const dlg = dlgRef.current;
    if (open && !dlg.open) {
      resetForm(); // har baar form khali karke kholo
      dlg.showModal();
    }
    if (!open && dlg.open) {
      dlg.close();
    }
  }, [open]);

  // Form ko default values pe wapas lana
  function resetForm() {
    setTitle("");
    setCategory("");
    setDifficulty("Medium");
    setStatus("Pending");
    setTitleError("");
    setCatError("");
  }

  // Submit button dabane par ye chalega
  function handleSubmit(e) {
    e.preventDefault(); // page reload hone se rokta hai

    const cleanTitle = title.trim();
    let ok = true;

    // Validation 1: title kam se kam 3 characters ka ho
    if (cleanTitle.length < 3) {
      setTitleError("Enter a title (at least 3 characters).");
      ok = false;
    } else if (
      // Validation 2: same question dobara add na ho
      questions.some((q) => q.title.toLowerCase() === cleanTitle.toLowerCase())
    ) {
      setTitleError("This question is already added.");
      ok = false;
    } else {
      setTitleError("");
    }

    // Validation 3: category choose karna zaroori hai
    if (!category) {
      setCatError("Choose a category.");
      ok = false;
    } else {
      setCatError("");
    }

    if (!ok) return; // error hai to yahin ruk jao

    // Naya question object banake parent (App) ko bhej do
    onAdd({
      id: Date.now(), // unique id ke liye current time use kiya
      title: cleanTitle,
      category: category,
      difficulty: difficulty,
      status: status,
    });
  }

  return (
    // onClose: Esc dabane par bhi parent ko pata chal jaye
    <dialog ref={dlgRef} onClose={onClose}>
      <form onSubmit={handleSubmit} noValidate>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span className="plus">+</span>
          <button type="button" className="x" aria-label="Close" onClick={onClose}>
            &#10005;
          </button>
        </div>

        <div className="label">Add to your practice list</div>
        <h2 style={{ margin: 0, fontSize: "1.7rem" }}>Make it count.</h2>
        <p className="note" style={{ margin: 0 }}>Save a question to come back to this week.</p>

        {/* Question title input */}
        <label>
          <span>Question or topic <i className="req">*</i></span>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Find the longest substring"
            maxLength={120}
          />
          {/* character counter */}
          <span className="note" style={{ textAlign: "right" }}>{title.length}/120</span>
          <span className="error">{titleError}</span>
        </label>

        <div className="two">
          {/* Category dropdown */}
          <label>
            <span>Category <i className="req">*</i></span>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">Choose one</option>
              <option>DSA</option>
              <option>Git</option>
              <option>Technical</option>
            </select>
            <span className="error">{catError}</span>
          </label>

          {/* Difficulty ke 3 buttons (Easy / Medium / Hard) */}
          <div className="lbl">
            Difficulty
            <div className="seg">
              {["Easy", "Medium", "Hard"].map((d) => (
                <button
                  type="button"
                  key={d}
                  className={difficulty === d ? "on" : ""}
                  onClick={() => setDifficulty(d)}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Status dropdown */}
        <label>
          Status
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option>Pending</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>
        </label>

        <div className="foot">
          <span className="note"><i className="req">*</i> Required</span>
          <button className="add">Add question &rarr;</button>
        </div>
      </form>
    </dialog>
  );
}

export default AddDialog;
