import React from "react";
import { connect } from "react-redux";
import "../styles/home.css";
// <div className="col-sm-6">
//   <img className="microphone" src={microphone} alt="hand holding a microphone on stage"/>
// </div>

const Home = props => {
  return (
    <div className="background">
      <div className="background__canvas" />
      <div className="banner">
        <div className="row">
          <div className="sa-text">
            <span className="sa-text__title">
              <img
                src="https://images.vexels.com/media/users/3/131548/isolated/preview/9e36529b6e31cc4bae564fc2d14a8d0f-msica-icono-de-la-nota-c-rculo-by-vexels.png"
                className="logo"
                style={{ width: "150px" }}
                alt=""
              />
              <h1>Welcome to SounditAfrica!</h1>
              <h4>Vote for your favourite rising star</h4>
              <p><i className="fas fa-sign-in-alt login"></i> Login</p>
              <p><i className="fas fa-user-plus signup"></i> Sign Up</p>
            </span>
          </div>
        </div>
      </div>
      <div className="mobile-sa-text">
        <span className="mobile-sa-text__title">
          <img
            src="https://images.vexels.com/media/users/3/131548/isolated/preview/9e36529b6e31cc4bae564fc2d14a8d0f-msica-icono-de-la-nota-c-rculo-by-vexels.png"
            className="mobile-logo"
            style={{ width: "150px" }}
            alt=""
          />
          <h1>Welcome to SounditAfrica!</h1>
          <h4>Vote for your favourite rising star</h4>
          <p><i className="fas fa-sign-in-alt login"></i> Login</p>
          <p><i className="fas fa-user-plus signup"></i> Sign Up</p>
        </span>
      </div>
      <p className="sb-text">HEY THERE</p>
    </div>

    
  );
};

const mapStateToProps = state => ({
  app: state
});

export default connect(mapStateToProps)(Home);
