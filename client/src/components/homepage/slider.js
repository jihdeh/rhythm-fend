import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/slider.css";
import "../../styles/home.css";
import LoginPage from "../login";

class Slide extends Component {
  constructor(props) {
    super(props);
    
    this.state = {displayForm: false};
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000
    };
    const displayForm = this.state.displayForm;
    return (
      <div className="slider-menu">
        <h2 className="slider-menu__title" />
        <Slider {...settings}>
          <div className="banner">
            {displayForm ? <div className="row">
              <div className="sa-text">
                <span className="sa-text__title">
                  <h1 className="sa-text-title__company-name">
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
            </div> : 
            <div className="sa-text__promo">
              <h2>Stand a chance to win $5000</h2>
            </div>}
          </div>
          <div>
            <h3>Hi</h3>
          </div>
          <div>
            <h3>Hey</h3>
          </div>
          <div>
            <h3>Hello again</h3>
          </div>
          <div>
            <h3>Hi people</h3>
          </div>
          <div>
            <h3>Hey there</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Slide;
