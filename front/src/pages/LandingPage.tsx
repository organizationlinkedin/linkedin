import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Carosel from "../components/Carosel";

function LandingPage() {
  return (
    <div className="container">
      <Navbar />
      <Main />
      <Carosel />
      {/*    <Footer /> */}
    </div>
  );
}

export default LandingPage;
