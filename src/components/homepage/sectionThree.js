import React, { PureComponent } from "react";

class SectionThree extends PureComponent {
  render(){
    return (
      <div className="section-three">
        <h2 className="display-3 text-center sa-header">
          LATEST ON SOUNDIT AFRICA
        </h2>
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-lg-6 col-sm-6 col-md-6">
                <div className="section-three__thumbnail">
                  <img
                    className="section-three__picture img-responsive"
                    src="../../images/artiste.jpg"
                    alt=""
                  />
                  <div className="section-three__text">
                    <h4>Jide Dunra performing at Shiloh</h4> 
                    <div className="section-three__text-footer">
                      <p>15 hours ago</p>
                      <div className="section-three__mediashare">
                        <i className="section-three__mediaicon section-three__mediaicon-fb fab fa-facebook" />
                        <i className="section-three__mediaicon section-three__mediaicon-tw fab fa-twitter" />
                        <i className="section-three__mediaicon section-three__mediaicon-ig fab fa-instagram" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-sm-6 col-md-6">
                <div className="section-three__thumbnail">
                  <img
                    className="section-three__picture img-responsive"
                    src="../../images/artiste2.jpg"
                    alt=""
                  />
                  <div className="section-three__text">
                  <h4>Atom Dunra performing at Shiloh</h4> 
                    <div className="section-three__text-footer">
                      <p>15 hours ago</p>
                      <div className="section-three__mediashare">
                        <i className="section-three__mediaicon section-three__mediaicon-fb fab fa-facebook" />
                        <i className="section-three__mediaicon section-three__mediaicon-tw fab fa-twitter" />
                        <i className="section-three__mediaicon section-three__mediaicon-ig fab fa-instagram" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 section-three__sponsors">
            <div className="section-three__sponsors-logo">
              <img
                src="../../images/akwaibom.png"
                alt=""
              />
            </div>
            <div className="section-three__sponsors-logo">
              <img
                src="../../images/award.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionThree;