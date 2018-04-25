import React, { Component } from "react";
import "../styles/profile.css";
import Bio from "../components/profile/bio";
import AdsLong from "../components/profile/ads-long";
import Splitads from "../components/profile/splitads";
import ProfileHeader from "../components/profile/profileHeader";
import Video from "../components/profile/video";
import Singlerowads from "../components/profile/singlerowads";
import Description from "../components/profile/description";

export default class Profile extends Component {
  render() {
    const myStyle = {
      backgroundImage: `url(
        https://images.pexels.com/photos/167446/pexels-photo-167446.jpeg?cs=srgb&dl=adult-beard-blur-167446.jpg&fm=jpg
      )`
    };
    return (
      <div className="profile--container">
        <ProfileHeader
          myStyle={myStyle}
          name={"Jessie Schwartz"}
          state={"San Francisco CA"}
          country={"United States"}
          profilelink={"google.com"}
        />
        <div className="profile--body">
          <div className="row">
            <div className="col-sm-1" />
            <div className="col-sm-3">
              <Bio
                myStyle={myStyle}
                name={"Jessie Schwartz"}
                state={"San Francisco CA"}
                country={"United States"}
                profilelink={"google.com"}
              />
            </div>
            <div className="col-sm-7">
              <Singlerowads />
              <Splitads />
              <Video />
              <Splitads />
            </div>
            <div className="col-sm-1" />
          </div>
        </div>
      </div>
    );
  }
}
