import React, { Component } from "react";
import { Link } from "react-router-dom";

class VoterView extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="voter-container">
            <div>
              <p className="voter-section__title">
                <b>Your Favourite</b>
                <span>based on who you voted for recently</span>
              </p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <div className="col-contestant-fav">
                <iframe
                  width="100%"
                  height="200px"
                  src="https://www.youtube.com/embed/-oCCnxBos10"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
                <p className="col-contestant-fav-name">Name: Atom Dunra</p>
                <p className="col-contestant-fav-location">Location: Anambra</p>
                <p className="col-contestant-fav-code">Star Code: Atom231</p>
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
            <div className="col-sm-4 col-md-4 col-lg-4">
              <div className="col-contestant-fav">
                <iframe
                  width="100%"
                  height="200px"
                  src="https://www.youtube.com/embed/E4YRYDUPbQ8"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
                <p className="col-contestant-fav-name">Name: Jide Dunra</p>
                <p className="col-contestant-fav-location">Location: Lagos</p>
                <p className="col-contestant-fav-code">Star Code: Jide63u</p>
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

        <div className="grid-suspenders" />
        <div className="row">
          <div className="voter-container">
            <div>
              <p className="voter-section__title">
                <b>Other People</b>
                <span>you might like</span>
              </p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <div className="col-contestant-fav">
                <iframe
                  width="100%"
                  height="200px"
                  src="https://www.youtube.com/embed/-oCCnxBos10"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
                <p className="col-contestant-fav-name">Name: Atom Dunra</p>
                <p className="col-contestant-fav-location">Location: Anambra</p>
                <p className="col-contestant-fav-code">Star Code: Atom231</p>
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
            <div className="col-sm-4 col-md-4 col-lg-4">
              <div className="col-contestant-fav">
                <iframe
                  width="100%"
                  height="200px"
                  src="https://www.youtube.com/embed/E4YRYDUPbQ8"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
                <p className="col-contestant-fav-name">Name: Jide Dunra</p>
                <p className="col-contestant-fav-location">Location: Lagos</p>
                <p className="col-contestant-fav-code">Star Code: Jide63u</p>
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

            <div className="col-sm-4 col-md-4 col-lg-4">
              <div className="col-contestant-fav">
                <iframe
                  width="100%"
                  height="200px"
                  src="https://www.youtube.com/embed/4wAu7KaMYPg"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
                <p className="col-contestant-fav-name">Name: Test Dunra</p>
                <p className="col-contestant-fav-location">Location: Ogun</p>
                <p className="col-contestant-fav-code">Star Code: Text638</p>
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
        <div className="view-all-search">
          <h4>
            And 200 more. <Link to="/search">View all</Link>
          </h4>
        </div>
      </div>
    );
  }
}

export default VoterView;
