import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/register.css";

class Register extends Component {
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
              <form action="#" method="post">
                <input
                  type="text"
                  name="Search"
                  placeholder="First Name"
                  required=""
                />
                <input
                  type="text"
                  name="Search"
                  placeholder="Last Name"
                  required=""
                />
                <input type="text" placeholder="Phone number" required="" />
                <input
                  type="email"
                  name="Search"
                  placeholder="Email"
                  required=""
                />
                <input
                  type="password"
                  name="Password"
                  placeholder="Password"
                  required=""
                />
                <input
                  type="password"
                  name="Password"
                  placeholder="Confirm Password"
                  required=""
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
