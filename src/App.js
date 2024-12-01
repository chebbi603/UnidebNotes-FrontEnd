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
  return (
    <ReactLenis root ref={el}>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<AuthPage authType={1} />} />
          <Route path="/register" element={<AuthPage authType={0} />} />
        </Routes>
      </div>
    </ReactLenis>
  );
}

export default App;
