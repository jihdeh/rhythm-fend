import React, { Component } from "react";
import Login from "../components/login";

class Account extends Component {
  render() {
    return (
      <div className="account-container">
        <div className="account-form">
          <div className="account-form__header">
            <p>Access your account</p>
          </div>
          <div className="account-form__form">
            <Login />
          </div>
          <div className="account-form__footer">
            <p>SOUNDIT AFRICA</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Account;
