import React from "react";
import LoginPage from "../login";
import { Link } from "react-router-dom";

const MobileHome = () => {
  return (
    <div className="mobile-sa-text">
      <span className="mobile-sa-text__title">
        <Link to="/">
          <picture>
            <source
              srcSet="/images/logo.webp?v=0.0.2"
              type="image/webp"
            />
            <img
              className="mobile-sa-logo"
              data-src="/images/logo.png?v=0.0.2"
              src="/images/logo.png?v=0.0.2"
              alt="soundit logo"
            />
          </picture>
        </Link>
        <h1>SounditAfrica!</h1>
        <h4>Be the next Rising Gospel Star</h4>
        <LoginPage />
      </span>
    </div>
  );
};

export default MobileHome;
