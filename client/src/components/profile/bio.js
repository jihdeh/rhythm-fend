import React from 'react';
import Description from './description';
import Nameoverlay from './nameoverlay';
import { formatString } from '../../utils/helpers';

const bio = ({
  myStyle,
  firstName,
  lastName,
  state,
  country,
  profilelink,
  bio,
  show,
  click,
  profilePhoto,
  voteCount,
  onchangeVoteCount,
  onShowCastVote,
  onVote,
  loadingPaystack,
  isAuthticated
}) => (
  <div className="contestant--profile">
    <div className="contestant--cont">
      <div className="contestant--image bio--aspect--ratio" style={myStyle}>
        <Nameoverlay
          firstName={firstName}
          lastName={lastName}
          profilePhoto={profilePhoto}
        />
        <div className="image--overlay">
          {firstName ? (
            <div className="bio-buttons">
              <span className="to-hide">
                <Description
                  name={formatString(`${firstName} ${lastName}`)}
                  state={state}
                  country={country}
                  profilelink={profilelink}
                  click={click}
                  show={show}
                />
              </span>
              {!isAuthticated && (
                <span className="pa--vote">
                  <span className="Vote--button" onClick={onShowCastVote}>
                    Vote {formatString(firstName)}
                  </span>
                </span>
              )}
            </div>
          ) : null}
        </div>
      </div>
      {bio ? (
        <div className="contestant--bio bio--aspect--ratio">
          <span className="mydetail--header">ABOUT</span>
          <span className="mydetail">{bio}</span>
        </div>
      ) : (
        <div className="contestant--bio bio--aspect--ratio">
          <span className="mydetail--header">ABOUT</span>
          <span className="mydetail">
            {formatString(firstName)} is a contestant on soundItAfrica Season 2.
            We believe this person has great talent, and would give all it takes
            to get you entertained. Cheers.
          </span>
        </div>
      )}
    </div>
  </div>
);

export default bio;
