import React, { Component } from "react";
import "../styles/aboutUs.css";
import About from "../components/about-us";

class AboutUs extends Component {
  render() {
    return (
      <div className="about-us-container">
        <About />
      </div>
    );
  }
}

export default AboutUs;