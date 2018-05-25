import React, { Component } from "react";
import get from "lodash/get";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getSearchResult } from "../../actions/miscActions";
import { displayError } from "../../actions/errorActions";
import Spinner from "react-activity/lib/Spinner";
import CurrentlyClosedComponent from "../currentlyClosed";
import "../../styles/searchpage.css";
import "react-activity/lib/Spinner/Spinner.css";
import { ToastContainer } from "react-toastr";
import VoteModal from "../voteModal";
import vote from "../../actions/voteAction";

class ContestantView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      isLoading: false,
      voteCount: "",
      showcastvote: false,
      loadingPaystack: false,
      email: ""
    };
  }
  onchangeVoteCount = e => {
    this.setState({ voteCount: e.target.value });
  };
  onchangeVoteAmount = val => {
    this.setState({ voteCount: val });
  };
  onShowcastvote = e => {
    const username = e.currentTarget.dataset.username;
    this.setState(prevState => ({
      showcastvote: !prevState.showcastvote,
      username
    }));
  };
  onVote = e => {
    const { voteCount, email, username } = this.state;
    this.setState({
      loadingPaystack: true
    });
    this.loadPayStack(username, voteCount, email);
  };
  successMesage = (username, voteCount) => {
    this.refs.container.success(
      `You have succesfully casted ${voteCount} vote(s) for ${username}`,
      "",
      {
        timeOut: 30000,
        extendedTimeOut: 10000
      }
    );
  };
  loadPayStack = (username, voteCount, email) => {
    var handler = window.PaystackPop.setup({
      key: process.env.REACT_APP_PAYSTACK_KEY,
      email: email || "jide.b.tade@gmail.com",
      amount: 10000 * Number(voteCount), //in kobo
      ref: "" + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
      callback: response => {
        this.props.vote({
          reference: response.reference,
          username,
          voteCount
        });
        this.setState({
          voteCount: "",
          loadingPaystack: false,
          showcastvote: false
        });
        this.successMesage(username, voteCount);
      },
      onClose: () => {
        alert("window closed");
        this.setState({
          loadingPaystack: false,
          showcastvote: false,
          voteCount: ""
        });
      }
    });
    handler.openIframe();
  };
  onClear = () => {
    this.refs.container.clear();
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
    const { isLoading, voteCount, showcastvote, loadingPaystack } = this.state;

    return (
      <span>
        <VoteModal
          voteCount={voteCount}
          showcastvote={showcastvote}
          onVote={this.onVote}
          onchangeVoteAmount={this.onchangeVoteAmount}
          onchangeVoteCount={this.onchangeVoteCount}
          loadingPaystack={loadingPaystack}
        />
        <ToastContainer ref="container" className="toast-top-right" />
        {openStatus ? (
          get(openStatus, "votingOpen") ? (
            <div className="container-fluid">
              <div className="row">
                <div className="contestant-container">
                  <div>
                    <p className="contestant-section__title">
                      <b>Search results</b>
                    </p>
                    <form
                      className="contestant-container__form"
                      onSubmit={this.fetchResult}
                    >
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
                        <button className="search-input__button">
                          <i className="fas fa-search searchpage-icon" />
                        </button>

                        {isLoading ? <Spinner color="#ffffff" /> : null}
                      </span>
                    </form>
                  </div>
                  <h4>SoundIT Africa Contestants</h4>
                  <div className="grid-suspenders" />
                  {searchResults.length ? (
                    searchResults.map((contestant, key) => (
                      <div key={key} className="col-sm-6 col-md-4 col-lg-3">
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
                              href={`${window.location.origin}/rsg/${
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
                              <i className="fas fa-check" />{" "}
                              <span
                                data-username={contestant.username}
                                onClick={this.onShowcastvote}
                              >
                                Vote
                              </span>
                            </div>
                            <div className="share-channel-social">
                              {contestant.facebook && (
                                <i className="vote-social-icons vote-social-icons-fb fab fa-facebook fa-2x" />
                              )}
                              {contestant.twitter && (
                                <i className="vote-social-icons vote-social-icons-tw fab fa-twitter fa-2x" />
                              )}
                              {contestant.instagram && (
                                <i className="vote-social-icons vote-social-icons-ig fab fa-instagram fa-2x" />
                              )}
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
          )
        ) : (
          <div style={{ background: "#121212", paddingTop: "13%" }}>
            <div className="wrap">
              <h2 style={{ color: "#FFFFFF" }}>Loading...</h2>
            </div>
          </div>
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
  getSearchResult: bindActionCreators(getSearchResult, dispatch),
  vote: bindActionCreators(vote, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ContestantView);
