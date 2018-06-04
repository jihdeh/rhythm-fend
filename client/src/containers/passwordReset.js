import React, { Component } from 'react'
import ResetPassword from '../components/resetPassword'

class PasswordReset extends Component {
  render() {
    return (
      <div className="account-container">
        <div className="account-form">
          <div className="account-form__header">
            <p>Reset Password</p>
          </div>
          <div className="account-form__form">
            <ResetPassword />
          </div>
          <div className="account-form__footer">
            <p>SOUNDIT AFRICA</p>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordReset
