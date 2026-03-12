import React, { useState } from "react";

export default function App() {
  const [count , setCount] = useState(0)

  const getScoreBarStyle = () => {
    // 1- Compute width
    const percentage = (count/10) *100
    const scoreWidth = `${percentage}%`;

    // 2- Compute color (optional)
    let scoreColor = `#f3bc47`;

    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };


  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" onChange={e=> setCount(e.target.value)} min="0" max="10"></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div> 
        </div>

          

      </div>
    </>
  );
}
