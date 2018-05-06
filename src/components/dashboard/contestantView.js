import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../../styles/dashboard.css";

class ContestantView extends Component {
  render() {
    const { user } = this.props;
    const { token } = user;
    console.log(token);

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="voter-container">
            <div>
              <p className="voter-section__title">
                <b>HI {token.firstName}</b>
                <span>good to have you on here!</span>
              </p>
            </div>
            <div className="col-sm-4 col-md-6 col-lg-6">
              <div className="col-contestant-fav">
                <h2>Getting Started!</h2>
                <p>
                  Make sure to follow SoundIt Africa on
                  Facebook/Instagram/Twitter
                </p>
                <p>Record a short (1 minute) video of yourself singing.</p>
                <p>
                  Upload this short video on any of your social media pages
                  (Instagram, Facebook or twitter).
                </p>
                <p>
                  Use the hashtag #soundItAfrica along with your uniqueCode #{
                    token.uniqueCode
                  }{" "}
                  i.e{" "}
                  <span style={{ color: "#e33235" }}>
                    #soundItAfrica #{token.uniqueCode}
                  </span>
                </p>
                <p>
                  If you wish you can add anyother description to the uploaded
                  video.
                </p>
                <p>
                  The more likes you get on your videos, the more your chances
                  of going to the next round. GOODLUCK!
                </p>
                <div className="share-channel">
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
                  title="Contestant video 2"
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
            <div className="col-sm-4 col-md-6 col-lg-6">
              <div className="col-contestant-fav">
                <h2>On the side!</h2>
                <p>
                  Your public profile link is{" "}
                  <Link
                    target="_blank"
                    style={{ color: "#e33235" }}
                    to={`${window.location}rsg/${token.uniqueCode}`}
                  >{`${window.location}rsg/${token.uniqueCode}`}</Link>{" "}
                  .<br /> Share this link with your friends and network to show
                  them where they can vote and see more about you.
                </p>
                <p>Record a short (1 minute) video of yourself singing.</p>
                <p>
                  Upload this short video on any of your social media pages
                  (Instagram, Facebook or twitter).
                </p>
                <p>
                  Use the hashtag #soundItAfrica along with your uniqueCode #{
                    token.uniqueCode
                  }{" "}
                  i.e{" "}
                  <span style={{ color: "#e33235" }}>
                    #soundItAfrica #{token.uniqueCode}
                  </span>
                </p>
                <p>
                  If you wish you can add any other description to the uploaded
                  video.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.userInfo
});

export default connect(mapStateToProps)(ContestantView);
