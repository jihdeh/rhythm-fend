import React, { Component } from "react";
import "../styles/signup.css";
import VoterView from "../components/signup/voterView";
import ContestantView from "../components/signup/contestantView";


export default class Signup extends Component {
  state = {
    isContestant: false
  };

  render() {
    const { isContestant } = this.state;

    return(
      <div>
         {isContestant ? <ContestantView /> : <VoterView />}
      </div>
    );
  }
}