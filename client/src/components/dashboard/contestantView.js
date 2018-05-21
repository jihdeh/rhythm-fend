import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import get from "lodash/get";
import videoparser from "js-video-url-parser";
import "js-video-url-parser/lib/provider/youtube";
import "../../styles/dashboard.css";
import {
  updateProfile,
  getProfile,
  resetUpdateProfile
} from "../../actions/profileAction";

class ContestantView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canSave: false,
      videoUrl: "",
      url: ""
    };
  }

  formatYoutubeUrl(url) {
    var newUrl;
    if (url.indexOf("https://www.youtube.com/watch") !== -1) {
      newUrl = url.replace(
        "https://www.youtube.com/watch?v=",
        "https://www.youtube.com/embed/"
      );
    } else if (url.indexOf("https://youtu.be/") !== -1) {
      newUrl = url.replace(
        "https://youtu.be/",
        "https://www.youtube.com/embed/"
      );
    } else if (url.indexOf("https://m.youtube.com/watch") !== -1) {
      newUrl = url.replace(
        "https://m.youtube.com/watch?v=",
        "https://www.youtube.com/embed/"
      );
    } else {
      return url;
    }
    return newUrl;
  }

  onSave = async => {
    const { user: { token: profile } } = this.props;
    const { url } = this.state;
    const youtubeUrl = this.formatYoutubeUrl(url);
    this.props.updateProfile({ contestantVideo: [youtubeUrl] }, profile);
    this.setState({
      canSave: false
    });
  };

  onPreview = async => {
    try {
      const { url } = this.state;

      let videoUrl = videoparser.create({
        videoInfo: videoparser.parse(url),
        format: "embed"
      });
      console.log("---", videoUrl);
      this.setState({
        canSave: true,
        videoUrl
      });
    } catch (e) {
      console.log("error", e.message);
      this.setState({
        canSave: false
      });
      alert("Sorry,the link you entered might be broken");
    }
  };

  render() {
    const { user, profile } = this.props;
    const { canSave, videoUrl } = this.state;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="voter-container">
            <p className="voter-section__title">
              <b>HI {profile.firstName}</b>
              <span>good to have you on here!</span>
            </p>

            <h2>Profile Details</h2>
            <div className="col-contestant-fav lead-section">
              <div className="col-sm-6 col-md-6 col-lg-6 media-profile">
                <div className="col-contestant-profile-photo">
                  <img
                    className="dashboard-profile__image img-responsive"
                    src="../../images/nobody.jpg"
                    alt=""
                  />
                </div>
                <div className="col-contestant-social-icons">
                  <Link
                    target="_blank"
                    style={{ color: "#e33235" }}
                    to={`${window.location}rsg/${profile.username}`}
                  >
                    Public Profile
                  </Link>
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

              <div className="col-sm-6 col-md-6 col-lg-6 info-profile">
                <div className="col-contestant-profile">
                  <div className="col-contestant-profile-items">
                    <p className="col-contestant-profile__key">Name:</p>
                    <p className="col-contestant-profile__value">
                      {profile.firstName} {profile.lastName}
                    </p>
                  </div>
                  <div className="col-contestant-profile-items">
                    <p className="col-contestant-profile__key">Username:</p>
                    <p className="col-contestant-profile__value">
                      {profile.username}
                    </p>
                  </div>
                  <div className="col-contestant-profile-items">
                    <p className="col-contestant-profile__key">Email:</p>
                    <p className="col-contestant-profile__value">
                      {profile.email}
                    </p>
                  </div>
                  <div className="col-contestant-profile-items">
                    <p className="col-contestant-profile__key">Country:</p>
                    <p className="col-contestant-profile__value">
                      {profile.country}
                    </p>
                  </div>
                  <div className="col-contestant-profile-items">
                    <p className="col-contestant-profile__key">State:</p>
                    <p className="col-contestant-profile__value">
                      {profile.state}
                    </p>
                  </div>
                  {get(profile, "contestantVideo.length") || videoUrl ? (
                    <div>
                      <p className="col-contestant-profile__key">
                        YouTube Video:
                      </p>
                      <div className="holds-the-iframe">
                        <iframe
                          width="100%"
                          height="200px"
                          src={videoUrl || profile.contestantVideo[0]}
                          title="Contestant video 2"
                          frameBorder="0"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                        />
                      </div>
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
                          onClick={this.onPreview}
                        >
                          Preview Video before save
                        </button>
                      </span>
                    </div>
                  )}
                  <br />
                  {this.state.canSave && (
                    <div className="youtube-video-upload">
                      <span>
                        <button
                          className="youtube-video-save-button"
                          onClick={this.onSave}
                        >
                          Save
                        </button>
                      </span>
                    </div>
                  )}
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
                    to={`${window.location}rsg/${profile.username}`}
                  >{`${window.location}rsg/${profile.username}`}</Link>{" "}
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
                    profile.username
                  }{" "}
                  i.e{" "}
                  <span style={{ color: "#e33235" }}>
                    #soundItAfrica #{profile.username}
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

const mapStateToProps = ({ auth, profile }) => ({
  user: auth.userInfo,
  profile: profile.contestant,
  profileUpdated: profile.profileUpdated
});

const mapDispatchToProps = dispatch => ({
  updateProfile: bindActionCreators(updateProfile, dispatch),
  getProfile: bindActionCreators(getProfile, dispatch),
  resetUpdateProfile: bindActionCreators(resetUpdateProfile, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ContestantView);
