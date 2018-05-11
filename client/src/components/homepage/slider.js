import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/slider.css";

class Slide extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slider-menu">
        <h2 className="slider-menu__title" />
        <Slider {...settings}>
          <div className="banner" />
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
