import React, { Component } from "react";
import "../styles/profile.css";
import Bio from "../components/profile/bio";
import Splitads from "../components/profile/splitads";
import ProfileHeader from "../components/profile/profileHeader";
import Video from "../components/profile/video";
import Singlerowads from "../components/profile/singlerowads";
import helpers, { getcontestant, getStyle } from "../utils/helpers";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fetching: true,
      profilePicture: null,
      country: null,
      state: null,
      firstName: null,
      lastName: null,
      profileUrl: null,
      bio: null,
      videoUrl: null,
      uniqueCode: null,
      show: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  async componentDidMount() {
    const {
      match: { params }
    } = this.props;

    const response = await getcontestant(params.uniqueCode);

    if (response) {
      this.setState(prevState => ({
        ...prevState,
        ...response,
        fetching: false
      }));
    }
  }
  handleClick() {
    this.setState(prevState => ({ show: !prevState.show }));
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
          state={state || "San Francisco CA"}
          country={country || "United States"}
          profilelink={profileUrl || "google.com"}
          firstName={firstName || "Jessie"}
          lastName={lastName || "Schwartz"}
          bio={bio || helpers.mybio}
        />
        <div className="profile--body">
          <div className="row">
            <div className="col-sm-1" />
            <div className="col-sm-3">
              <Bio
                myStyle={myStyleProfile}
                state={state || "San Francisco CA"}
                country={country || "United States"}
                profilelink={profileUrl || "google.com"}
                firstName={firstName || "Jessie"}
                lastName={lastName || "Schwartz"}
                bio={bio || helpers.mybio}
                click={this.handleClick}
                show={show}
              />
            </div>
            <div className="col-sm-7">
              <Singlerowads />
              <Splitads />
              <Video
                videoUrl={
                  videoUrl || "https://www.youtube.com/embed/-oCCnxBos10"
                }
              />
              <Splitads />
            </div>
            <div className="col-sm-1" />
          </div>
        </div>
      </div>
    );
  }
}
