import React, { Component } from "react";
import ContestantView from "../components/dashboard/contestantView";

export default class DashBoard extends Component {
  render() {
    return (
      <div className="container dashboard-container">
        <div className="row">
          <ContestantView />
        </div>
      </div>
    );
  }
}
