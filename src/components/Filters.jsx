import { CATEGORIES, DIFFICULTIES, STATUSES } from "../constants";

// Search box + 4 dropdowns (status, category, difficulty, sort)
// Props: filters (object jisme saari values hain), onChange(name, value) (value badalne ka function)
function Filters({ filters, onChange }) {
  return (
    <div className="filters card" style={{ padding: 12 }}>
      <input
        type="search"
        value={filters.search}
        onChange={(e) => onChange("search", e.target.value)}
        placeholder="Search your questions..."
        aria-label="Search"
      />

      <select value={filters.status} onChange={(e) => onChange("status", e.target.value)} aria-label="Status">
        <option value="">Status: All</option>
        {STATUSES.map((s) => <option key={s}>{s}</option>)}
      </select>

      <select value={filters.category} onChange={(e) => onChange("category", e.target.value)} aria-label="Category">
        <option value="">Category: All</option>
        {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
      </select>

      <select value={filters.difficulty} onChange={(e) => onChange("difficulty", e.target.value)} aria-label="Difficulty">
        <option value="">Difficulty: All</option>
        {DIFFICULTIES.map((d) => <option key={d}>{d}</option>)}
      </select>

      <select value={filters.sort} onChange={(e) => onChange("sort", e.target.value)} aria-label="Sort">
        <option value="new">Sort: Newest</option>
        <option value="old">Sort: Oldest</option>
      </select>
    </div>
  );
}

export default Filters;
