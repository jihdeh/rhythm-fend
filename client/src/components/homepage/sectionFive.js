import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

class SectionFive extends PureComponent {
  render() {
    return (
      <div className="section-five">
        <div className="row section-five__text">
          <div className="col-sm-6">
            <h5>FIND OUT MORE ABOUT SOUNDIT AFRICA</h5>
            <p id="recent-portfolio">HAVE A LOOK AT OUR PAST EVENTS</p>
          </div>
          <div className="col-sm-6">
            <h5 className="section-five__recentwork">
              <Link
                to="/gallery"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                RECENT WORK{" "}
                <i className="section-five__recentwork-arrow fas fa-arrow-right" />
              </Link>
            </h5>
          </div>
        </div>
        <div className="section-five__work">
          <div className="section-five__left">
            <div className="section-five-img">
              <img
                className="section-five__picture img-responsive"
                src="/images/gallery/A.png"
                alt="SoundIT show gallery"
              />
            </div>
            <div className="section-five-img">
              <img
                className="section-five__picture img-responsive"
                src="/images/gallery/C.png"
                alt="SoundIT Africa show gallery"
              />
            </div>
          </div>
          <div className="section-five__right">
            <div className="section-five-img">
              <img
                className="section-five__picture img-responsive"
                src="/images/gallery/D.png"
                alt="SoundIT Africa show gallery"
              />
            </div>
            <div className="section-five-img">
              <img
                className="section-five__picture img-responsive"
                src="/images/gallery/B.png"
                alt="SoundIT Africa show gallery"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionFive;
