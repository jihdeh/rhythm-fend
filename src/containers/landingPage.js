import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { login } from "../actions/authActions";
import SectionTwo from "../components/homepage/sectionTwo";
import MobileHome from "../components/homepage/mobileHome";
import "../styles/home.css";

class LandingPage extends Component {
  state = {
    emailInput: "",
    passwordInput: "",
    loading: null
  };

  validateEmail = email => {
    var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailPattern.test(email.toLowerCase());
  };

  detectKey = e => {
    if (e.keyCode === 13) {
      this.onLogin(e);
    }
    return;
  };
  onLogin = e => {
    let emailInput = this.state.emailInput.trim();
    let passwordInput = this.state.passwordInput.trim();
    e.preventDefault();

    const hasFilledInputs = !emailInput || !passwordInput;
    const isEmailValid = this.validateEmail(emailInput);
    if (hasFilledInputs) {
      // this.props.displayError("Both the email and password must be entered!");
      return;
    }
    if (!isEmailValid) {
      // this.props.displayError("A valid email address is required.");
      return;
    }

    this.setState({
      loading: true
    });

    this.props.login({
      email: emailInput,
      password: passwordInput
    });
  };

  render() {
    return (
      <div>
        <div className="banner">
          <div className="row">
            <div className="sa-text">
              <span className="sa-text__title">
                <img
                  src="https://images.vexels.com/media/users/3/131548/isolated/preview/9e36529b6e31cc4bae564fc2d14a8d0f-msica-icono-de-la-nota-c-rculo-by-vexels.png"
                  className="logo"
                  style={{ width: "150px" }}
                  alt=""
                />
                <h1>
                  SoundIT{" "}
                  <img
                    className="sa-brand__name-logo"
                    src="/images/continent-icon-africa.png"
                    alt=""
                  />frica.
                </h1>
                <h4>Be the next Rising Gospel Star</h4>
                <div>
                  <form className="sa-form__login">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control sa-form__login-input"
                        aria-describedby="emailHelp"
                        onChange={evt =>
                          this.setState({ emailInput: evt.target.value })
                        }
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control sa-form__login-input"
                        aria-describedby="passwordHelp"
                        onKeyUp={this.detectKey}
                        onChange={evt =>
                          this.setState({ passwordInput: evt.target.value })
                        }
                        placeholder="Enter password"
                      />
                    </div>
                    <div className="sa-actions">
                      <p className="sa-actions__login" onClick={this.onLogin}>
                        Login
                      </p>
                      <p className="sa-actions__createAccount">
                        New user? <span>Create Account</span>
                      </p>
                    </div>
                  </form>
                </div>
              </span>
            </div>
          </div>
        </div>
        <MobileHome />
        <SectionTwo />
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth: auth.userInfo
});

const mapDispatchToProps = dispatch => ({
  login: bindActionCreators(login, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
