import { useState, useEffect } from "react";
import "./index.css";
import { KEY } from "./constants";

// Saare components import kar rahe hain
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import StatsGrid from "./components/StatsGrid";
import PulseCard from "./components/PulseCard";
import MachineCard from "./components/MachineCard";
import Filters from "./components/Filters";
import QuestionList from "./components/QuestionList";
import AddDialog from "./components/AddDialog";

// Browser ki localStorage se purana data padhna
function loadSaved() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || {};
  } catch (e) {
    return {}; // agar data kharab ho to khali object
  }
}

// App = parent component. Saari state yahin rehti hai,
// aur data props ke through child components ko jata hai
function App() {
  // useState(() => ...) sirf pehli baar chalta hai, isliye localStorage baar baar nahi padhta
  const [questions, setQuestions] = useState(() => loadSaved().questions || []);
  const [machine, setMachine] = useState(() => loadSaved().machine || "Not Started");

  // Search + filters + sort ek hi object me
  const [filters, setFilters] = useState({
    search: "",
    status: "",
    category: "",
    difficulty: "",
    sort: "new",
  });

  const [dialogOpen, setDialogOpen] = useState(false); // popup khula hai ya nahi
  const [theme, setTheme] = useState(""); // "" = system default, warna "light" / "dark"

  // Jab bhi questions ya machine change ho, localStorage me save kar do
  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify({ questions, machine }));
    } catch (e) {}
  }, [questions, machine]);

  // Theme change hone par <html> tag pe data-theme lagana (CSS isi se dark mode karta hai)
  useEffect(() => {
    if (theme) document.documentElement.dataset.theme = theme;
  }, [theme]);

  // ---------- Functions jo child components ko denge ----------

  // Dark/Light toggle
  function toggleTheme() {
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = theme ? theme === "dark" : systemDark; // abhi dark hai ya nahi
    setTheme(isDark ? "light" : "dark");
  }

  // Filters ki ek value badalna. { ...filters } purani values copy karta hai,
  // [name]: value sirf wahi field overwrite karta hai
  function changeFilter(name, value) {
    setFilters({ ...filters, [name]: value });
  }

  // Kisi ek question ka ek field (status/category/difficulty) badalna
  function updateQuestion(id, field, value) {
    setQuestions(questions.map((q) => (q.id === id ? { ...q, [field]: value } : q)));
  }

  function removeQuestion(id) {
    setQuestions(questions.filter((q) => q.id !== id));
  }

  // Popup se naya question aaya to sabse upar add karo
  function addQuestion(newQ) {
    setQuestions([newQ, ...questions]);
    setDialogOpen(false);
  }

  // ---------- Dashboard ke numbers ----------
  const done = questions.filter((q) => q.status === "Completed");
  const countDone = (cat) => done.filter((q) => q.category === cat).length;
  // percentage = (completed / total) * 100, total 0 ho to 0 (divide by zero se bachne ke liye)
  const pct = questions.length ? Math.round((done.length / questions.length) * 100) : 0;

  // ---------- Filter + Search + Sort ----------
  let shown = questions.filter(
    (q) =>
      q.title.toLowerCase().includes(filters.search.toLowerCase()) &&
      (!filters.status || q.status === filters.status) &&
      (!filters.category || q.category === filters.category) &&
      (!filters.difficulty || q.difficulty === filters.difficulty)
  );
  // newest first array me already hai; "old" me ulta kar dete hain
  if (filters.sort === "old") shown = [...shown].reverse();

  return (
    <>
      <Sidebar total={questions.length} />

      <main id="top">
        <TopBar doneCount={done.length} onToggleTheme={toggleTheme} />
        <Hero onAddClick={() => setDialogOpen(true)} />

        <StatsGrid
          total={questions.length}
          dsaDone={countDone("DSA")}
          gitDone={countDone("Git")}
          techDone={countDone("Technical")}
        />

        <section className="grid2">
          <PulseCard done={done.length} total={questions.length} pct={pct} />
          <MachineCard value={machine} onChange={setMachine} />
        </section>

        <div id="qs">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <div className="label eyebrow">Keep the momentum</div>
              <h2>Your questions<em>.</em></h2>
            </div>
            <span className="label"><b>{questions.length}</b> total</span>
          </div>

          <Filters filters={filters} onChange={changeFilter} />

          <QuestionList
            shown={shown}
            total={questions.length}
            onUpdate={updateQuestion}
            onDelete={removeQuestion}
          />
        </div>
      </main>

      <AddDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onAdd={addQuestion}
        questions={questions}
      />
    </>
  );
}

export default App;
