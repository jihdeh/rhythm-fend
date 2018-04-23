import React, { Component } from "react";
import SectionTwo from "../components/homepage/sectionTwo";
import MobileHome from "../components/homepage/mobileHome";
import "../styles/home.css";
import LoginPage from "../components/login";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="banner">
          <div className="row">
            <div className="sa-text">
              <span className="sa-text__title">
                <img
                  src="https://images.vexels.com/media/users/3/131548/isolated/preview/9e36529b6e31cc4bae564fc2d14a8d0f-msica-icono-de-la-nota-c-rculo-by-vexels.png"
                  className="logo"
                  style={{ width: "150px" }}
                  alt=""
                />
                <h1>
                  SoundIT{" "}
                  <img
                    className="sa-brand__name-logo"
                    src="/images/continent-icon-africa.png"
                    alt=""
                  />frica.
                </h1>
                <h4>Be the next Rising Gospel Star</h4>
                <LoginPage />
              </span>
            </div>
          </div>
        </div>
        <MobileHome />
        <SectionTwo />
      </div>
    );
  }
}

export default LandingPage;
