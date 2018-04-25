import React from "react";
import Ioshare from "react-icons/lib/io/share";

const Description = ({ name, state, country, profilelink }) => (
  <div className="nav--discription">
    <span className="nav-block" />
    <span className="bigger--block" />
    <div className="profile--detail">
      <span>
        <h2 className="profile--name">{name}</h2>
        <h6 className="profile-city">{`${state},${country}`}</h6>
      </span>
      <span className="share-btn">
        <Ioshare className="share--icon" />
        <span className="share-label">SHARE PROFILE</span>
      </span>
    </div>
    <span className="nav-block" />
  </div>
);
export default Description;
