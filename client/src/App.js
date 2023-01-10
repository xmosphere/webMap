import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import Map from './pages/map';
import Data from './pages/data';
import PageAddUserMarker from './pages/addUserMarker';
import PageEditUserMarker from './pages/editUserMarker';
import PageListUserMarker from './pages/listUserMarkers';
import { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' exact element={<PageListUserMarker />} />
          <Route path='/userMarker' exact element={<PageListUserMarker />} />
          <Route path='/addUserMarkers' element={<PageAddUserMarker />} />
          <Route path='/editUserMarkers' element={<PageEditUserMarker />} />
          <Route path='/map' element={<Map />} />
          <Route path='/user/:id' element={<Data />} />
        </Routes>
    </Router>
  );
}

export default App;
