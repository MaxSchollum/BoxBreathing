import { useNavigate } from 'react-router-dom';
import Slider from '../Components/Slider';

function HomePage() {
    let navigate = useNavigate();
    
    const handleStartClick = () => {
      navigate('/med');
    };
    
    return (
      <div className="home-container">
        <h1 className="heading">Good To Have You Back</h1>
        <p className="subheading">How long can you go?</p>
        <Slider />
        <button className="start-button" onClick={handleStartClick}>Start</button>
        <button className="settings-button">Settings</button>
      </div>
    );
  }

  export default HomePage