import React, { Component } from "react";

class ContestantView extends Component {
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
                <a href="#">TRENDING</a>
              </li>
              <li>
                <a href="#">SHARE</a>
              </li>
              <li>
                <a href="#">LOGOUT</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-sm-9 col-lg-9 dashboard-container dashboard-container__right">
          <div className="row head">
            <div className="col-md-12 col-left">
              <div className="col-content">
                <p>
                  You haven't uploaded any video. To get started, upload your
                  video to youtube, copy the embed url and paste it in the input
                  below.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-right">
              <div className="col-content">
                <h1>
                  Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
                  ipsum
                </h1>
              </div>
            </div>
            <div className="col-md-6 col-right">
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

export default ContestantView;
