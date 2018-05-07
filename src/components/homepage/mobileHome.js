import React from "react";
import LoginPage from "../login";
import { Link } from "react-router-dom";

const MobileHome = () => {
  return (
    <div className="mobile-sa-text">
      <span className="mobile-sa-text__title">
        <Link to="/">
          <img
            alt="soundit logo"
            className="mobile-sa-logo"
            src="/images/logo.png"
          />
        </Link>
        <h1>SounditAfrica!</h1>
        <h4>Be the next Rising Gospel Star</h4>
        <LoginPage />
      </span>
    </div>
  );
};

export default MobileHome;
