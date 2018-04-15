import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchInput from "./searchInput";

class SmallScreenMenuNavigation extends Component {
  state = {
    isSideNavActive: false
  };

  toggleSideNav = e => {
    e.preventDefault();
    const { isSideNavActive } = this.state;
    if (isSideNavActive) {
      document.getElementById("menuSideNav").style.width = "250px";
    } else {
      document.getElementById("menuSideNav").style.width = "0";
    }
    this.setState({
      isSideNavActive: !isSideNavActive
    });
  };

  render() {
    return (
      <span>
        <div id="menuSideNav" className="sidenav">
          <a className="closebtn" onClick={this.toggleSideNav}>
            <i className="fas fa-times fa-lg" />
          </a>
          <div className="menuSideNavList">
            <Link to="/search">
              <i className="fas fa-cubes fa-lg guide-icon__default" />
              <span>VOTE</span>
            </Link>

            <Link to="/search">
              <i className="fab fa-hotjar fa-lg guide-icon__default" />
              <span>TRENDING</span>
            </Link>

            <Link to="/search">
              <i className="fas fa-handshake fa-lg guide-icon__default" />
              <span>CONNECT</span>
            </Link>

            <Link to="/search">
              <i className="fas fa-power-off fa-lg guide-icon__default" />
              <span>LOGOUT</span>
            </Link>
          </div>
        </div>
        <span className="open-sideNav-btn" onClick={this.toggleSideNav}>
          <i className="fas fa-bars fa-2x" />
        </span>
      </span>
    );
  }
}

export default SmallScreenMenuNavigation;
