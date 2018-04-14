import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AuthenticatedHeader extends Component {
  render() {
    return (
      <div className="row dashboard-container">
        <div className="col-sm-2 col-lg-2 dashboard-container__left">
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
            <ul className="dashboard-navigation__sidenav-list">
              <li>
                <a href="#">
                  <i className="fas fa-cubes fa-lg guide-icon__default" />
                  <span>VOTE</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-hotjar fa-lg guide-icon__default" />
                  <span>TRENDING</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-handshake fa-lg guide-icon__default" />
                  <span>CONNECT</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-thumbs-up fa-lg guide-icon__default" />
                  <span>MOST LIKED</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-power-off fa-lg guide-icon__default" />
                  <span>LOGOUT</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}
