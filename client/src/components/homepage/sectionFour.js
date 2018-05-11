import React, { PureComponent } from "react";

class SectionFour extends PureComponent {
  render() {
    return (
      <div className="" id="about">
        <div className="row section-four">
          <div className="col-sm-6 section-four__left">
            <h6>MAKING GOSPEL MUSIC GLOBAL!</h6>
            <h1>SoundIT Africa</h1>
            <br />
            <p>
              SoundIT Africa is an online singing competition with an aim of leveraging on the simplicity of the Digital Media to discover and showcase new talents across Africa hence cutting loads of protocols to give these talents an easily way to be heard across Africa and Around the world.
            </p>

            <p>
              In 2017, with over 1,000 entries from different part of Africa especially Nigeria, Senegal and South Africa, Sound It had its first edition and the 5 finalist came to Lagos for the Grand finale. The panel of Judges was lead by Uncle Ben (MTN Project Fame West Africa).
            </p>
            <br />
            <p>
              LEARN MORE <i className="fas fa-angle-down" />
            </p>
          </div>
          <div className="col-sm-6 section-four__right">
            <img
              className="section-four__picture img-responsive"
              src="https://www.artmakerz.net/wp-content/uploads/2016/11/artmakerz-digital-agency-portugal-braga-home3.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SectionFour;
