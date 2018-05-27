import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoginPage from "../login";

class Slide extends Component {
  constructor(props) {
    super(props);

    this.state = { displayForm: false };
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
            {displayForm ? (
              <div className="row">
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
              </div>
            ) : (
              <div className="sa-text__promo">
                <h2>How well would you sing for $5000?</h2>
                <h4>Praise.Worship.Blessed</h4>
              </div>
            )}
          </div>
          <div className="banner-slide2">
            <div className="sa-text__promo">
              <h2>Brace yourself for SoundIT Africa 2</h2>
              <h4>01.06.2018</h4>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Slide;
