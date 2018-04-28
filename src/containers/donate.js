import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { donate } from "../actions/miscActions";
import "../styles/donate.css";

class Donate extends Component {
  state = {
    name: "",
    phoneNumber: "",
    email: "",
    amount: "",
    successfulDonation: false,
    loadingPaystackModule: false
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.donation === "Successfully donated") {
      this.setState({
        successfulDonation: true
      });
    }
  }

  submit = e => {
    e.preventDefault();
    const { amount, name } = this.state;
    if (!amount && name) {
      return false;
    }
    this.setState({ loadingPaystackModule: "Verifying" });
    this.loadPayStack();
  };

  loadPayStack() {
    const { name, email, phoneNumber, amount } = this.state;
    var handler = window.PaystackPop.setup({
      key: process.env.REACT_APP_PAYSTACK_KEY,
      email: email.trim() || "jide.b.tade@gmail.com",
      amount: amount * 100, //in kobo
      ref: "" + Math.floor(Math.random() * 1000000000 + 1),
      metadata: {
        custom_fields: [
          {
            display_name: "Full Name",
            variable_name: "name",
            value: `${name}`
          }
        ]
      },
      callback: response => {
        this.props.donate({
          name,
          email,
          phoneNumber,
          amount,
          paymentReference: response.reference
        });
        this.setState({ loadingPaystackModule: "Locking in!" });
      },
      onClose: () => {
        this.setState({ loadingPaystackModule: false });
      }
    });
    handler.openIframe();
  }

  render() {
    const { loadingPaystackModule, successfulDonation, name } = this.state;
    return (
      <div className="donate-container">
        <form className="donate-container__form">
          {!successfulDonation ? (
            <span>
              <h3 className="donate-container__form-reason">
                Please for appreciation! we'd like some information about you
              </h3>
              <label>
                Name or Organization name: <small>*</small>
              </label>
              <input
                className="donate-input"
                type="text"
                onChange={({ target }) => this.setState({ name: target.value })}
                placeholder="your name or organization name e.g One Love international"
              />
              <label>Phone number</label>
              <input
                className="donate-input"
                type="number"
                onChange={({ target }) =>
                  this.setState({ phoneNumber: target.value })
                }
                placeholder="phonenumber"
              />
              <label>Your Email Sir/Ma</label>
              <input
                className="donate-input"
                type="email"
                onChange={({ target }) =>
                  this.setState({ email: target.value })
                }
              />
              <label>
                How much would you like to donate: <small>*</small>
              </label>
              <input
                className="donate-input"
                type="number"
                onChange={({ target }) =>
                  this.setState({ amount: target.value })
                }
                placeholder="How much donation?"
              />
              {loadingPaystackModule ? (
                <button className="donate-submit" disabled>
                  <img src="/images/Spinner-1s-50px.svg" alt="" />{" "}
                </button>
              ) : (
                <input
                  className="donate-submit"
                  onClick={this.submit}
                  value="Donate"
                  type="submit"
                />
              )}
            </span>
          ) : (
            <span className="donation-thanks">
              <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/743250-200.png" />
              <h2>Thank you for your donations {name}! </h2>
              <p>
                We sincerely appreciate your kindness towards the success of our
                show.
              </p>
              <p>
                In the spirit of giving, we would be giving half of your
                donations to charity.
              </p>
            </span>
          )}
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ misc }) => ({
  donation: misc.donation
});

const mapDispatchToProps = dispatch => ({
  donate: bindActionCreators(donate, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Donate);
