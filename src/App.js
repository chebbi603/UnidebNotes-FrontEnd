import logo from './logo.svg';
import './App.css';
import gsap from 'gsap';
import HomePage from './HomePage/Homepage';



function App() {
  const zoomLevel = Math.round(window.devicePixelRatio * 100); 
  console.log(zoomLevel)
  if (zoomLevel >= 225) {
    (document.documentElement.style).zoom = '0.9'; 
  }
  return (
    
    <div className="App">
      <HomePage/>
    </div>
  );
}

export default App;
