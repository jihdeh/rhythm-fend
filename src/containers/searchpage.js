import React, { Component } from "react";
import "../styles/searchpage.css";
import "../styles/dashboard.css";
import ContestantSearchView from "../components/searchpage/contestantSearchView";
import VoterSearchView from "../components/searchpage/voterSearchView";

class Search extends Component {
  state = {
    isContestant: false
  };
  render() {
    const { isContestant } = this.state;
    return (
      <div className="content">
        {!isContestant ? <VoterSearchView /> : <ContestantSearchView />}
      </div>
    );
  }
}

export default Search;
