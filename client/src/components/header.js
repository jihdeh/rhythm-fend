import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import get from "lodash/get";

class Header extends Component {
  render() {
    const { openStatus } = this.props;
    return (
      <header className="sa-header__xs sa-header__search">
        <nav>
          <Link to="/">
            <picture>
              <source
                srcSet="/images/logo.webp?v=0.0.2"
                type="image/webp"
              />
              <img
                className="sa-logo"
                data-src="/images/logo.png?v=0.0.2"
                src="/images/logo.png?v=0.0.2"
                alt="soundit logo"
              />
            </picture>
          </Link>
          <div className="sa-menu__right">
            <div className="sa-liner__container">
              <div className="sa-liner" />
            </div>
            <ul className="sa-navigation">
              {openStatus ? (
                get(openStatus, "registrationOpen") ? (
                  <li>
                    <Link to="/account">Login/Register</Link>
                  </li>
                ) : null
              ) : null}
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

const mapStateToProps = ({ misc }) => ({
  openStatus: misc.openStatus
});

export default connect(mapStateToProps)(Header);
