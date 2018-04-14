import React, { Component } from "react";
import { connect } from "react-redux";
import LandingPage from "./landingPage";
import DashBoard from "./dashboard";

class Home extends Component {
  state = {
    isLoggedIn: true
  };

  render() {
    return <div>{this.state.isLoggedIn ? <DashBoard /> : <LandingPage />}</div>;
  }
}

const mapStateToProps = state => ({
  app: state
});

export default connect(mapStateToProps)(Home);
