import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../../styles/dashboard.css";
import videoparser from "js-video-url-parser";
import "js-video-url-parser/lib/provider/youtube";

class ContestantView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasVideo: false,
      videourl: "",
      url: ""
    };
  }
  onSave = async => {
    try {
      const { url } = this.state;
      let videourl = videoparser.create({
        videoInfo: videoparser.parse(url),
        format: "embed"
      });
      this.setState({
        hasVideo: true,
        videourl
      });
    } catch (e) {
      console.log("error", e.message);
      alert("Invalid URL");
    }
  };
  render() {
    const { user } = this.props;
    const { token } = user;
    const { hasVideo, videourl } = this.state;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="voter-container">
            <p className="voter-section__title">
              <b>HI {token.firstName}</b>
              <span>good to have you on here!</span>
            </p>

            <h2>Profile Details</h2>
            <div className="col-contestant-fav">
              <div className="col-sm-6 col-md-6 col-lg-6">
                <div className="col-contestant-profile-photo">
                  <img
                    className="dashboard-profile__image img-responsive"
                    src="../../images/nobody.jpg"
                    alt=""
                  />
                </div>
                <div className="col-contestant-social-icons">
                  <a href="">Public Profile</a>
                  <div className="contestants-media-icons">
                    <a href="">
                      <i className="social-profile fab fa-facebook-f" />{" "}
                    </a>
                    <a href="">
                      <i className="social-profile fab fa-twitter" />{" "}
                    </a>
                    <a href="">
                      <i className="social-profile fab fa-instagram" />
                    </a>
                  </div>
                </div>
                <div className="col-contestant-bio">
                  <h2>Jim James</h2>
                  <p>
                    Jim James is a sales marketer from ABC Industries, Lagos, an
                    inbound marketing and sales platform that helps companies
                    attract visitors, convert leads, and close customers. He
                    graduated with honors from Lagos State University with a
                    dual degree in Business Administration and Creative Writing.
                  </p>
                </div>
              </div>

              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="col-contestant-profile">
                  <div className="col-contestant-profile-items">
                    <p className="col-contestant-profile__key">First Name:</p>
                    <p className="col-contestant-profile__value">John</p>
                  </div>
                  <div className="col-contestant-profile-items">
                    <p className="col-contestant-profile__key">Last Name:</p>
                    <p className="col-contestant-profile__value">Doe</p>
                  </div>
                  <div className="col-contestant-profile-items">
                    <p className="col-contestant-profile__key">Username:</p>
                    <p className="col-contestant-profile__value">johndoe</p>
                  </div>
                  <div className="col-contestant-profile-items">
                    <p className="col-contestant-profile__key">Email:</p>
                    <p className="col-contestant-profile__value">
                      johndoe@x.com
                    </p>
                  </div>
                  <div className="col-contestant-profile-items">
                    <p className="col-contestant-profile__key">Country:</p>
                    <p className="col-contestant-profile__value">Nigeria</p>
                  </div>
                  <div className="col-contestant-profile-items">
                    <p className="col-contestant-profile__key">State:</p>
                    <p className="col-contestant-profile__value">Lagos</p>
                  </div>
                  {hasVideo ? (
                    <div>
                      <p className="col-contestant-profile__key">
                        YouTube Video:
                      </p>
                      <iframe
                        width="100%"
                        height="200px"
                        src={videourl}
                        title="Contestant video 2"
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <div className="youtube-video-upload">
                      <div className="youtube-video-container">
                        <p>Please provide the link to your youtube video</p>
                      </div>
                      <input
                        className="youtube-video-input"
                        type="text"
                        placeholder="Your youtube link here"
                        onChange={({ target }) =>
                          this.setState({ url: target.value })
                        }
                      />
                      <span>
                        <button
                          className="youtube-video-save-button"
                          onClick={this.onSave}
                        >
                          Save Video
                        </button>
                      </span>
                    </div>
                  )}
                  <div className="col-contestant-button">
                    <button className="col-contestant-update-button">
                      Update Profile
                    </button>
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
                    to={`${window.location}rsg/${token.username}`}
                  >{`${window.location}rsg/${token.username}`}</Link>{" "}
                  .<br /> Share this link with your friends and network to show
                  them where they can vote and see more about you.
                </p>
                <p>Record a short (1 minute) video of yourself singing.</p>
                <p>
                  Upload this short video on any of your social media pages
                  (Instagram, Facebook or twitter).
                </p>
                <p>
                  Use the hashtag #soundItAfrica along with your username #{
                    token.username
                  }{" "}
                  i.e{" "}
                  <span style={{ color: "#e33235" }}>
                    #soundItAfrica #{token.username}
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
