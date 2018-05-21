import React, { PureComponent } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import SearchInput from "./authHeaders/searchInput";
import LargeScreenMenu from "./authHeaders/lgHeader";
import SmallScreenMenu from "./authHeaders/smHeader";

class AuthenticatedHeader extends PureComponent {
  render() {
    return (
      <div className="">
        <div className="row dashboard-menu">
          <div className="menu">
            <Link to="/">
              <img
                style={{ width: "50px" }}
                className="sa-logo"
                src="/images/logo.png"
                alt="Soundit logo"
              />
            </Link>
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
