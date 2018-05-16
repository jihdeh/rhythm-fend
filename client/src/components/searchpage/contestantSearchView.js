import React, { Component } from "react";
import get from "lodash/get";
import debounce from "lodash/debounce";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getSearchResult } from "../../actions/miscActions";
import { displayError } from "../../actions/errorActions";
import Spinner from "react-activity/lib/Spinner";
import CurrentlyClosedComponent from "../currentlyClosed";
import "../../styles/searchpage.css";
import "react-activity/lib/Spinner/Spinner.css";

class ContestantView extends Component {
  state = {
    username: "",
    isLoading: false
  };

  componentWillMount() {
    this.props.getSearchResult();
  }

  componentWillReceiveProps() {
    this.setState({
      isLoading: false
    });
  }

  fetchResult = e => {
    e.preventDefault();
    const { username } = this.state;
    this.setState({
      isLoading: true
    });
    this.props.getSearchResult(username);
  };

  render() {
    const { openStatus, searchResults = [] } = this.props;
    const { isLoading } = this.state;

    return (
      <span>
        {get(openStatus, "votingOpen") ? (
          <div className="container-fluid">
            <div className="row">
              <div className="contestant-container">
                <div>
                  <p className="contestant-section__title">
                    <b>Search results</b>
                  </p>
                  <form className="contestant-container__form" onSubmit={this.fetchResult}>
                    <span className="username--cont">
                      <input
                        className="usernameInput searchInput"
                        type="text"
                        placeholder="Search by username"
                        onChange={({ target }) =>
                          this.setState({ username: target.value })
                        }
                        value={this.state.username || ""}
                        required 
                      />
                      <button className="search-input__button"><i className="fas fa-search searchpage-icon"></i></button>
                      
                      {/*<input className="searchButton" type="submit" value="Search" />*/}
                      {isLoading ? <Spinner color="#ffffff" /> : null}
                    </span>
                  </form>
                  
                  
                </div>
                <h4>SoundIT Africa Contestants</h4>
                <div className="grid-suspenders" />
                {searchResults.length ? (
                  searchResults.map((contestant, key) => (
                    <div key={key} className="col-sm-3 col-md-3 col-lg-3">
                      <div className="col-contestant-result">
                        <iframe
                          width="100%"
                          height="200px"
                          src={contestant.contestantVideo[0]}
                          title="Contestant video"
                          frameBorder="0"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                        />
                        <p className="col-contestant-result-name">
                          Name:{" "}
                          <span className="col-contestant-result__right">
                            {contestant.firstName} {contestant.lastName}
                          </span>
                        </p>
                        <p className="col-contestant-result-location">
                          Location:{" "}
                          <span className="col-contestant-result__right">
                            {contestant.state}, {contestant.country}
                          </span>
                        </p>
                        <p className="col-contestant-result-code">
                          Username:{" "}
                          <span className="col-contestant-result__right">
                            {contestant.username}
                          </span>
                        </p>
                        <p className="col-contestant-result-code">
                          <a
                            href={`${window.location}rsg/${
                              contestant.username
                            }`}
                            target="_blank"
                            style={{ color: "#fe920f" }}
                          >
                            Profile Link
                          </a>
                        </p>
                        <div className="share-channel">
                          <div className="share-channel-vote">
                            <i className="fas fa-check" /> <span>Vote</span>
                          </div>
                          <div className="share-channel-social">
                            <i className="vote-social-icons vote-social-icons-fb fab fa-facebook fa-2x" />
                            <i className="vote-social-icons vote-social-icons-tw fab fa-twitter fa-2x" />
                            <i className="vote-social-icons vote-social-icons-ig fab fa-instagram fa-2x" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <h2>No results found</h2>
                )}
              </div>
            </div>
          </div>
        ) : (
          <CurrentlyClosedComponent
            title="Vote for your favourite Rising Star Gospel Contestant"
            subtitle="Vote for your favourite contestant."
            statustitle="Voting is currently closed. Check back on 01.06.2018"
          />
        )}
      </span>
    );
  }
}

const mapStateToProps = ({ misc }) => ({
  openStatus: misc.openStatus,
  searchResults: misc.searchResults
});

const mapDispatchToProps = dispatch => ({
  displayError: bindActionCreators(displayError, dispatch),
  getSearchResult: bindActionCreators(getSearchResult, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ContestantView);
