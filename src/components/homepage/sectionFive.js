import React, { PureComponent } from "react";

class SectionFive extends PureComponent {
  render() {
    return (
      <div className="section-five">
        <div className="row section-five__text">
          <div className="col-sm-6">
            <h5>FIND OUT MORE ABOUT SOUNDIT AFRICA</h5>
            <p id="recent-portfolio">HAVE A LOOK AT OUR MOST RECENT WORK</p>
          </div>
          <div className="col-sm-6">
            <h5 className="section-five__recentwork">
              RECENT WORK{" "}
              <i className="section-five__recentwork-arrow fas fa-arrow-right" />
            </h5>
          </div>
        </div>
        <div className="section-five__work">
          <div className="section-five__left">
            <div className="section-five-img">
              <img
                className="section-five__picture img-responsive"
                src="https://www.artmakerz.net/wp-content/uploads/2016/01/starbucks-feature-image.jpg"
                alt=""
              />
            </div>
            <div className="section-five-img">
              <img
                className="section-five__picture img-responsive"
                src="https://www.artmakerz.net/wp-content/uploads/2017/07/Tech20-Portfolio-Website3-960x960.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="section-five__right">
            <div className="section-five-img">
              <img
                className="section-five__picture img-responsive"
                src="https://www.artmakerz.net/wp-content/uploads/2016/01/starbucks-feature-image.jpg"
                alt=""
              />
            </div>
            <div className="section-five-img">
              <img
                className="section-five__picture img-responsive"
                src="https://www.artmakerz.net/wp-content/uploads/2017/07/Tech20-Portfolio-Website3-960x960.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionFive;
