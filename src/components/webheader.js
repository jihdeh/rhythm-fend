import React, { Component } from "react";
import "../styles/webheader.css";
import { Link } from "react-router-dom";

export default class WebHeader extends Component {
  render() {
    return(
      <div className="web-header">
        <div>
          <h3 className="web-header__title">SoundIT Africa</h3>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/partners">Partners</Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}