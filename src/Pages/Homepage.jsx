import { useNavigate } from 'react-router-dom';
import Slider from '../Components/Slider';


function HomePage() {
    let navigate = useNavigate();
    
    const handleStartClick = () => {
      navigate('/med');
    };
    
    return (
      <>
        <h1>Good To Have You Back</h1>

        <p>How long can you go?</p>
        <Slider />


        <button onClick={handleStartClick}>Start</button>
        
        <button>Settings</button>
        
      </>
    );
  }

  export default HomePage