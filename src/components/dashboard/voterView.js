import React, { Component } from "react";

class VoterView extends Component {
  render() {
    return (
      <span className="">
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
      </span>
    );
  }
}

export default VoterView;
