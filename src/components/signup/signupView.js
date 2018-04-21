import React, { Component } from "react";
//import ContestantView from "../payment/contestantView";
import "../../styles/payment.css";
import "../../styles/signup.css";
import { Modal, Button } from "react-bootstrap";
import lib from "../../utils/lib";

class SignupView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
      show: false,
      card: {
        number: "",
        cvv: "",
        expiry_month: "",
        expiry_year: ""
      },
      pin: "",
      email: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCardInputChange = this.handleCardInputChange.bind(this);
    this.onCreateAccount = this.onCreateAccount.bind(this);
  }

  handleHide() {
    this.setState({ show: false });
  }

  handleChange() {
    this.setState({
      checked: !this.state.checked
    });
  }
  handleCardInputChange(e) {
    e.persist();
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState(prevState => ({
      card: {
        ...prevState.card,
        [name]: value
      }
    }));
  }
  handleInputChange(e) {
    e.persist();
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  onCreateAccount() {
    const { email, card, pin } = this.state;

    //set amount to charge card
    const amount = 100000;
    //make the call to charge card
    lib.charge(email, amount, card, pin);
  }

  render() {
    const content = this.state.checked ? (
      <div className="modal-container">
        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">Payment</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body">
            <form className="payment-form">
              <div className="form-group payment-form-input">
                <label htmlFor="Card-number">Card Number</label>
                <input
                  type="text"
                  className="form-control payment-form-control"
                  id=""
                  name="number"
                  value={this.state.card.number}
                  required
                  onChange={this.handleCardInputChange}
                />
              </div>

              <div className="form-group payment-form-input">
                <label htmlFor="Expiry-date">Expiry Date</label>
                <div className="payment-expiry-date">
                  <div className="payment-expiry-date__month">
                    <input
                      type="text"
                      className="form-control payment-form-control"
                      id=""
                      name="expiry_month"
                      value={this.state.card.expiry_month}
                      onChange={this.handleCardInputChange}
                      placeholder="Month"
                      required
                    />
                  </div>
                  <div className="payment-expiry-date__year">
                    <input
                      type="text"
                      className="form-control payment-form-control"
                      id=""
                      name="expiry_year"
                      value={this.state.card.expiry_year}
                      onChange={this.handleCardInputChange}
                      placeholder="Year"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="payment-cvv-pin">
                <div className="form-group payment-form-input payment-form-input__cvv">
                  <label htmlFor="CVV">CVV</label>
                  <input
                    type="text"
                    className="form-control payment-form-control cvv-pin"
                    name="cvv"
                    value={this.state.card.cvv}
                    onChange={this.handleCardInputChange}
                    id=""
                    required
                  />
                </div>

                <div className="form-group payment-form-input payment-form-input__pin">
                  <label htmlFor="Pin">Pin</label>
                  <input
                    type="text"
                    name="pin"
                    value={this.state.pin}
                    onChange={this.handleInputChange}
                    className="form-control payment-form-control cvv-pin"
                    id=""
                    required
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-success">
                Pay
              </button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="modal-button__close" onClick={this.handleHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    ) : null;

    return (
      <div className="signup-body">
        {content}
        <div className="signup-body__logo">
          <h3>SoundIT Africa</h3>
        </div>
        <div className="signup-background">
          <form className="signup-form">
            <div className="signup-header">
              <p>Signup to SoundIT Africa</p>
            </div>
            <div className="form-group signup-form__input">
              <i className="fas fa-user signup-icon" />
              <label htmlFor="inputFname" />
              <input
                type="text"
                className="form-control signup-form-control"
                id="signup-firstname"
                placeholder="First Name"
                required
              />
            </div>

            <div className="form-group signup-form__input">
              <i className="fas fa-user signup-icon" />
              <label htmlFor="inputLname" />
              <input
                type="text"
                className="form-control signup-form-control"
                id="signup-lastname"
                placeholder="Last Name"
                required
              />
            </div>

            <div className="form-group signup-form__input">
              <i className="fas fa-at signup-icon" />
              <label htmlFor="inputEmail" />
              <input
                type="username"
                className="form-control signup-form-control"
                id="signup-email"
                placeholder="Email Address"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                required
              />
            </div>

            <div className="form-group signup-form__input">
              <i className="fas fa-key signup-icon" />
              <label htmlFor="inputPassword" />
              <input
                type="password"
                className="form-control signup-form-control"
                id="signup-password"
                minlength="4"
                placeholder="Password"
                required
              />
            </div>

            <div className="form-group signup-form__input">
              <i className="fas fa-key signup-icon" />
              <label htmlFor="inputConfirmPassword" />
              <input
                type="password"
                className="form-control signup-form-control"
                id="signup-confirm-password"
                minlength="4"
                placeholder="Confirm Password"
                required
              />
            </div>

            <div className="signup-checkbox">
              <div className="checkbox-contestant">
                <input
                  type="checkbox"
                  name="contestant"
                  value="Contestant"
                  id="myCheck"
                  checked={this.state.checked}
                  onChange={this.handleChange}
                  onClick={() => this.setState({ show: true })}
                />
                <p className="checkbox-contestant__text">Contestant</p>
              </div>
              <div className="checkbox-voter">
                <input type="checkbox" name="voter" value="Voter" />
                <p className="checkbox-voter__text">Voter</p>
              </div>
            </div>

            <div class="g-recaptcha" data-sitekey="6Ldez1MUAAAAAAJBrOgBM2u5f0Jg_C9t4ahBRasu" />

            <button type="submit" className="btn signup-submit" onClick={this.onCreateAccount}>
              Create Account
            </button>
          </form>
          <p className="signup-footer">
            Already have an account? <span className="signup-signin">Sign in</span>
          </p>
        </div>
      </div>
    );
  }
}

export default SignupView;
