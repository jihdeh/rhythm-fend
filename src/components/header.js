import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <div className="sa-liner__container">
            <div className="sa-liner" />
          </div>
          <ul className="sa-navigation">
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
      </header>
    );
  }
}
