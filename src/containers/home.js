import React, { Component } from "react";
import { connect } from "react-redux";
import LandingPage from "./landingPage";
import DashBoard from "./dashboard";
import VoterView from "../components/dashboard/voterView";

class Home extends Component {
  state = {
    isLoggedIn: true
  };

  render() {
    return (
      <div>
        {!this.state.isLoggedIn ? (
          <LandingPage {...this.props} />
        ) : (
          <DashBoard {...this.props} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  app: state
});

export default connect(mapStateToProps)(Home);
