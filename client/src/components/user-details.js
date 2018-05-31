import React, { Component } from "react";

export default class UserDetails extends Component {
  render() {
    return (
      <div className="row user-details-body">
        <div>
          <h2 className="user-details-body-title">User Details</h2>
          <div className="col-sm-6">
          <div className="user-details-profile-photo">
            <img
              className="user-details__image img-responsive"
              src="../../images/nobody.jpg"
              alt=""
            />
          </div>
          <br />
          {/*<div className="user-details-social-icons">
            <i className="fab fa-facebook-f" />
            <i className="fab fa-twitter" />
            <i className="fab fa-instagram" />
          </div>*/}
          <br/>
          <div className="user-details-bio">
            <h2>John Doe</h2>
            <p>
              John Doe is a contestant on
              soundItAfrica Season 2. We believe he has great talent,
              and would give all it takes to get you entertained.
              Cheers.
            </p>
          </div>
          </div>
          <div className="col-sm-6">
          <div className="user-details-profile">
            <div className="user-details-profile-items">
              <p className="user-details-profile__key">Name:</p>
              <p className="user-details-profile__value">
                John Doe
              </p>
            </div>
            <div className="user-details-profile-items">
              <p className="user-details-profile__key">Username:</p>
              <p className="user-details-profile__value">
                jonnyy
              </p>
            </div>
            <div className="user-details-profile-items">
              <p className="user-details-profile__key">Email:</p>
              <p className="user-details-profile__value">
                jonnyy@x.com
              </p>
            </div>
            <div className="user-details-profile-items">
              <p className="user-details-profile__key">Phone Number:</p>
              <p className="user-details-profile__value">
                07032218882
              </p>
            </div>
            <div className="user-details-profile-items">
              <p className="user-details-profile__key">Country:</p>
              <p className="user-details-profile__value">
                Nigeria
              </p>
            </div>
            <div className="user-details-profile-items">
              <p className="user-details-profile__key">State:</p>
              <p className="user-details-profile__value">
                Lagos
              </p>
            </div>
            <br />
            <div className="user-details-profile-video">
              <iframe
                width="100%"
                height="300px"
                src="https://www.youtube.com/embed/uObZkBUWgew"
                title="Contestant video 2"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div> 
            <br />
            <div className="user-details-edit-video">
              <input 
                className="user-details-edit-video__input"
                type="text"
                placeholder="Edit Video"
              />
            </div>
              <button className="user-details-edit-video__button">
                Save
              </button>
          </div> 
        </div>
        </div> 
      </div>
    );
  }
}