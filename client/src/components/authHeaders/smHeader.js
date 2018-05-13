import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logout } from "../../actions/authActions";

class SmallScreenMenuNavigation extends Component {
  state = {
    isSideNavActive: false
  };

  onLogout = () => {
    this.props.logout();
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
          <div className="sidenav-profile">
            <div className="sidenav__owner">
              <img
                className="sidenav-right__image"
                src="../../images/nobody.jpg"
                alt=""
              />
              <p>Doe</p>
            </div>
          </div>
          <div className="menuSideNavList">
            <Link to="/">
              <i className="fas fa-home fa-lg guide-icon__default" />
              <span className="sidenav-home__border-right">HOME</span>
            </Link>
            <Link to="/edit/profile">
              <i className="fas fa-handshake fa-lg guide-icon__default" />
              <span className="sidenav-connect__border-right">PROFILE</span>
            </Link>

            <span className="sidenav-layer" onClick={this.onLogout}>
              <i className="fas fa-power-off fa-lg guide-icon__default" />
              <span className="sidenav-menu__border-right">LOGOUT</span>
            </span>
          </div>
        </div>
        <span className="open-sideNav-btn" onClick={this.toggleSideNav}>
          <i className="fas fa-bars fa-2x" />
        </span>
      </span>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logout: bindActionCreators(logout, dispatch)
});

export default connect(null, mapDispatchToProps)(SmallScreenMenuNavigation);
