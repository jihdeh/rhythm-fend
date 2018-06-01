import React, { Component } from "react";
import Fasearch from "react-icons/lib/fa/search";
import { Circle, Triangle } from "react-shapes";
import propTypes from "prop-types";
import Description from "./description";

export default class ProfileHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      show: false
    };
  }
  handleType = e => {
    const value = e.target.value;
    this.setState({ value });
  };
  handleClick = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  };
  render() {
    const { value, show } = this.state;
    const {
      myStyle,
      firstName,
      lastName,
      state,
      country,
      profilelink,
      isAuthticated
    } = this.props;
    return (
      <div className="profile--header" style={myStyle}>
        <div className="contestant--cont">
          <div className="contestant--nav">
            <span className="nav-block" />
            <div className="nav-child">
              {!isAuthticated ? (
                <span className="search-profile-input-cont">
                  <Fasearch className="search--icon" />
                  {value ? null : (
                    <span className="myplaceholdder">search for contestants</span>
                  )}
                  <input
                    className="search-profile-input"
                    value={value}
                    onChange={this.handleType}
                  />
                </span>
              ) : null}
            </div>
            <span className="nav-block" />
          </div>

          {firstName ? (
            <Description
              name={`${firstName} ${lastName}`}
              state={state}
              country={country}
              profilelink={profilelink}
              click={this.handleClick}
              show={show}
            />
          ) : null}

          <span className="shape--circle">
            <Circle
              r={30}
              fill={{ color: "transparent" }}
              stroke={{ color: "white" }}
              strokeWidth={12}
            />
          </span>
          <span className="shape--triangle">
            <Triangle
              width={80}
              height={80}
              fill={{ color: "transparent" }}
              stroke={{ color: "#FA9300" }}
              strokeWidth={12}
            />
          </span>
        </div>
      </div>
    );
  }
}

ProfileHeader.propTypes = {
  firstName: propTypes.string.isRequired,
  lastName: propTypes.string.isRequired,
  state: propTypes.string.isRequired,
  country: propTypes.string.isRequired,
  profilelink: propTypes.string.isRequired
};
