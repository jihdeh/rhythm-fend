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
              <picture>
                <source
                  srcSet="/images/gallery/A.webp?v=0.0.2"
                  type="image/webp"
                />
                <img
                  className="section-five__picture img-responsive"
                  data-src="/images/gallery/A.png?v=0.0.2"
                  src="/images/gallery/A.png?v=0.0.2"
                  alt="SoundIT show gallery"
                />
              </picture>
            </div>
            <div className="section-five-img">
              <picture>
                <source
                  srcSet="/images/gallery/C.webp?v=0.0.2"
                  type="image/webp"
                />
                <img
                  className="section-five__picture img-responsive"
                  data-src="/images/gallery/C.png?v=0.0.2"
                  src="/images/gallery/C.png?v=0.0.2"
                  alt="SoundIT Africa show gallery"
                />
              </picture>
            </div>
          </div>
          <div className="section-five__right">
            <div className="section-five-img">
              <picture>
                <source
                  srcSet="/images/gallery/D.webp?v=0.0.2"
                  type="image/webp"
                />
                <img
                  className="section-five__picture img-responsive"
                  data-src="/images/gallery/D.png?v=0.0.2"
                  src="/images/gallery/D.png?v=0.0.2"
                  alt="SoundIT Africa show gallery"
                />
              </picture>
            </div>
            <div className="section-five-img">
              <picture>
                <source
                  srcSet="/images/gallery/B.webp?v=0.0.2"
                  type="image/webp"
                />
                <img
                  className="section-five__picture img-responsive"
                  data-src="/images/gallery/B.png?v=0.0.2"
                  src="/images/gallery/B.png?v=0.0.2"
                  alt="SoundIT Africa show gallery"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionFive;
