import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { donate } from "../actions/miscActions";

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
    if (!amount && !name) {
      return false;
    }
    this.setState({ loadingPaystackModule: "Verifying" });
    this.loadPayStack();
  };

  loadPayStack() {
    const { name, email, phoneNumber, amount } = this.state;
    var handler = window.PaystackPop.setup({
      key: process.env.REACT_APP_PAYSTACK_KEY,
      email: email.trim() || "risingstargospel@gmail.com",
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
        <div className="donate-wrapper">
          <div className="donate-content__left">
            <div className="donate-content__info">
              <h2>Your donation will help us to</h2>
              <div className="slider">
                <div className="">
                  <ul className="rslides callbacks callbacks1" id="slider4">
                    <li>
                      <div className="soundit-banner-info">
                        <h3>Spread!</h3>
                        <p>
                          Go into more African nations; to Discover talents,
                          develop them to become global musical stars.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <ul className="rslides callbacks callbacks1" id="slider4">
                    <li>
                      <div className="soundit-banner-info">
                        <h3>Reach!</h3>
                        <p>
                          Take the Gospel of Jesus Christ to more communities
                          and nations in Africa through music Concerts, Talent
                          Hunt events and our Campus Tours.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="clear"> </div>
              </div>
              <div className="agileinfo-follow">
                <h4>Follow us on:</h4>
              </div>
              <div className="agileinfo-social-grids">
                <ul>
                  <a
                    href="https://www.facebook.com/RisingStarGospel/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="social-icons fab fa-facebook-f fa-lg" />
                  </a>
                  <a
                    href="https://twitter.com/RisingStarG"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="social-icons fab fa-twitter fa-lg" />
                  </a>
                  <a
                    href="https://www.instagram.com/RisingStarG"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="social-icons fab fa-instagram fa-lg" />
                  </a>
                </ul>
              </div>
            </div>
          </div>
          <div className="donate-content__main">
            <div className="soundIt-subscribe">
              {!successfulDonation ? (
                <span>
                  <h4>
                    Please for appreciation! we'd like some information about
                    you
                  </h4>
                  <form onSubmit={this.submit}>
                    <label>
                      Name or Organization name: <small>*</small>
                    </label>
                    <input
                      type="text"
                      onChange={({ target }) =>
                        this.setState({ name: target.value })
                      }
                      placeholder="Your name or organization name e.g One Love International"
                    />
                    <label>Phone number</label>
                    <input
                      type="tel"
                      onChange={({ target }) =>
                        this.setState({ phoneNumber: target.value })
                      }
                    />
                    <label>Your Email Sir/Ma</label>
                    <input
                      type="email"
                      onChange={({ target }) =>
                        this.setState({ email: target.value })
                      }
                    />
                    <label>
                      How much would you like to donate: <small>*</small>
                    </label>
                    <input
                      type="number"
                      onChange={({ target }) =>
                        this.setState({ amount: target.value })
                      }
                      placeholder="How much donation?"
                    />

                    {loadingPaystackModule ? (
                      <button className="sa-btn spinner" disabled>
                        <img src="/images/Spinner-1s-50px.svg" alt="" />{" "}
                      </button>
                    ) : (
                      <input className="sa-btn" value="Donate" type="submit" />
                    )}
                  </form>
                </span>
              ) : (
                <span className="donation-thanks">
                  <h2>Thank you for your donations {name}! </h2>
                  <p>
                    We sincerely appreciate your kindness towards the success of
                    our show.
                  </p>
                  <p>
                    In the spirit of giving, we pray that your find favour and
                    mercy in all that you do
                  </p>
                </span>
              )}
            </div>
          </div>
          <div className="clear"> </div>
        </div>
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
