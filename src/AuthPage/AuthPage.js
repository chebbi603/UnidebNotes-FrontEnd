import React from "react";
import "./authpage.css";
import "../fontstyle.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img from "../assets/image3.png";

function AuthPage() {
  return (
    <div className="auth-page">
      <Navbar navCount={0} navButton={0} />
      <div className="auth-container">
        <div className="auth-content">
          <div className="auth-title">
            <p className="h2-bold">Sign in</p>
            <p className="b1-reg">
              Please use your university’s email to access our website
            </p>
          </div>
          <div className="auth-form">
            <div className="auth-field">
              <p className="b1-bold">Email Address</p>
              <input
                type="email"
                placeholder="Enter your email address"
                className="auth-input b1-reg"
              ></input>
            </div>
            <div className="auth-field">
              <p className="b1-bold">Password</p>
              <input
                type="password"
                placeholder="Enter your password"
                className="auth-input b1-reg"
              ></input>
            </div>
          </div>
          <button className="auth-cta h6-bold">Log in</button>
          <a href="#" className="auth-subbutton b1-bold">
            Create an account instead
          </a>
        </div>
        <img src={img} />
      </div>
      <Footer />
    </div>
  );
}

export default AuthPage;
