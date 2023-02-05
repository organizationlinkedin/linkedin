import React from "react";
import "../_dist/main.css";
function Main() {
  return (
    <div className="main-container">
      <div className="connection">
        <div className="connection-form">
          <h1>Welcome to your professional community</h1>
          <form>
            <input type="email" name="email" placeholder="E-mail" />
            <input
              type="password"
              name="password"
              placeholder="password"
              minLength={8}
            />
            <a href="#">Forgot password?</a>
            <button className="btn-login" type="submit">
              sign in
            </button>
          </form>
        </div>
        <img
          className="image"
          src="https://static.licdn.com/aero-v1/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"
          alt="bg"
        />
      </div>
    </div>
  );
}

export default Main;
