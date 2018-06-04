import React, { Component } from 'react'
import RequestResetPassword from '../components/requestResetPassword'

class PasswordReset extends Component {
  render() {
    return (
      <div className="account-container">
        <div className="account-form">
          <div className="account-form__header">
            <p>Request Password Reset</p>
          </div>
          <div className="account-form__form">
            <RequestResetPassword />
          </div>
          <div className="account-form__footer">
            <p>SOUNDIT AFRICA</p>
          </div>
        </div>
        <h4
          style={{
            color: '#FFFfff',
            fontSize: '15px',
            textAlign: 'center'
          }}
        >
          Please check your mailbox or spam folder for further steps to reset
          password
        </h4>
      </div>
    )
  }
}

export default PasswordReset
