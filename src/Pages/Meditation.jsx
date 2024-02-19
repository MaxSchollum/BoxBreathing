import React, { useState, useEffect } from 'react';
import pic from '../Assets/Meditation Pic.jpeg'

function Meditation() {
  const [stage, setStage] = useState(1);

  useEffect(() => {
    let timer1;
    let timer2;
    let timer3;
    let timer4;

    if (stage === 1) {
      timer1 = setTimeout(() => setStage(2), 5000); // time for growing
    } else if (stage === 2) {
      timer2 = setTimeout(() => setStage(3), 5000); // time at maximum size
    } else if (stage === 3) {
      timer3 = setTimeout(() => setStage(4), 5000); // time for shrinking
    } else if (stage === 4) {
      timer4 = setTimeout(() => setStage(1), 5000); // time at minimal size before restarting
    }

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [stage]);

  return (
    <div className="container">
      <div className="text" style={{backgroundColor: "red", color: "white", position: 'relative', zIndex: 1000}}>Wooooo {stage}</div>
      <img src={pic} alt="Meditation" className={`image stage-${stage}`}/>
    </div>
  );
}

export default Meditation;
