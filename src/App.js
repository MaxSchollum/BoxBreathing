import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './Components/Header';
import Meditation from './Pages/Meditation';
import HomePage from './Pages/Homepage';

function App() {

  return (
    <Router>
    <div>
        <Header />
            <div className="Container">
              <Routes>
                <Route exact path="/" element={<HomePage />} />
                  <Route path="/med" element={<Meditation />}/>
              </Routes>
            </div>
    </div>
    </Router>
  );
}

export default App;

