import React from "react";
import "../_dist/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <img
        src="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Logo.wine.svg"
        alt="logo"
        className="logo"
      />

      <ul className="nav-items">
        <Link to="/">
          <li className="nav-item">
            <i className="fa-regular fa-compass"></i>
            <span>Discover</span>
          </li>
        </Link>

        <li className="nav-item">
          <i className="fa-solid fa-user-group"></i>
          <span>People</span>
        </li>
        <li className="nav-item">
          <i className="fa-solid fa-book"></i>
          <span>Learning</span>
        </li>
        <li className="nav-item">
          <i className="fa-solid fa-suitcase"></i>
          <span>Jobs</span>
        </li>
      </ul>
      <div className="nav-actions">
        <Link to="/login">
          <div className="sign-in-btn"> Join now</div>
        </Link>
        <Link to="/signin">
          <div className="sign-up-btn">sign up</div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
