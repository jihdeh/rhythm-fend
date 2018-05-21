import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  updateProfile,
  getProfile,
  resetUpdateProfile
} from "../actions/profileAction";
import Spinner from "react-activity/lib/Spinner";
import "react-activity/lib/Spinner/Spinner.css";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: null,
      firstName: "",
      lastName: "",
      country: "",
      state: "",
      facebook: "",
      twitter: "",
      instagram: "",
      about: "",
      profilePhoto: ""
    };
  }

  componentWillMount() {
    const { user: { token } } = this.props;
    this.props.getProfile(token.username);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile) {
      this.setState({
        ...this.state,
        ...nextProps.profile
      });
    }
    if (nextProps.profileUpdated || nextProps.error) {
      this.props.resetUpdateProfile();
      this.setState({
        isLoading: null
      });
    }
  }

  onInputChange(value, field) {
    this.setState({
      [field]: value
    });
  }

  getBase64(evt) {
    let file = evt.target.files[0];
    console.log(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
      console.log(reader.result);
    };
    reader.onerror = function(error) {
      console.log("Error: ", error);
    };
  }

  onSubmit = evt => {
    evt.preventDefault();
    const { user: { token: profile } } = this.props;

    this.props.updateProfile({ ...this.state }, profile);
    this.setState({
      isLoading: true
    });
  };

  render() {
    const { profile } = this.props;

    const {
      firstName,
      lastName,
      country,
      state,
      facebook,
      twitter,
      instagram,
      about,
      profilePhoto,
      isLoading
    } = this.state;

    return (
      <div className="edit-profile-body">
        <div className="row">
          <div className="col-md-4 edit-profile__picture">
            <img
              className="edit-profile__image"
              src={
                profile.profilePhoto
                  ? profile.profilePhoto
                  : profilePhoto ? profilePhoto : "../../images/nobody.jpg"
              }
              alt=""
            />
            <input
              type="file"
              onChange={event => this.getBase64(event, "profilePhoto")}
              className="change-picture__button"
            />
          </div>
          <div className="col-md-8 edit-profile-edit">
            <form className="edit-profile-form" onSubmit={this.onSubmit}>
              <input
                type="text"
                className="edit-profile-input"
                placeholder="First Name"
                onChange={({ target: { value } }) =>
                  this.onInputChange(value, "firstName")
                }
                value={firstName || ""}
              />
              <input
                type="text"
                className="edit-profile-input"
                placeholder="Last Name"
                onChange={({ target: { value } }) =>
                  this.onInputChange(value, "lastName")
                }
                value={lastName || ""}
              />
              <input
                type="text"
                className="edit-profile-input"
                placeholder="Country"
                onChange={({ target: { value } }) =>
                  this.onInputChange(value, "country")
                }
                value={country || ""}
              />
              <input
                type="text"
                className="edit-profile-input"
                placeholder="State"
                onChange={({ target: { value } }) =>
                  this.onInputChange(value, "state")
                }
                value={state || ""}
              />
              <input
                type="text"
                className="edit-profile-input"
                placeholder="Facebook Link"
                onChange={({ target: { value } }) =>
                  this.onInputChange(value, "facebook")
                }
                value={facebook || ""}
              />
              <input
                type="text"
                className="edit-profile-input"
                placeholder="Twitter Link"
                onChange={({ target: { value } }) =>
                  this.onInputChange(value, "twitter")
                }
                value={twitter || ""}
              />
              <input
                type="text"
                className="edit-profile-input"
                placeholder="Instagram Link"
                onChange={({ target: { value } }) =>
                  this.onInputChange(value, "instagram")
                }
                value={instagram || ""}
              />
              <textarea
                className="edit-profile-textarea"
                placeholder="A short bio about you"
                rows="5"
                onChange={({ target: { value } }) =>
                  this.onInputChange(value, "about")
                }
                value={about || ""}
              />
              <div>
                <input
                  type="submit"
                  value="Save Changes"
                  disabled={isLoading}
                  className="edit-profile-input__save"
                />
                {isLoading && <Spinner color="#ffffff" />}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth, profile }) => ({
  user: auth.userInfo,
  profile: profile.contestant,
  profileUpdated: profile.profileUpdated
});

const mapDispatchToProps = dispatch => ({
  updateProfile: bindActionCreators(updateProfile, dispatch),
  getProfile: bindActionCreators(getProfile, dispatch),
  resetUpdateProfile: bindActionCreators(resetUpdateProfile, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
