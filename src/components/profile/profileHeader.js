import React, { Component } from "react";
import Fasearch from "react-icons/lib/fa/search";
import Fabar from "react-icons/lib/fa/bars";
import { Circle, Triangle } from "react-shapes";
import propTypes from "prop-types";
import Description from "./description";

export default class ProfileHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleType = this.handleType.bind(this);
  }
  handleType(e) {
    const value = e.target.value;
    this.setState({ value });
  }
  render() {
    const { value } = this.state;
    const { name, state, country, profilelink } = this.props;
    return (
      <div className="profile--header" style={this.props.myStyle}>
        <div className="contestant--cont">
          <div className="contestant--nav">
            <span className="nav-block" />
            <div className="nav-child">
              <span className="nav--logo">SOUNDIT</span>
              <span className="inp-cont">
                <Fasearch className="search--icon" />
                {value ? null : <span className="myplaceholdder">search for artists</span>}
                <input className="inp" value={value} onChange={this.handleType} />
              </span>
              <Fabar className="profile-menu-icon" />
            </div>
            <span className="nav-block" />
          </div>
          <Description name={name} state={state} country={country} profilelink={profilelink} />

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
              stroke={{ color: "yellow" }}
              strokeWidth={12}
            />
          </span>
        </div>
      </div>
    );
  }
}

ProfileHeader.propTypes = {
  name: propTypes.string.isRequired,
  state: propTypes.string.isRequired,
  country: propTypes.string.isRequired,
  profilelink: propTypes.string.isRequired
};
