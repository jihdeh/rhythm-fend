import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { login } from "../../actions/authActions";

class LoginInput extends Component {
  state = {
    emailInput: "",
    passwordInput: "",
    loading: null
  };

  validateEmail = email => {
    var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailPattern.test(email.toLowerCase());
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
        <form>
          <label>
            Email:
            <input
              id="email"
              onChange={evt => this.setState({ emailInput: evt.target.value })}
              type="email"
              placeholder="Email"
            />
          </label>
          <label>
            Password:
            <input
              id="password"
              onChange={evt =>
                this.setState({ passwordInput: evt.target.value })
              }
              type="password"
              placeholder="Password"
            />
          </label>
          <input type="button" value="Log In" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth
});

const mapDispatchToProps = dispatch => ({
  login: bindActionCreators(login, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginInput);
