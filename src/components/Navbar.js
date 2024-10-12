import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
import "../fontstyle.css"
import navbarlogo from "../assets/notes-logo-nav.svg"


const Navbar = ({ navCount }) => {
    return (
      <nav className="navbar">
        <div className="nav-container">
        <div className="navbar__logo">
          <img
            src={navbarlogo} 
            alt="Unideb Notes Logo"
            className="navbar__logo-image"
          />
        </div>
  
        <ul className="navbar__links">
          <li>
            <a
              href="/"
              className={` navbar__link ${navCount === 1 ? "b1-bold active" : "b1-reg"}`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className={` navbar__link ${navCount === 2 ? "b1-bold active" : "b1-reg"}`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/library"
              className={` navbar__link ${navCount === 3 ? "b1-bold active" : "b1-reg"}`}
            >
              Library
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className={` navbar__link ${navCount === 4 ? "b1-bold active" : "b1-reg"}`}
            >
              Contact
            </a>
          </li>
        </ul>
  
        <div className="navbar__cta">
          <button className="navbar__button b1-bold">Sign up</button>
        </div>
        </div>
      </nav>
    );
  };
  
  Navbar.propTypes = {
    navCount: PropTypes.number,
  };
  
  Navbar.defaultProps = {
    navCount: 1,
  };
  
  export default Navbar;