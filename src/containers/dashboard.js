import React, { Component } from "react";
import "../styles/dashboard.css";
import nobody from "../assets/images/nobody.jpg";

export default class DashBoard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content">
        <div className="row dashboard-menu">
          <div className="col-sm-2 dashboard-menu__left">
            <p onClick={() => this.props.history.push("/")}>SoundIT Africa</p>
            <div className="mobile-search">
              <form className="mobile-form">
                <input
                  className="mobile-input"
                  type="search"
                  name="search"
                  placeholder="Search for contestant"
                />
                <i className="fas fa-search mobile-search-icon" />
              </form>
            </div>
          </div>
          <div className="col-sm-10 dashboard-menu__right">
            <div className="menu-icon">
              <input type="checkbox" id="drawer-toggle" name="drawer-toggle" />
              <label htmlFor="drawer-toggle" id="drawer-toggle-label" />
              <nav id="drawer">
                <ul className="drawer-menu">
                  <li>
                    <a href="#">VOTE</a>
                  </li>
                  <li>
                    <a href="#">TRENDING</a>
                  </li>
                  <li>
                    <a href="#">CONNECT</a>
                  </li>
                  <li>
                    <a href="#">MOST LIKED</a>
                  </li>
                  <li>
                    <a href="#">LOGOUT</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="profile-right">
              <i className="far fa-envelope profile-right__icon" />
              <i className="far fa-bell profile-right__icon" />
              <i className="far fa-flag profile-right__icon" />
              <div className="profile-right__owner">
                <img className="profile-right__image" src={nobody} alt="" />
                <p>Doe</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row dashboard-container">
          <div className="col-sm-3 col-lg-3 dashboard-container__left">
            <div className="dashboard-search">
              <form className="dashboard-form">
                <input
                  className="dashboard-input"
                  type="search"
                  name="search"
                  placeholder="Search for contestant"
                />
                <i className="fas fa-search search-icon" />
              </form>
            </div>
            <div className="dashboard-navigation">
              <ul>
                <li>
                  <a href="#">VOTE</a>
                </li>
                <li>
                  <a href="#">TRENDING</a>
                </li>
                <li>
                  <a href="#">CONNECT</a>
                </li>
                <li>
                  <a href="#">MOST LIKED</a>
                </li>
                <li>
                  <a href="#">LOGOUT</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-sm-9 col-lg-9 dashboard-container dashboard-container__right">
            <div className="row head">
              <div className="col-md-6 col-left">
                <div className="col-content">
                  <h1>
                    Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
                  </h1>
                </div>
                <div className="col-content">
                  <h1>Lorem ipsum</h1>
                </div>
              </div>
              <div className="col-md-6 col-right">
                <div className="col-content">
                  <h1>
                    Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                    ipsum
                  </h1>
                </div>

                <div className="col-content">
                  <h1>Lorem ipsum</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
