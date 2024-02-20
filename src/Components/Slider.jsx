import { useContext, useState } from 'react';
import TimeContext from '../Context/SecondsContext';

function Slider() {
  const [Time, setTime] = useState(4)
  const {updateTiming} = useContext(TimeContext)

  const handleChange = (event) => {
    const newTime = parseInt(event.target.value);
    setTime(newTime);
    updateTiming(newTime)
  };

  return (
    <div className="slider-container">
      <input
        type="range"
        min={1}
        max={30}
        step={1}
        value={Time}
        onChange={handleChange}
        className="slider"
      />
      <p className='text'>{Time} Seconds </p>
    </div>
  );
}

export default Slider;
