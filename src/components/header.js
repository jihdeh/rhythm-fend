import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

export default class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/login">Contact</Link>
            </li>
            <li>
              <Link to="/signup">Partners</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
