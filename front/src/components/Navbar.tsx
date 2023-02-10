import React from "react";
import "../_dist/navbar.css";
import { Link } from "react-router-dom";
import { LinkedinFilled } from "@ant-design/icons";
import { Divider } from "antd";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-container">
        <span>Linked</span>
        <LinkedinFilled className="logo2" />
      </div>
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
        <Divider className="vertical-divider" type="vertical" />
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
/*    */
