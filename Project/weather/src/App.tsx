import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Forecast from './components/Forecast';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';

const App = () => {
    return (
     
        <Router>
            <Routes>
                <Route path="/" element={<Home  />} />
                <Route path="/weather/:city" element={<Forecast />} />
            </Routes>
        </Router>
      
    );
};

export default App;