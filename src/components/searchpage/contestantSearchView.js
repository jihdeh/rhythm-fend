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

        <div className="col-sm-9 col-lg-9 search-container search-container__right">
          <div className="col-result">  
            <iframe  
              width="200"
              height="200"
              src="https://www.youtube.com/embed/2Vv-BfVoq4g" 
              frameborder="0" 
              allow="autoplay; encrypted-media" 
              allowfullscreen
            />
            <div className="col-result__text">
              <p>loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum v loren ipsum loren ipsum loren ipsum</p>
              <p>loren ipsum loren ipsum loren ipsum</p>
              <i className="fas fa-check"/> Vote  <i className="fas fa-share"/> Share
            </div>
          </div>
          <div className="col-result">
            <iframe  
                width="200"
                height="200"
              src="https://www.youtube.com/embed/2Vv-BfVoq4g" 
              frameborder="0" 
              allow="autoplay; encrypted-media" 
              allowfullscreen
            />
            <div className="col-result__text">
              <p>loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum v loren ipsum loren ipsum loren ipsum</p>
              <p>loren ipsum loren ipsum loren ipsum</p>
              <i className="fas fa-check"/> Vote  <i className="fas fa-share"/> Share
            </div>
          </div>
          
          
          <div className="col-result">
            <iframe  
              width="200"
              height="200"
              src="https://www.youtube.com/embed/2Vv-BfVoq4g" 
              frameborder="0" 
              allow="autoplay; encrypted-media" 
              allowfullscreen
            />
            <div className="col-result__text">
              <p>loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum v loren ipsum loren ipsum loren ipsum</p>
              <p>loren ipsum loren ipsum loren ipsum</p>
              <i className="fas fa-check"/> Vote  <i className="fas fa-share"/> Share
            </div>
          </div>

          <div className="col-result">
            <iframe  
              width="200"
              height="200"
              src="https://www.youtube.com/embed/2Vv-BfVoq4g" 
              frameborder="0" 
              allow="autoplay; encrypted-media" 
              allowfullscreen
            />
            <div className="col-result__text">
              <p>loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum v loren ipsum loren ipsum loren ipsum</p>
              <p>loren ipsum loren ipsum loren ipsum</p>
              <i className="fas fa-check"/> Vote  <i className="fas fa-share"/> Share
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContestantView;
