import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ToastContainer, toast } from "react-toastify";
import {
  updateProfile,
  getProfile,
  updatePassword,
  resetUpdateProfile
} from "../actions/profileAction";
import { displayError } from "../actions/errorActions";
import Spinner from "react-activity/lib/Spinner";
import "react-activity/lib/Spinner/Spinner.css";
import "react-toastify/dist/ReactToastify.css";

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
      password: "",
      about: "",
      profilePhoto: "",
      defaultPhoto: false,
      isPwdLoading: false,
      displayPhoto: "../../images/nobody.jpg"
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
        isLoading: null,
        isPwdLoading: false
      });
      this.successMesage();
    }
  }

  onInputChange(value, field) {
    this.setState({
      [field]: value
    });
  }

  getBase64(evt) {
    let file = evt.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.setState({
          displayPhoto: reader.result,
          profilePhoto: file,
          defaultPhoto: true
        });
      };
      reader.onerror = function(error) {
        console.log("Error: ", error);
      };
    }
  }

  onSubmit = evt => {
    evt.preventDefault();
    const { user: { token: profile }, updateProfile } = this.props;
    let newState = Object.assign({}, this.state); // Copy state
    if (newState.displayPhoto === "../../images/nobody.jpg") {
      //default
      delete newState.profilePhoto;
    }
    newState.displayPhoto = null;
    delete newState.random;
    updateProfile({ ...newState }, profile);
    this.setState({
      isLoading: true
    });
  };

  successMesage = () => {
    toast.success(`succesfully updated`);
  };

  updatePassword = evt => {
    evt.preventDefault();
    const { password } = this.state;
    const trimPassword = password.trim();
    const {
      user: { token: profile },
      displayError,
      updatePassword
    } = this.props;
    if (!trimPassword) {
      displayError("Please enter password to update");
      return;
    }
    updatePassword(profile, this.state.password);
    this.setState({
      isPwdLoading: true
    });
  };

  render() {
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
      displayPhoto,
      defaultPhoto,
      isLoading,
      password,
      isPwdLoading
    } = this.state;

    return (
      <div className="edit-profile-body">
        <ToastContainer ref="container" className="toast-top-right" />
        <div className="row">
          <div className="col-md-4 edit-profile__picture">
            <img
              className="edit-profile__image"
              src={profilePhoto && !defaultPhoto ? profilePhoto : displayPhoto}
              alt=""
            />
            <input
              type="file"
              accept="image/*"
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
            <hr />
            <div>
              <form onSubmit={this.updatePassword}>
                <input
                  type="password"
                  className="edit-profile-input"
                  placeholder="Update password"
                  onChange={({ target: { value } }) =>
                    this.onInputChange(value.trim(), "password")
                  }
                  value={password.trim()}
                />
                <div>
                  <input
                    type="submit"
                    value="Update Password"
                    disabled={isPwdLoading}
                    className="edit-profile-input__save"
                  />
                  {isPwdLoading && <Spinner color="#ffffff" />}
                </div>
              </form>
            </div>
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
  updatePassword: bindActionCreators(updatePassword, dispatch),
  getProfile: bindActionCreators(getProfile, dispatch),
  displayError: bindActionCreators(displayError, dispatch),
  resetUpdateProfile: bindActionCreators(resetUpdateProfile, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
