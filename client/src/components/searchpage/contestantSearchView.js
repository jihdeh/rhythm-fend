import React, { Component } from "react";
import get from "lodash/get";
import CurrentlyClosedComponent from "../currentlyClosed";
import { connect } from "react-redux";
import "../../styles/searchpage.css";

class ContestantView extends Component {
  render() {
    const { openStatus } = this.props;
    return (
      <span>
        {!get(openStatus, "votingOpen") ? (
          <div className="container-fluid">
            <div className="row">
              <div className="contestant-container">
                <div>
                  <p className="contestant-section__title">
                    <b>Search results</b>
                  </p>
                </div>
                <div className="col-sm-3 col-md-3 col-lg-3">
                  <div className="col-contestant-result">
                    <iframe
                      width="100%"
                      height="200px"
                      src="https://www.youtube.com/embed/-oCCnxBos10"
                      title="Contestant video"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                    <p className="col-contestant-result-name">
                      Name:{" "}
                      <span className="col-contestant-result__right">
                        Atom Dunra
                      </span>
                    </p>
                    <p className="col-contestant-result-location">
                      Location:{" "}
                      <span className="col-contestant-result__right">
                        Anambra
                      </span>
                    </p>
                    <p className="col-contestant-result-code">
                      Username:{" "}
                      <span className="col-contestant-result__right">
                        Atom231
                      </span>
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
                <div className="col-sm-3 col-md-3 col-lg-3">
                  <div className="col-contestant-result">
                    <iframe
                      width="100%"
                      height="200px"
                      src="https://www.youtube.com/embed/-oCCnxBos10"
                      title="Contestant video"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                    <p className="col-contestant-result-name">
                      Name:{" "}
                      <span className="col-contestant-result__right">
                        Atom Dunra
                      </span>
                    </p>
                    <p className="col-contestant-result-location">
                      Location:{" "}
                      <span className="col-contestant-result__right">
                        Anambra
                      </span>
                    </p>
                    <p className="col-contestant-result-code">
                      Username:{" "}
                      <span className="col-contestant-result__right">
                        Atom231
                      </span>
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
                <div className="col-sm-3 col-md-3 col-lg-3">
                  <div className="col-contestant-result">
                    <iframe
                      width="100%"
                      height="200px"
                      src="https://www.youtube.com/embed/-oCCnxBos10"
                      title="Contestant video"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                    <p className="col-contestant-result-name">
                      Name:{" "}
                      <span className="col-contestant-result__right">
                        Atom Dunra
                      </span>
                    </p>
                    <p className="col-contestant-result-location">
                      Location:{" "}
                      <span className="col-contestant-result__right">
                        Anambra
                      </span>
                    </p>
                    <p className="col-contestant-result-code">
                      Username:{" "}
                      <span className="col-contestant-result__right">
                        Atom231
                      </span>
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
                <div className="col-sm-3 col-md-3 col-lg-3">
                  <div className="col-contestant-result">
                    <iframe
                      width="100%"
                      height="200px"
                      src="https://www.youtube.com/embed/-oCCnxBos10"
                      title="Contestant video"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                    <p className="col-contestant-result-name">
                      Name:{" "}
                      <span className="col-contestant-result__right">
                        Atom Dunra
                      </span>
                    </p>
                    <p className="col-contestant-result-location">
                      Location:{" "}
                      <span className="col-contestant-result__right">
                        Anambra
                      </span>
                    </p>
                    <p className="col-contestant-result-code">
                      Username:{" "}
                      <span className="col-contestant-result__right">
                        Atom231
                      </span>
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
                <div className="col-sm-3 col-md-3 col-lg-3">
                  <div className="col-contestant-result">
                    <iframe
                      width="100%"
                      height="200px"
                      src="https://www.youtube.com/embed/-oCCnxBos10"
                      title="Contestant video"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                    <p className="col-contestant-result-name">
                      Name:{" "}
                      <span className="col-contestant-result__right">
                        Atom Dunra
                      </span>
                    </p>
                    <p className="col-contestant-result-location">
                      Location:{" "}
                      <span className="col-contestant-result__right">
                        Anambra
                      </span>
                    </p>
                    <p className="col-contestant-result-code">
                      Username:{" "}
                      <span className="col-contestant-result__right">
                        Atom231
                      </span>
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
                <div className="col-sm-3 col-md-3 col-lg-3">
                  <div className="col-contestant-result">
                    <iframe
                      width="100%"
                      height="200px"
                      src="https://www.youtube.com/embed/-oCCnxBos10"
                      title="Contestant video"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                    <p className="col-contestant-result-name">
                      Name:{" "}
                      <span className="col-contestant-result__right">
                        Jide Dunra
                      </span>
                    </p>
                    <p className="col-contestant-result-location">
                      Location:{" "}
                      <span className="col-contestant-result__right">
                        Lagos
                      </span>
                    </p>
                    <p className="col-contestant-result-code">
                      Username:{" "}
                      <span className="col-contestant-result__right">
                        Jide63u
                      </span>
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
                <div className="col-sm-3 col-md-3 col-lg-3">
                  <div className="col-contestant-result">
                    <iframe
                      width="100%"
                      height="200px"
                      src="https://www.youtube.com/embed/-oCCnxBos10"
                      title="Contestant video"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                    <p className="col-contestant-result-name">
                      Name:{" "}
                      <span className="col-contestant-result__right">
                        Atom Dunra
                      </span>
                    </p>
                    <p className="col-contestant-result-location">
                      Location:{" "}
                      <span className="col-contestant-result__right">
                        Anambra
                      </span>
                    </p>
                    <p className="col-contestant-result-code">
                      Username:{" "}
                      <span className="col-contestant-result__right">
                        Atom231
                      </span>
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
                <div className="col-sm-3 col-md-3 col-lg-3">
                  <div className="col-contestant-result">
                    <iframe
                      width="100%"
                      height="200px"
                      src="https://www.youtube.com/embed/-oCCnxBos10"
                      title="Contestant video"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                    <p className="col-contestant-result-name">
                      Name:{" "}
                      <span className="col-contestant-result__right">
                        Atom Dunra
                      </span>
                    </p>
                    <p className="col-contestant-result-location">
                      Location:{" "}
                      <span className="col-contestant-result__right">
                        Anambra
                      </span>
                    </p>
                    <p className="col-contestant-result-code">
                      Username:{" "}
                      <span className="col-contestant-result__right">
                        Atom231
                      </span>
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
  openStatus: misc.openStatus
});

export default connect(mapStateToProps)(ContestantView);
