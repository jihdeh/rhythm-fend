import React, { Component } from "react";
import Iomore from "react-icons/lib/io/more";
import Description from "./description";

const bio = ({ myStyle, name, state, country, profilelink }) => (
  <div className="contestant--profile">
    <div className="contestant--cont">
      <div className="contestant--image bio--aspect--ratio" style={myStyle}>
        <div className="image--overlay">
          <div className="bio-buttons">
            <span className="to-hide">
              <Description name={name} state={state} country={country} profilelink={profilelink} />
            </span>
            <span className="Vote--button">Vote Jessie</span>
            <span className="more--button">
              <Iomore />
            </span>
          </div>
        </div>
      </div>
      <div className="contestant--bio bio--aspect--ratio">
        <span className="mydetail--header">ABOUT</span>
        <span class="mydetail">
          It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using 'Content here, content
          here', making it look like readable English. Many desktop publishing packages
        </span>
      </div>
    </div>
  </div>
);

export default bio;
