import React, { Component } from "react";
import VoterView from "../components/dashboard/voterView";
import ContestantView from "../components/dashboard/contestantView";
import AuthenticatedHeader from "../components/isAuthenticatedHeader";

export default class DashBoard extends Component {
  state = {
    isContestant: false
  };

  render() {
    const { isContestant } = this.state;

    return (
      <div className="container dashboard-container">
        <div className="row">
          {isContestant ? <ContestantView /> : <VoterView />}
        </div>
      </div>
    );
  }
}
