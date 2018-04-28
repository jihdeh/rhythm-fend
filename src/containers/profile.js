import React, { Component } from "react";
import "../styles/profile.css";
import Bio from "../components/profile/bio";
import Splitads from "../components/profile/splitads";
import ProfileHeader from "../components/profile/profileHeader";
import Video from "../components/profile/video";
import Singlerowads from "../components/profile/singlerowads";
import helpers, { getStyle } from "../utils/helpers";
import ajax from "../utils/ajax";
import { connect } from "react-redux";
import { getprofile, getprofilepending } from "../actions/profileAction";
import { bindActionCreators } from "redux";

class Profile extends Component {
  constructor(props) {
    super(props);
    const { contestant, fetching } = this.props.profile;
    this.state = {
      fetching: true,
      profilePicture: ajax.backupbackground,
      country: "United States",
      state: "San Francisco CA",
      firstName: "Jessie",
      lastName: "Schwartz",
      profileUrl: "google.com",
      bio: helpers.mybio,
      videoUrl: "https://www.youtube.com/embed/-oCCnxBos10",
      uniqueCode: null,
      show: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  async componentDidMount() {
    const {
      match: { params }
    } = this.props;
    this.props.getprofilepending();
    this.props.getprofile(params.uniqueCode);
  }
  handleClick() {
    this.setState(prevState => ({ show: !prevState.show }));
  }

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

  render() {
    const {
      fetching,
      profilePicture,
      country,
      state,
      firstName,
      lastName,
      profileUrl,
      bio,
      videoUrl,
      show
    } = this.state;

    const myStyle = getStyle("myStyle", fetching, profilePicture);
    const myStyleProfile = getStyle("myStyleProfile", fetching, profilePicture);

    return (
      <div className="profile--container">
        <ProfileHeader
          myStyle={myStyle}
          state={state}
          country={country}
          profilelink={profileUrl}
          firstName={firstName}
          lastName={lastName}
          bio={bio}
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
                bio={bio}
                click={this.handleClick}
                show={show}
              />
            </div>
            <div className="col-sm-7">
              <Singlerowads />
              <Splitads />
              <Video videoUrl={videoUrl} />
              <Splitads />
            </div>
            <div className="col-sm-1" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  getprofile: bindActionCreators(getprofile, dispatch),
  getprofilepending: bindActionCreators(getprofilepending, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
