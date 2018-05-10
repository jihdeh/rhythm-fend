import React, { Component } from "react";
import Edit from "../components/edit-profile";
import "../styles/edit-profile.css";

class EditProfile extends Component {
  render() {
    return (
      <div className="edit-profile-container">
        <Edit />
      </div>
    )
  }
}

export default EditProfile;
