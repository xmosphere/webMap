import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import Map from './pages/map';
import Data from './pages/data';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/map' element={<Map />} />
        <Route path='/data' element={<Data />} />
      </Routes>
    </Router>
  );
}

export default App;
