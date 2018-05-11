import React, { Component } from "react";
import "../styles/searchpage.css";
import ContestantSearchView from "../components/searchpage/contestantSearchView";

class Search extends Component {
  render() {
    return (
      <div className="container search-container">
        <ContestantSearchView />
      </div>
    );
  }
}

export default Search;
