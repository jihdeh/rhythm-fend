import React, { Component } from "react";
import get from "lodash/get";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createAccount } from "../actions/authActions";
import { displayError } from "../actions/errorActions";
import "../styles/register.css";

class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    loadingPaystackModule: false
  };

  componentWillReceiveProps(nextProps) {
    if (get(nextProps, "createAccountStatus.data")) {
      this.props.history.push("/");
    }
    if (get(nextProps.errorMessage, "error")) {
      this.setState({ loadingPaystackModule: false });
    }
  }

  validateEmail = email => {
    var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailPattern.test(email.toLowerCase());
  };

  validateInput = () => {
    let emailInput = this.state.email.trim();
    let firstName = this.state.firstName.trim();
    let lastName = this.state.lastName.trim();
    let phoneNumber = this.state.phoneNumber;
    let password = this.state.password;
    let confirmPassword = this.state.confirmPassword;

    const hasNotFilledInputs = !emailInput || !password;
    const isEmailValid = this.validateEmail(emailInput);
    if (hasNotFilledInputs) {
      this.props.displayError("Both the email and password must be entered!");
      return false;
    }
    if (!isEmailValid) {
      this.props.displayError("A valid email address is required.");
      return false;
    }
    return true;
  };

  onRegister = e => {
    e.preventDefault();
    if (!this.validateInput()) return;
    this.setState({ loadingPaystackModule: "Loading payment module" });
    this.loadPayStack();
  };

  loadPayStack() {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      password,
      confirmPassword
    } = this.state;
    var handler = window.PaystackPop.setup({
      key: process.env.REACT_APP_PAYSTACK_KEY,
      email: email,
      amount: 100000, //in kobo
      ref: "" + Math.floor(Math.random() * 1000000000 + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
      firstname: firstName,
      lastname: lastName,
      metadata: {
        custom_fields: [
          {
            display_name: "Mobile Number",
            variable_name: "mobile_number",
            value: `+${phoneNumber}`
          },
          {
            display_name: "Full Name",
            variable_name: "full_name",
            value: `${firstName} ${lastName}`
          },
          {
            display_name: "Email",
            variable_name: "email",
            value: `${email}`
          }
        ]
      },
      callback: response => {
        console.log(response, "--pay");
        this.props.register({
          firstName,
          lastName,
          email,
          phoneNumber,
          password,
          confirmPassword,
          hasPaid: true,
          paymentReference: response.reference
        });
        this.setState({ loadingPaystackModule: "Logging you in" });
      },
      onClose: () => {
        this.setState({ loadingPaystackModule: false });
        alert("window closed");
      }
    });
    handler.openIframe();
  }

  render() {
    const { loadingPaystackModule } = this.state;
    return (
      <div className="register-container">
        <div className="wrap">
          <div className="content-left">
            <div className="content-info">
              <h2>Brief History About Us</h2>
              <div className="slider">
                <div className="">
                  <ul className="rslides callbacks callbacks1" id="slider4">
                    <li>
                      <div className="soundit-banner-info">
                        <h3>Vivamus dui dolor</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Aenean et placerat leo, non condimentum justo
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="clear"> </div>
              </div>
              <div className="agileinfo-follow">
                <h4>Follow us on:</h4>
              </div>
              <div className="agileinfo-social-grids">
                <ul>
                  <a href="#">
                    <i className="social-icons fab fa-facebook-f fa-lg" />
                  </a>
                  <a href="#">
                    <i className="social-icons fab fa-twitter fa-lg" />
                  </a>
                  <a href="#">
                    <i className="social-icons fab fa-instagram fa-lg" />
                  </a>
                </ul>
              </div>
              <div className="agile-signin">
                <h4>
                  Already have an account <Link to="/">Sign In</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="content-main">
            <div className="soundIt-subscribe">
              <h4>New Contestant?</h4>
              <form onSubmit={this.onRegister}>
                <input
                  type="text"
                  onChange={({ target }) =>
                    this.setState({ firstName: target.value })
                  }
                  value={this.state.firstName || ""}
                  placeholder="First Name"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  onChange={({ target }) =>
                    this.setState({ lastName: target.value })
                  }
                  value={this.state.lastName || ""}
                  required
                />
                <input
                  type="text"
                  onChange={({ target }) =>
                    this.setState({ phoneNumber: target.value })
                  }
                  value={this.state.phoneNumber.replace(/[^+0-9]/g, "") || ""}
                  placeholder="Phone number"
                  required
                />
                <input
                  type="email"
                  name="Email"
                  onChange={({ target }) =>
                    this.setState({ email: target.value })
                  }
                  value={this.state.email || ""}
                  placeholder="Email"
                  required
                />
                <input
                  type="password"
                  name="Password"
                  onChange={({ target }) =>
                    this.setState({ password: target.value })
                  }
                  value={this.state.password || ""}
                  placeholder="Password"
                  required
                />
                <input
                  type="password"
                  name="Password"
                  onChange={({ target }) =>
                    this.setState({ confirmPassword: target.value })
                  }
                  value={this.state.confirmPassword || ""}
                  placeholder="Confirm Password"
                  required
                />
                {loadingPaystackModule ? (
                  <button className="sa-registration-btn spinner" disabled>
                    <img src="/images/Spinner-1s-50px.svg" alt="" />{" "}
                    <span>{loadingPaystackModule}</span>
                  </button>
                ) : (
                  <input
                    className="sa-registration-btn"
                    type="submit"
                    value="Sign Up"
                  />
                )}
              </form>
            </div>
          </div>
          <div className="clear"> </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth, error }) => ({
  createAccountStatus: auth.createAccountStatus,
  user: auth.userInfo,
  errorMessage: error
});

const mapDispatchToProps = dispatch => ({
  register: bindActionCreators(createAccount, dispatch),
  displayError: bindActionCreators(displayError, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
