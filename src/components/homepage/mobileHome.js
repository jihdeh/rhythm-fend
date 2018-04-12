import React from "react";

const MobileHome = () => {
  return (
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
  );
};

export default MobileHome;
