import logo from './logo.svg';
import MapComponent from './Map.js';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='MapContainer'>
        <MapComponent />
      </div>
      <div className='MapController'>
        <h1>Test</h1>
      </div>
    </div>
  );
}
export default App;
