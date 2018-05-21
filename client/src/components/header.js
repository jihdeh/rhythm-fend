import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

export default class Header extends Component {
  render() {
    return (
      <header
        className={
          window.location.pathname === "/"
            ? "sa-header__xs_landing sa-header__xs sa-header__search"
            : "sa-header__xs sa-header__search"
        }
      >
        <nav>
          <Link to="/">
            <img
              alt="soundit logo"
              className="sa-logo"
              src="/images/logo.png"
            />
          </Link>
          <div className="sa-menu__right">
            <div className="sa-liner__container">
              <div className="sa-liner" />
            </div>
            <ul className="sa-navigation">
              {/*<li>
                <Link to="/account">Account</Link>
              </li>*/}
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/donate">Donate</Link>
              </li>
              <li>
                <Link to="/search">Vote</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <a href="/#contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
