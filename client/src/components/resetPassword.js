import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ToastContainer, toast } from 'react-toastify'
import get from 'lodash/get'
import queryString from 'query-string'
import Spinner from 'react-activity/lib/Spinner'
import { reset } from '../actions/authActions'
import { displayError } from '../actions/errorActions'
import 'react-activity/lib/Spinner/Spinner.css'
import 'react-toastify/dist/ReactToastify.css'

class RequestResetPassword extends Component {
  state = {
    passwordInput: '',
    confirmPasswordInput: '',
    isResetting: null,
    hasSent: false
  }

  componentWillMount() {
    const parse = queryString.parse(window.location.search)
    if (!parse.code) {
      window.location.href = '/password/request'
      return
    }
  }

  componentWillReceiveProps(nextProps) {
    if (get(nextProps.error, 'error')) {
      this.setState({
        isResetting: null
      })
    } else if (nextProps.auth) {
      this.setState({
        isResetting: null,
        hasSent: true
      })
      toast.success(`Password Reset Successful`)
    }
  }

  detectKey = e => {
    if (e.keyCode === 13) {
      this.onRequest(e)
    }
    return
  }

  onRequest = e => {
    let passwordInput = this.state.passwordInput.trim()
    const parse = queryString.parse(window.location.search)
    let confirmPasswordInput = this.state.confirmPasswordInput.trim()
    e.preventDefault()

    const hasFilledInputs = !passwordInput || !confirmPasswordInput
    const passwordMatch = passwordInput === confirmPasswordInput
    if (hasFilledInputs) {
      this.props.displayError('Both fields must be entered!')
      return
    }
    if (!passwordMatch) {
      this.props.displayError('Passwords do not match.')
      return
    }

    this.setState({
      isResetting: true
    })

    this.props.reset({
      password: passwordInput,
      token: parse.code
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
            Successfully Reset Password
          </h4>
        ) : (
          <form>
            <div className="form-group">
              <input
                type="password"
                className="form-control sa-form__login-input"
                aria-describedby="passwordHelp"
                required
                onChange={evt =>
                  this.setState({ passwordInput: evt.target.value })
                }
                placeholder="Enter new password"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control sa-form__login-input"
                aria-describedby="confirmPasswordHelp"
                required
                onChange={evt =>
                  this.setState({ confirmPasswordInput: evt.target.value })
                }
                placeholder="Confirm password"
              />
            </div>
            <div className="sa-actions">
              <p className="sa-actions__createAccount">
                <Link to="/account">Back to Login</Link>
              </p>
              {this.state.isResetting ? (
                <div className="sa-actions__login">
                  <Spinner color="#ffffff" />
                </div>
              ) : (
                <p className="sa-actions__login" onClick={this.onRequest}>
                  Reset
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
  auth: auth.passwordChange,
  error: error
})

const mapDispatchToProps = dispatch => ({
  reset: bindActionCreators(reset, dispatch),
  displayError: bindActionCreators(displayError, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(
  RequestResetPassword
)
