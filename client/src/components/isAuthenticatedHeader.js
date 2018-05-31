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
              <picture>
                <source
                  srcSet="/images/logo.webp?v=0.0.2"
                  type="image/webp"
                />
                <img
                  className="sa-logo"
                  style={{ width: "50px" }}
                  data-src="/images/logo.png?v=0.0.2"
                  src="/images/logo.png?v=0.0.2"
                  alt="soundit logo"
                />
              </picture>
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
