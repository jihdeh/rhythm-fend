import React, { PureComponent } from "react";

class SectionFour extends PureComponent {
  render(){
    return (
      <div className="">
        <div className="row section-four">
          <div className="col-sm-6 section-four__left">
            <h6>MAKING GOSPEL MUSIC GLOBAL!</h6>
            <h1>A full-service group.</h1>
            <br />
            <p>We are a gospel music group focused on getting results through effective, creative and innovative music promotion strategies.</p>
            
            <p>With the goal of making gospel music more accessible, we have divided our services into 3 practical stages that’ll be beneficial for you.</p>
            
            <p>Set to know our three stages: REGISTER, UPLOAD and ENJOY.</p>
            <br />
            <p>LEARN MORE <i class="fas fa-angle-down"></i></p>
          </div>
          <div className="col-sm-6 section-four__right">
            <img
              className="section-four__picture img-responsive"
              src="../../images/city.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SectionFour;