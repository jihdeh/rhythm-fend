import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import get from 'lodash/get';
import Spinner from 'react-activity/lib/Spinner';
import { login } from '../actions/authActions';
import { displayError } from '../actions/errorActions';
import 'react-activity/lib/Spinner/Spinner.css';

class LoginPage extends Component {
  state = {
    emailInput: '',
    passwordInput: '',
    isLogginIn: null
  };

  componentWillReceiveProps(nextProps) {
    if (get(nextProps.error, 'error')) {
      this.setState({
        isLogginIn: null
      });
    }
  }

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
      this.props.displayError('Both the email and password must be entered!');
      return;
    }
    if (!isEmailValid) {
      this.props.displayError('A valid email address is required.');
      return;
    }

    this.setState({
      isLogginIn: true
    });

    this.props.login({
      email: emailInput,
      password: passwordInput
    });
  };

  render() {
    return (
      <div className="sa-form__login">
        <form>
          <div className="form-group">
            <input
              type="email"
              className="form-control sa-form__login-input"
              aria-describedby="emailHelp"
              required
              aria-label="email"
              onChange={evt => this.setState({ emailInput: evt.target.value })}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control sa-form__login-input"
              aria-describedby="passwordHelp"
              required
              aria-label="password"
              onKeyUp={this.detectKey}
              onChange={evt =>
                this.setState({ passwordInput: evt.target.value })
              }
              placeholder="Enter password"
            />
          </div>
          <div className="sa-actions">
            <p className="sa-actions__createAccount">
              <Link to="/register">Create Account</Link>
            </p>
            <p
              className="sa-actions__createAccount"
              style={{ marginLeft: '10px' }}
            >
              <Link to="/password/request">Forgot Password?</Link>
            </p>
            {this.state.isLogginIn ? (
              <div className="sa-actions__login">
                <Spinner color="#ffffff" />
              </div>
            ) : (
              <p className="sa-actions__login" onClick={this.onLogin}>
                Login
              </p>
            )}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ auth, error }) => ({
  auth: auth.userInfo,
  error: error
});

const mapDispatchToProps = dispatch => ({
  login: bindActionCreators(login, dispatch),
  displayError: bindActionCreators(displayError, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
