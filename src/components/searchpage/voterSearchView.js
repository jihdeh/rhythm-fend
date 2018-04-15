import React, { Component } from "react";

class VoterView extends Component {
  render() {
    return (
      <div className="container">
        <div className="row" style={{ display: "contents" }}>
          <div
            className="col-md-10 col-lg-10"
            style={{ display: "flex", float: "right" }}
          >
            <div className="dashboard-container__right">
              <div className="col-md-4 col-lg-6">
                <iframe
                  width="200"
                  height="200"
                  title="This is a unique title"
                  src="https://www.youtube.com/embed/2Vv-BfVoq4g"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                />
                <div className="">
                  <p>
                    loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum
                    loren ipsum loren ipsum v loren ipsum loren ipsum loren
                    ipsum
                  </p>
                  <p>loren ipsum loren ipsum loren ipsum</p>
                  <i className="fas fa-check" /> Vote{" "}
                  <i className="fas fa-share" /> Share
                </div>
              </div>
              <div className="col-md-4 col-lg-6">
                <iframe
                  width="200"
                  height="200"
                  title="This is a unique title 2"
                  src="https://www.youtube.com/embed/2Vv-BfVoq4g"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                />
                <div className="">
                  <p>
                    loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum
                    loren ipsum loren ipsum v loren ipsum loren ipsum loren
                    ipsum
                  </p>
                  <p>loren ipsum loren ipsum loren ipsum</p>
                  <i className="fas fa-check" /> Vote{" "}
                  <i className="fas fa-share" /> Share
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-6">
              <iframe
                width="200"
                height="200"
                src="https://www.youtube.com/embed/2Vv-BfVoq4g"
                title="This is a unique title 3"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
              />
              <div className="">
                <p>
                  loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum
                  loren ipsum loren ipsum v loren ipsum loren ipsum loren ipsum
                </p>
                <p>loren ipsum loren ipsum loren ipsum</p>
                <i className="fas fa-check" /> Vote{" "}
                <i className="fas fa-share" /> Share
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VoterView;
