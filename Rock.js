// ...existing code...
import React, { useState } from 'react'
import './Rock.css'

const Rock = () => {
  const [selected, setSelected] = useState(null);
  const [system, setSystem] = useState(null);
  const [outcome, setOutcome] = useState(null);
  const element = ['✊', '✌️', '✋'];

  const decideOutcome = (user, sys) => {
    if (user === sys) return 'tie';
    if (
      (user === '✊' && sys === '✌️') ||
      (user === '✌️' && sys === '✋') ||
      (user === '✋' && sys === '✊')
    ) return 'win';
    return 'lose';
  };

  const isAccordionItemSelected = (item) => {
    setSelected(item);
    const randomIndex = Math.floor(Math.random() * element.length);
    const sysChoice = element[randomIndex];
    setSystem(sysChoice);
    setOutcome(decideOutcome(item, sysChoice));
    console.log('selected', item, 'system', sysChoice);
  };

  return (
    <div className="rock-container">
        <h1>Select one</h1>
      <h1 className="title">Rock • Paper • Scissors</h1>

      <div className="choices" role="group" aria-label="choices">
        {element.map((e) => (
          <button
            key={e}
            onClick={() => isAccordionItemSelected(e)}
            className={`choice-btn ${selected === e ? 'selected' : ''}`}
            aria-pressed={selected === e}
          >
            <span className="emoji">{e}</span>
          </button>
        ))}
      </div>

      <div className="status">
        {selected && <div className="status-item">You: <strong>{selected}</strong></div>}
        {system && <div className="status-item">System: <strong>{system}</strong></div>}
      </div>

      <div className="outcome">
        {outcome === 'tie' && <div className="outcome-box tie">Tie!</div>}
        {outcome === 'win' && <div className="outcome-box win">You win!</div>}
        {outcome === 'lose' && <div className="outcome-box lose">You lose!</div>}
      </div>
      {outcome && (
        <button className="reset-btn" onClick={() => {
          setSelected(null);
          setSystem(null);
          setOutcome(null);
        }}>Play Again</button>
      )}
    </div>
  );
};

export default Rock
// ...existing code...