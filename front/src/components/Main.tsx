import React from "react";
import "../_dist/main.css";
import { Divider } from "antd";
function Main() {
  return (
    <div className="main-container">
      <div className="connection-form">
        <h1>Welcome to your professional community</h1>
        <form>
          <input
            type="email"
            name="email"
            className="animated-placeholder email"
            placeholder="enter your email ..."
          />
          <div className="password-container">
            <input
              type="password"
              name="password"
              className="animated-placeholder password"
              minLength={8}
              placeholder="password"
            />
            <button className="toggle-password">show</button>
          </div>
          <a href="#">Forgot password?</a>
          <button className="btn-login" type="submit">
            sign in
          </button>
          <Divider className="divider">
            <span className="or">or</span>
          </Divider>
        </form>
      </div>
      <div className="image">
        <img
          src="https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
          alt="bg"
        />
      </div>
    </div>
  );
}

export default Main;
