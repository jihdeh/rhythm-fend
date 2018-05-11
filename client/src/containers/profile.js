import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { ToastContainer } from "react-toastr";
import { connect } from "react-redux";
import "../styles/profile.css";
import Bio from "../components/profile/bio";
import Splitads from "../components/profile/splitads";
import ProfileHeader from "../components/profile/profileHeader";
import Video from "../components/profile/video";
import Singlerowads from "../components/profile/singlerowads";
import Errorpage from "../components/profile/error";
import { getStyle } from "../utils/helpers";
import { getprofile, getprofilepending } from "../actions/profileAction";
import vote from "../actions/voteAction";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: true,
      profilePicture: process.env.REACT_APP_DEFAULT_BACKGROUND,
      country: "",
      state: "",
      firstName: "",
      lastName: "",
      profileUrl: "",
      about: "",
      contestantVideo: process.env.REACT_APP_ADVERT,
      username: null,
      voteCount: "1",
      email: "",
      show: false,
      showcastvote: false
    };
  }
  async componentDidMount() {
    const { match: { params } } = this.props;
    this.props.getprofilepending();
    this.props.getprofile(params.username);
  }
  handleClick = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  };
  onchangeVoteCount = e => {
    this.setState({ voteCount: e.target.value });
  };
  onShowcastvote = () => {
    this.setState(prevState => ({
      showcastvote: !prevState.showcastvote
    }));
  };
  componentWillReceiveProps(nextProps) {
    const state = {
      ...nextProps.profile.contestant,
      fetching: nextProps.profile.fetching
    };
    const prev = { ...this.state };
    if (state !== prev) {
      this.setState({ ...prev, ...state });
    }
  }

  onVote = () => {
    const { voteCount, username, email } = this.state;
    this.loadPayStack(username, voteCount, email);
  };
  successMesage = (username, voteCount) => {
    this.refs.container.success(
      `You have suuccesfully casted ${voteCount} vote(s) for ${username}`,
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
      email,
      amount: 5000 * Number(voteCount), //in kobo
      ref: "" + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
      callback: response => {
        this.props.vote({
          reference: response.reference,
          username,
          voteCount
        });
        this.onShowcastvote();
        this.successMesage(username, voteCount);
      },
      onClose: () => {
        alert("window closed");
      }
    });
    handler.openIframe();
  };
  onClear = () => {
    this.refs.container.clear();
  };

  render() {
    const {
      fetching,
      profilePicture,
      country,
      state,
      firstName,
      lastName,
      profileUrl,
      about,
      contestantVideo,
      show,
      voteCount,
      showcastvote
    } = this.state;

    const myStyle = getStyle("myStyle", fetching, profilePicture);
    const myStyleProfile = getStyle("myStyleProfile", fetching, profilePicture);
    const { error } = this.props.profile;
    const { userInfo } = this.props.auth;
    const isAuthticated = userInfo ? true : false;

    return (
      <div className="profile--container">
        <ToastContainer ref="container" className="toast-top-right" />
        <ProfileHeader
          myStyle={myStyle}
          state={state}
          country={country}
          profilelink={profileUrl}
          firstName={firstName}
          lastName={lastName}
          bio={about}
          isAuthticated={isAuthticated}
        />
        <div className="profile--body">
          <div className="row">
            <div className="col-sm-1" />
            <div className="col-sm-3">
              <Bio
                myStyle={myStyleProfile}
                state={state}
                country={country}
                profilelink={profileUrl}
                firstName={firstName}
                lastName={lastName}
                profilePicture={profilePicture}
                bio={about}
                click={this.handleClick}
                show={show}
                onchangeVoteCount={this.onchangeVoteCount}
                voteCount={voteCount}
                onShowcastvote={this.onShowcastvote}
                showcastvote={showcastvote}
                onVote={this.onVote}
              />
            </div>
            <div className="col-sm-7">
              <Singlerowads />
              <Splitads />
              <Video videoUrl={contestantVideo} />
              <Splitads />
            </div>
            <div className="col-sm-1" />
          </div>
        </div>
        <Errorpage error={error} />
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  getprofile: bindActionCreators(getprofile, dispatch),
  getprofilepending: bindActionCreators(getprofilepending, dispatch),
  vote: bindActionCreators(vote, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
