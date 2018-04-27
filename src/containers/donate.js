import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button, Modal } from "react-bootstrap";
import { donate } from "../actions/miscActions";
import "../styles/donate.css";

class Donate extends Component {
  state = {
    name: "",
    phoneNumber: "",
    email: "",
    donationAmount: "",
    successfulDonation: false
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.donation) {
      this.setState({
        successfulDonation: true
      });
    }
  }

  submit = () => {
    const { donationAmount, name } = this.state;
    if (!donationAmount && name) {
      return false;
    }
    this.loadPayStack();
    console.log("yes");
  };

  loadPayStack() {
    const { name, email, phoneNumber, donationAmount } = this.state;
    var handler = window.PaystackPop.setup({
      key: process.env.REACT_APP_PAYSTACK_KEY,
      email: email.trim() || "jide.b.tade@gmail.com",
      amount: donationAmount, //in kobo
      ref: "" + Math.floor(Math.random() * 1000000000 + 1),
      metadata: {
        custom_fields: [
          {
            display_name: "Full Name",
            variable_name: "name",
            value: `${name}`
          },
          {
            display_name: "Email",
            variable_name: "email",
            value: `${email}`
          }
        ]
      },
      callback: response => {
        this.props.donate({
          name,
          email,
          phoneNumber,
          donationAmount
        });
        this.setState({ loadingPaystackModule: "verifying" });
      },
      onClose: () => {
        this.setState({ loadingPaystackModule: false });
        alert("window closed");
      }
    });
    handler.openIframe();
  }

  render() {
    return (
      <div className="donate-container">
        <form className="donate-container__form">
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
            placeholder="your name or organization name"
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
            onChange={({ target }) => this.setState({ email: target.value })}
          />
          <label>
            How much would you like to donate: <small>*</small>
          </label>
          <input
            className="donate-input"
            type="number"
            onChange={({ target }) =>
              this.setState({ donationAmount: target.value })
            }
            placeholder="How much donation?"
          />
          <input
            className="donate-submit"
            onClick={this.submit}
            value="Donate"
            type="submit"
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ donation }) => ({
  donation
});

const mapDispatchToProps = dispatch => ({
  donate: bindActionCreators(donate, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Donate);
