import React, { Component } from "react";


class Edit extends Component {
  render() {
    return (
      <div className="edit-profile-body">
        <div className="row">
          <div className="col-md-4 edit-profile__picture">
            <img
              className="edit-profile__image"
              src="../../images/nobody.jpg"
              alt=""
            />
             <input 
                type="submit" 
                value="Change Picture"
                className="change-picture__button" />
          </div>
          <div className="col-md-8 edit-profile-edit">
            <form className="edit-profile-form">
              <input
                type="text"
                className="edit-profile-input"
                placeholder="First Name" 
              />
              <input
                type="text"
                className="edit-profile-input" 
                placeholder="Last Name" 
              />
              <input
                type="text"
                className="edit-profile-input" 
                placeholder="Phone Number" 
              />
              <input
                type="text"
                className="edit-profile-input" 
                placeholder="Email" 
              />
              <input
                type="text"
                className="edit-profile-input" 
                placeholder="Password" 
              />
              <div>
                <input 
                  type="submit" 
                  value="Save Changes"
                  className="edit-profile-input__save" 
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Edit;