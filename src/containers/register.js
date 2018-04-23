import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/register.css";

class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: ""
  };

  onRegister = e => {
    e.preventDefault();
    console.log("here");
  };

  render() {
    return (
      <div className="register-container">
        <div className="wrap">
          <div className="content-left">
            <div className="content-info">
              <h2>Brief History About Us</h2>
              <div className="slider">
                <div className="">
                  <ul className="rslides callbacks callbacks1" id="slider4">
                    <li>
                      <div className="soundit-banner-info">
                        <h3>Vivamus dui dolor</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Aenean et placerat leo, non condimentum justo
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
                  <a href="#">
                    <i className="social-icons fab fa-facebook-f fa-lg" />
                  </a>
                  <a href="#">
                    <i className="social-icons fab fa-twitter fa-lg" />
                  </a>
                  <a href="#">
                    <i className="social-icons fab fa-instagram fa-lg" />
                  </a>
                </ul>
              </div>
              <div className="agile-signin">
                <h4>
                  Already have an account <Link to="/">Sign In</Link>
                </h4>
              </div>
            </div>
          </div>
          <div className="content-main">
            <div className="soundIt-subscribe">
              <h4>New Contestant?</h4>
              <form onSubmit={this.onRegister}>
                <input
                  type="text"
                  onChange={({ target }) =>
                    this.setState({ firstName: target.value })
                  }
                  value={this.state.firstName || ""}
                  placeholder="First Name"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  onChange={({ target }) =>
                    this.setState({ lastName: target.value })
                  }
                  value={this.state.lastName || ""}
                  required
                />
                <input
                  type="text"
                  onChange={({ target }) =>
                    this.setState({ phoneNumber: target.value })
                  }
                  value={this.state.phoneNumber || ""}
                  placeholder="Phone number"
                  required
                />
                <input
                  type="email"
                  name="Email"
                  onChange={({ target }) =>
                    this.setState({ email: target.value })
                  }
                  value={this.state.email || ""}
                  placeholder="Email"
                  required
                />
                <input
                  type="password"
                  name="Password"
                  onChange={({ target }) =>
                    this.setState({ password: target.value })
                  }
                  value={this.state.password || ""}
                  placeholder="Password"
                  required
                />
                <input
                  type="password"
                  name="Password"
                  onChange={({ target }) =>
                    this.setState({ confirmPassword: target.value })
                  }
                  value={this.state.confirmPassword || ""}
                  placeholder="Confirm Password"
                  required
                />
                <input type="submit" value="Sign Up" />
              </form>
            </div>
          </div>
          <div className="clear"> </div>
        </div>
      </div>
    );
  }
}

export default Register;
