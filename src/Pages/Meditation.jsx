import React, { useState, useEffect, useContext } from 'react';
import pic from '../Assets/Meditation Pic.png'
import TimeContext from '../Context/SecondsContext';
import gongSound1 from '../Assets/Bell 1 Cut.mp3'
import gongSound2 from '../Assets/Bell 2 Cut.mp3'

function Meditation() {
  const [stage, setStage] = useState(1);
  const {timing} = useContext(TimeContext)
  const seconds = timing*1000
  const durationSeconds = timing;

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

  const [playSound1, setPlaySound1] = useState(false)
  const [playSound2, setPlaySound2] = useState(false)
  const gong1 = new Audio(gongSound1)
  const gong2 = new Audio(gongSound2)

  useEffect(() => {
    if (stage === 1) {
      gong1.play();
    } else if (stage === 2) {
      gong1.pause();
      gong1.currentTime = 0;
    } else if (stage === 3) {
      gong2.play();
    } else if (stage === 4) {
      gong2.pause();
      gong2.currentTime = 0
    }
  }, [stage]);

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
        <div className="breathetext" style={{position: 'relative', zIndex: 1000}}>
          {textToDisplay()}
        </div>
        <div className='med-img'>
          <img
            src={pic}
            alt="Meditation"
            className={`image stage-${stage}`}
            style={stage === 1 ? dynamicStyleGrow : stage === 3 ? dynamicStyleShrink : null}
          />
        </div>
      </div>
    </>
  );
}

export default Meditation;