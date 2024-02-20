import React, { useState, useEffect, useContext } from 'react';
import pic from '../Assets/Meditation Pic.jpeg'
import TimeContext from '../Context/SecondsContext';

function Meditation() {
  const [stage, setStage] = useState(1);
  const {timing} = useContext(TimeContext)
  const seconds = timing*1000
  const durationSeconds = timing; // Assuming 'timing' is in seconds
  // const [remainingTime, setRemainingTime] = useState(timing)

  const dynamicStyleGrow = {
    transition: `transform ${durationSeconds}s cubic-bezier(0.4, 0, 0.2, 1)`, // Dynamic transition with custom timing function
    animation: `growImage ${durationSeconds}s forwards cubic-bezier(0.4, 0, 0.2, 1)`, // Dynamic animation with custom timing function
  };
  
  const dynamicStyleShrink = {
    transition: `transform ${durationSeconds}s cubic-bezier(0.4, 0, 0.2, 1)`, // Dynamic transition with custom timing function
    animation: `shrinkImage ${durationSeconds}s forwards cubic-bezier(0.4, 0, 0.2, 1)`, // Dynamic animation with custom timing function
  };
  

  const dynamicKeyframes = `
    @keyframes growImage {
      from { transform: scale(0.2); }
      to { transform: scale(1); }
    }
    
    @keyframes shrinkImage {
      from { transform: scale(1); }
      to { transform: scale(0.2); }
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

  // var countDown = () => {
  //   if (remainingTime > 0) {
  //     const timer = setTimeout(() => setRemainingTime(remainingTime - 1), 1000);
  //     return () => clearTimeout(timer);
  //   } else {
  //     // Reset remaining time when it reaches 0
  //     setRemainingTime(timing);
  // }
  // }

  // useEffect(() => {
  //   countDown(); // Call countDown function here
  // });

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
  }, [stage, seconds]);


  return (
    <>
      <style>{dynamicKeyframes}</style>
      <div className="container">
        <div className="text" style={{position: 'relative', zIndex: 1000}}>
          {textToDisplay()}</div>
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