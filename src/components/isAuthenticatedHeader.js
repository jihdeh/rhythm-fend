import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import MobileDashBoardMenu from "../components/dashboard/mobileDashMenu";

class AuthenticatedHeader extends Component {
  state = {
    isContestant: false,
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
    const { isContestant } = this.state;

    return (
      <div className="">
        <div className="row dashboard-menu">
          <div className="menu">
            <p className="brand" onClick={() => this.props.history.push("/")}>
              SoundIT Africa
            </p>
            <form className="sm-submenu--search-form">
              <input
                className="sm-submenu--search-input"
                type="search"
                name="search"
                placeholder="Search for contestant"
              />
              <i className="fas fa-search search-icon" />
            </form>
            <div className="profile-right">
              <div className="profile-right__owner">
                <img
                  className="profile-right__image"
                  src="../../images/nobody.jpg"
                  alt=""
                />
                <p>Doe</p>
              </div>
              <div id="menuSideNav" className="sidenav">
                <a className="closebtn" onClick={this.toggleSideNav}>
                  <i className="fas fa-times fa-lg" />
                </a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
              </div>
              <span className="open-sideNav-btn" onClick={this.toggleSideNav}>
                <i className="fas fa-bars fa-2x" />
              </span>
            </div>
          </div>
        </div>
        <div className="container submenu">
          <div className="row">
            <ul className="submenu-list">
              <li>
                <form className="submenu--search-form">
                  <input
                    className="submenu--search-input"
                    type="search"
                    name="search"
                    placeholder="Search for contestant"
                  />
                  <i className="fas fa-search search-icon" />
                </form>
              </li>
              <li>
                <i className="fas fa-cubes fa-lg guide-icon__default" />
                <Link to="/search">VOTE</Link>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-hotjar fa-lg guide-icon__default" />
                  <span>TRENDING</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-handshake fa-lg guide-icon__default" />
                  <span>CONNECT</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-thumbs-up fa-lg guide-icon__default" />
                  <span>MOST LIKED</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-power-off fa-lg guide-icon__default" />
                  <span>LOGOUT</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AuthenticatedHeader);
