import React from "react";
import "../_dist/footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-logo grid">
          {" "}
          <img
            src="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Logo.wine.svg"
            alt="logo"
            className="logo"
          />
        </div>
        <div className="footer-general grid">
          <p>General</p>
          <Link to="/signup">Sign up</Link>
          <Link to="/signup">Help center</Link>
          <Link to="/signup">About</Link>
          <Link to="/signup">Press</Link>
          <Link to="/signup">Blog</Link>
          <Link to="/signup">Careers</Link>
          <Link to="/signup">Developers</Link>
        </div>
        <div className="footer-browse grid">
          <p>Browse LinkedIn</p>
          <Link to="/signup">Sign up</Link>
          <Link to="/signup">Help center</Link>
          <Link to="/signup">About</Link>
          <Link to="/signup">Press</Link>
          <Link to="/signup">Blog</Link>
          <Link to="/signup">Careers</Link>
          <Link to="/signup">Developers</Link>
        </div>
        <div className="footer-solutions grid">
          <p>Business Solutions</p>
          <Link to="/signup">Sign up</Link>
          <Link to="/signup">Help center</Link>
          <Link to="/signup">About</Link>
          <Link to="/signup">Press</Link>
          <Link to="/signup">Blog</Link>
          <Link to="/signup">Careers</Link>
          <Link to="/signup">Developers</Link>
        </div>
        <div className="footer-directories grid">
          <p>Directories</p>
          <Link to="/signup">Sign up</Link>
          <Link to="/signup">Help center</Link>
          <Link to="/signup">About</Link>
          <Link to="/signup">Press</Link>
          <Link to="/signup">Blog</Link>
          <Link to="/signup">Careers</Link>
          <Link to="/signup">Developers</Link>
          <Link to="/signup">Press</Link>
          <Link to="/signup">Blog</Link>
          <Link to="/signup">Careers</Link>
          <Link to="/signup">Developers</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
