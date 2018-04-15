import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchInput from "./searchInput";

class LargeScreenMenuNavigation extends Component {
  isVoter() {
    return (
      <span style={{ display: "flex" }}>
        <li>
          <Link to="/search">
            <i className="fas fa-cubes fa-lg guide-icon__default" />
            <span>VOTE</span>
          </Link>
        </li>
        <li>
          <Link to="/search">
            <i className="fab fa-hotjar fa-lg guide-icon__default" />
            <span>TRENDING</span>
          </Link>
        </li>
      </span>
    );
  }

  render() {
    return (
      <div className="container submenu">
        <div className="row">
          <ul className="submenu-list">
            <li>
              <SearchInput
                containerStyle="submenu--search-form"
                inputStyle="submenu--search-input"
              />
            </li>
            <li>
              <Link to="/">
                <i className="fas fa-home fa-lg guide-icon__default" />
                <span>HOME</span>
              </Link>
            </li>
            {this.isVoter()}
            <li>
              <Link to="/search">
                <i className="fas fa-handshake fa-lg guide-icon__default" />
                <span>CONNECT</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fas fa-power-off fa-lg guide-icon__default" />
                <span>LOGOUT</span>
              </Link>
            </li>
          </ul>
          <div className="sm-search-form">
            <SearchInput
              containerStyle="ssm-submenu--search-form"
              inputStyle="ssm-submenu--search-input"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LargeScreenMenuNavigation;
