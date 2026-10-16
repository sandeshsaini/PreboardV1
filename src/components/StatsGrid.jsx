import StatCard from "./StatCard";

// 4 stat cards ki grid
// Props: total (sab questions), dsaDone, gitDone, techDone (category-wise completed count)
function StatsGrid({ total, dsaDone, gitDone, techDone }) {
  return (
    <section className="grid4">
      <StatCard title="In your question bank" value={total} note="Everything you want to revisit" />
      <StatCard title="DSA problems solved" value={dsaDone} note="Marked complete in DSA" />
      <StatCard title="Git & Github questions" value={gitDone} note="Marked complete in Git & Github" />
      <StatCard title="Technical questions" value={techDone} note="Marked complete in Technical" />
    </section>
  );
}

export default StatsGrid;
