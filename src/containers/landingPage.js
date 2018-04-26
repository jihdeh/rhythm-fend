import React, { Component } from "react";
import SectionTwo from "../components/homepage/sectionTwo";
import MobileHome from "../components/homepage/mobileHome";
import "../styles/home.css";
import LoginPage from "../components/login";
import SectionThree from "../components/homepage/sectionThree";
import SectionFour from "../components/homepage/sectionFour";
import SectionFive from "../components/homepage/sectionFive";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <div className="banner">
          <div className="row">
            <div className="sa-text">
              <span className="sa-text__title">
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
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionTwo />
      </div>
    );
  }
}

export default LandingPage;
