// Heading wala section + "Add a question" button
// Props: onAddClick (button dabane par popup kholne ka function)
function Hero({ onAddClick }) {
  return (
    <div className="hero">
      <div>
        <div className="label eyebrow">Weekly interview preparation</div>
        <h1>Your prep, <em>in progress.</em></h1>
        <p>A clear place to keep your practice moving, one good question at a time.</p>
      </div>
      <button className="add" onClick={onAddClick}>+ Add a question</button>
    </div>
  );
}

export default Hero;
