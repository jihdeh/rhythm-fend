import React, { Component } from "react";
import "../styles/donate.css";

class Donate extends Component {
  state = {
    name: "",
    phonenumber: "",
    email: "",
    donationAmount: ""
  };

  submit = () => {
    console.log("yes");
  };

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
              this.setState({ phonenumber: target.value })
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

export default Donate;
