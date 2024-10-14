import logo from "./logo.svg";
import "./App.css";
import gsap from "gsap";
import HomePage from "./HomePage/Homepage";
import AuthPage from "./AuthPage/AuthPage";
import { Routes, Route } from "react-router-dom";
import { useRef } from "react";
import ReactLenis from "lenis/react";

function App() {
  const zoomLevel = Math.round(window.devicePixelRatio * 100);
  console.log(zoomLevel);

  const el = useRef();
  document.documentElement.style.zoom = "0.9";
  return (
    <ReactLenis root ref={el}>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<AuthPage />} />
        </Routes>
      </div>
    </ReactLenis>
  );
}

export default App;
