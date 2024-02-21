import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Components/Header';
import Meditation from './Pages/Meditation';
import HomePage from './Pages/Homepage';
import { TimeProvider } from './Context/SecondsContext';

function App() {

  return (
    <TimeProvider>
    <Router>
    <div className="container">
        <Header />
            <div >
              <Routes>
                <Route exact path="/" element={<HomePage />} />
                  <Route path="/med" element={<Meditation />}/>
              </Routes>
            </div>
    </div>
    </Router>
    </TimeProvider>
  );
}

export default App;

