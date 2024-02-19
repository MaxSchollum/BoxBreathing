import { useContext } from 'react';
import TimeContext from '../Context/SecondsContext';

function Slider() {
  const {timing, updateTiming} = useContext(TimeContext);

  const handleChange = (event) => {
    updateTiming(parseInt(event.target.value));
  };

  return (
    <div>
      <input
        type="range"
        min={1}
        max={30}
        step={1}
        value={value}
        onChange={handleChange}
      />
      <p>{timing} Seconds </p>
    </div>
  );
}

export default Slider;
