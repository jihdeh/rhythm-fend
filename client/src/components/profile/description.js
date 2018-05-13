import React from "react";
import Ioshare from "react-icons/lib/io/share";
import Sharebutton from "./sharebutton";
import { formatString } from "../../utils/helpers";

const Description = ({ name, state, country, profilelink, show, click }) => (
  <div className="nav--discription">
    <span className="nav-block" />
    <span className="bigger--block" />
    <div className="profile--detail">
      <span>
        <h2 className="profile--name">{formatString(name)}</h2>
        <h6 className="profile-city">
          {country && state ? formatString(`${state}, ${country}`) : ""}
        </h6>
      </span>
      <span className="share--cont">
        {show ? <Sharebutton /> : null}
        <span className="share-btn" onClick={click}>
          <Ioshare className="share--icon" />
          <span className="share-label">SHARE PROFILE</span>
        </span>
      </span>
    </div>
    <span className="nav-block" />
  </div>
);
export default Description;
