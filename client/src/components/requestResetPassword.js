import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ToastContainer, toast } from 'react-toastify'
import get from 'lodash/get'
import Spinner from 'react-activity/lib/Spinner'
import { requestReset } from '../actions/authActions'
import { displayError } from '../actions/errorActions'
import 'react-activity/lib/Spinner/Spinner.css'
import 'react-toastify/dist/ReactToastify.css'

class RequestResetPassword extends Component {
  state = {
    emailInput: '',
    isSendingResetMail: null,
    hasSent: false
  }

  componentWillReceiveProps(nextProps) {
    if (get(nextProps.error, 'error')) {
      this.setState({
        isSendingResetMail: null
      })
    } else if (nextProps.auth) {
      this.setState({
        isSendingResetMail: null,
        hasSent: true
      })
      toast.success(`Request sent`)
    }
  }

  validateEmail = email => {
    var emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return emailPattern.test(email.toLowerCase())
  }

  detectKey = e => {
    if (e.keyCode === 13) {
      this.onRequest(e)
    }
    return
  }

  onRequest = e => {
    let emailInput = this.state.emailInput.trim()
    e.preventDefault()

    const hasFilledInputs = !emailInput
    const isEmailValid = this.validateEmail(emailInput)
    if (hasFilledInputs) {
      this.props.displayError('The email field must be entered!')
      return
    }
    if (!isEmailValid) {
      this.props.displayError('A valid email address is required.')
      return
    }

    this.setState({
      isSendingResetMail: true
    })

    this.props.requestReset({
      email: emailInput
    })
  }

  render() {
    const { hasSent } = this.state
    return (
      <div className="sa-form__login">
        <ToastContainer ref="container" className="toast-top-right" />
        {hasSent ? (
          <h4
            style={{
              color: '#FFFfff',
              fontSize: '15px',
              textAlign: 'center'
            }}
          >
            Reset Link sent to your email
          </h4>
        ) : (
          <form>
            <div className="form-group">
              <input
                type="email"
                className="form-control sa-form__login-input"
                aria-describedby="emailHelp"
                required
                onChange={evt =>
                  this.setState({ emailInput: evt.target.value })
                }
                placeholder="Enter email"
              />
            </div>
            <div className="sa-actions">
              <p className="sa-actions__createAccount">
                <Link to="/account">Back to Login</Link>
              </p>
              {this.state.isSendingResetMail ? (
                <div className="sa-actions__login">
                  <Spinner color="#ffffff" />
                </div>
              ) : (
                <p className="sa-actions__login" onClick={this.onRequest}>
                  Request Reset
                </p>
              )}
            </div>
          </form>
        )}
      </div>
    )
  }
}

const mapStateToProps = ({ auth, error }) => ({
  auth: auth.requestReset,
  error: error
})

const mapDispatchToProps = dispatch => ({
  requestReset: bindActionCreators(requestReset, dispatch),
  displayError: bindActionCreators(displayError, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(
  RequestResetPassword
)
