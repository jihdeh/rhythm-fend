import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logout } from "../../actions/authActions";

class LargeScreenMenuNavigation extends Component {
  onLogout = () => {
    this.props.logout();
  };

  render() {
    return (
      <div className="container submenu">
        <div className="row">
          <ul className="submenu-list">
            <li>
              <Link to="/">
                <i className="fas fa-home fa-lg guide-icon__default" />
                <span>HOME</span>
              </Link>
            </li>
            <li>
              <Link to="/edit/profile">
                <i className="fas fa-handshake fa-lg guide-icon__default" />
                <span>PROFILE</span>
              </Link>
            </li>
            <li>
              <span onClick={this.onLogout}>
                <i className="fas fa-power-off fa-lg guide-icon__default" />
                <span>LOGOUT</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logout: bindActionCreators(logout, dispatch)
});

export default connect(null, mapDispatchToProps)(LargeScreenMenuNavigation);
