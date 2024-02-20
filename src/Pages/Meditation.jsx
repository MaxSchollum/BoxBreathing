import React, { useState, useEffect, useContext } from 'react';
import pic from '../Assets/Meditation Pic.jpeg'
import TimeContext from '../Context/SecondsContext';

function Meditation() {
  const [stage, setStage] = useState(1);
  const {timing} = useContext(TimeContext)
  const seconds = timing*1000
  const durationSeconds = timing; // Assuming 'timing' is in seconds

  const dynamicStyleGrow = {
    transition: `transform ${durationSeconds}s ease`, // Dynamic transition duration
    animation: `growImage ${durationSeconds}s forwards`, // Dynamic animation for growing
  };

  const dynamicStyleShrink = {
    transition: `transform ${durationSeconds}s ease`, // Dynamic transition duration
    animation: `shrinkImage ${durationSeconds}s forwards`, // Dynamic animation for shrinking
  } 

  const dynamicKeyframes = `
    @keyframes growImage {
      from { transform: scale(0.5); }
      to { transform: scale(1); }
    }
    
    @keyframes shrinkImage {
      from { transform: scale(1); }
      to { transform: scale(0.5); }
    }
  `;

  var textToDisplay = () => {
    if (stage === 1) {
      return "Inhale"
    } else if (stage === 2) {
      return "Hold"
    } else if (stage === 3) {
      return "Exhale"
    } else if (stage === 4) {
      return "Hold"
    }
  }  



  useEffect(() => {
    let timer1;
    let timer2;
    let timer3;
    let timer4;

    if (stage === 1) {
      timer1 = setTimeout(() => setStage(2), seconds); // time for growing
    } else if (stage === 2) {
      timer2 = setTimeout(() => setStage(3), seconds); // time at maximum size
    } else if (stage === 3) {
      timer3 = setTimeout(() => setStage(4), seconds); // time for shrinking
    } else if (stage === 4) {
      timer4 = setTimeout(() => setStage(1), seconds); // time at minimal size before restarting
    }

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [stage]);

  return (
    <>
      <style>{dynamicKeyframes}</style>
      <div className="container">
        <div className="text" style={{backgroundColor: "red", color: "white", position: 'relative', zIndex: 1000}}>
          {textToDisplay()} {stage}, {timing}</div>
        <img
          src={pic}
          alt="Meditation"
          className={`image stage-${stage}`}
          style={stage === 1 ? dynamicStyleGrow : stage === 3 ? dynamicStyleShrink : null}
        />
      </div>
    </>
  );
}

export default Meditation;
