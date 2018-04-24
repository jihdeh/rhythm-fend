import React, { PureComponent } from "react";

class SectionFive extends PureComponent {
  render(){
    return (
      <div className="section-five">
        <div className="row section-five__text">
          <div className="col-sm-6">
            <h5>FIND OUT MORE ABOUT SOUNDIT AFRICA</h5>
            <h3>HAVE A LOOK AT OUR MOST RECENT PERFORMANCES</h3>
          </div>
          <div className="col-sm-6">
            <h5 className="section-five__recentwork">RECENT WORK <i className="fas fa-arrow-right" /></h5>
          </div>
        </div>
        <div className="section-five__work">
          <div className="section-five__left">
          <div className="">
            <img
              className="section-five__picture img-responsive"
              src="../../images/artiste.jpg"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="section-five__picture img-responsive"
              src="../../images/artiste.jpg"
              alt=""
            />
          </div>
          </div>
          <div className="section-five__right">
          <div className="">
            <img
              className="section-five__picture img-responsive"
              src="../../images/artiste.jpg"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="section-five__picture img-responsive"
              src="../../images/artiste.jpg"
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