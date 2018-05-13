import React from "react";
import { Link } from "react-router-dom";
import "../styles/currentlyClosed.css";

const CurrentlyClosed = ({ title, subtitle, statustitle }) => (
  <div className="closed-wrapper">
    <section className="closed-theme">
      <div className="closed-header-title">
        <div>
          <Link className="closed-header-standalone" to="/account">
            SIGN IN
          </Link>
          <span> &nbsp;|&nbsp; </span>
          <Link className="closed-header-standalone" to="/register">
            REGISTER
          </Link>
        </div>
        <h1>{title}</h1>
      </div>
      <div className="closed-content">
        <div className="closed-text">
          <p>
            {subtitle}
            <br />
          </p>
        </div>
      </div>
      <hr className="closed-divider" />
      <h3 className="closed-title closed-title-tight closed-text-center">
        {statustitle}
      </h3>
      <br />
      <br />
      <Link className="closed-terms" to="/">
        SoundIT Africa.
      </Link>
    </section>
  </div>
);

export default CurrentlyClosed;
