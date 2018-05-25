import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import LargeScreenMenu from "./authHeaders/lgHeader";
import SmallScreenMenu from "./authHeaders/smHeader";

class AuthenticatedHeader extends PureComponent {
  render() {
    const { profile } = this.props;
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
                <p>{profile.firstName}</p>
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

const mapStateToProps = ({ auth, profile }) => ({
  user: auth.userInfo,
  profile: profile.contestant
});

export default withRouter(connect(mapStateToProps)(AuthenticatedHeader));
