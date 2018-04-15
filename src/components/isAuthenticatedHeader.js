import React, { Component } from "react";
import { withRouter } from "react-router";
import SearchInput from "./authHeaders/searchInput";
import LargeScreenMenu from "./authHeaders/lgHeader";
import SmallScreenMenu from "./authHeaders/smHeader";

class AuthenticatedHeader extends Component {
  render() {
    return (
      <div className="">
        <div className="row dashboard-menu">
          <div className="menu">
            <p className="brand" onClick={() => this.props.history.push("/")}>
              SoundIT Africa
            </p>
            <SearchInput
              containerStyle="sm-submenu--search-form"
              inputStyle="sm-submenu--search-input"
            />
            <div className="profile-right">
              <div className="profile-right__owner">
                <img
                  className="profile-right__image"
                  src="../../images/nobody.jpg"
                  alt=""
                />
                <p>Doe</p>
              </div>
              <SmallScreenMenu />
            </div>
          </div>
        </div>
        <LargeScreenMenu />
      </div>
    );
  }
}

export default withRouter(AuthenticatedHeader);
