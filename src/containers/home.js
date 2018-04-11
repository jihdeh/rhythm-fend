import React from "react";
import { connect } from "react-redux";
import SectionTwo from "../components/homepage/sectionTwo";
import "../styles/home.css";

const Home = props => {
  return (
    <div>
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
              <h1>
                SoundIT{" "}
                <img
                  className="sa-brand__name-logo"
                  src="/images/continent-icon-africa.png"
                />frica.
              </h1>
              <h4>Be the next Rising Gospel Star</h4>
              <div>
                <form className="sa-form__login">
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control sa-form__login-input"
                      aria-describedby="emailHelp"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control sa-form__login-input"
                      aria-describedby="emailHelp"
                      placeholder="Enter password"
                    />
                  </div>
                  <div className="sa-actions">
                    <p className="sa-actions__createAccount">Create Account</p>
                    <p className="sa-actions__login">Login</p>
                  </div>
                </form>
              </div>
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
          <h1>SounditAfrica!</h1>
          <h4>Be the next Rising Gospel Star</h4>
          <p>
            <i className="fas fa-sign-in-alt login" /> Login
          </p>
          <p>
            <i className="fas fa-user-plus signup" /> Create Account
          </p>
        </span>
      </div>
      <SectionTwo />
    </div>
  );
};

const mapStateToProps = state => ({
  app: state
});

export default connect(mapStateToProps)(Home);
