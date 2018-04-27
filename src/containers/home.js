import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router";
import LandingPage from "./landingPage";
import DashBoard from "./dashboard";

class Home extends Component {
  render() {
    return (
      <div>
        {!this.props.user ? (
          <LandingPage {...this.props} />
        ) : (
          <DashBoard {...this.props} />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  user: auth.userInfo
});

export default connect(mapStateToProps)(Home);
