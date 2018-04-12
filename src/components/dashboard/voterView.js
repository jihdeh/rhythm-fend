import React, { Component } from "react";

class VoterView extends Component {
  render() {
    return (
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
                <h4>
                  You last voted for ... If you'd like to vote again click here
                </h4>
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
    );
  }
}

export default VoterView;
