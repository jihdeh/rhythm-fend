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
                placeholder="Password" 
              />
              <input
                type="text"
                className="edit-profile-input" 
                placeholder="Country" 
              />
              <input
                type="text"
                className="edit-profile-input" 
                placeholder="State" 
              />
              <input
                type="text"
                className="edit-profile-input" 
                placeholder="Facebook Link" 
              />
              <input
                type="text"
                className="edit-profile-input" 
                placeholder="Twitter Link" 
              />
              <input
                type="text"
                className="edit-profile-input" 
                placeholder="Instagram Link" 
              />
              <textarea
                className="edit-profile-textarea"
                placeholder="A short bio about you"
                rows="5"
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