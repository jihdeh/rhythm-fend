import React, { Component } from "react";
import "../styles/dashboard.css";
import WebHeader from "../components/webheader";
import thumb1 from "../assets/images/thumb1.jpeg";


export default class DashBoard extends Component {
  render() {
    return(
      <div>
        <div>
          <WebHeader />
        </div>
        <div className="dashboard-search">
          <form>
            <input type="search" name="search" placeholder="Search artiste or song"/>
            <i class="fas fa-search search-icon"></i>
          </form>
          <div className="dashboard-upload">
            <p>Upload Video</p>
          </div>
        </div>
        <div className="dashboard-body">
          <div className="row">
            <div className="col-sm-3">
              <ul className="dashboard-body__menu1">
                <li>VIDEOS</li>
                <li className="menu1-subtext">Liked</li>
                <li className="menu1-subtext">Loved</li>
                <li className="menu1-subtext">Commented</li>
              </ul>
              <ul class="dashboard-body__menu1">
                <li>COLLECTIONS</li>
              </ul>
            </div>
            <div className="col-sm-9">
              <h3>Featured Videos</h3>
              <div className="row dashboard-body__thumbnails">
                <div className="col-md-4">
                  <img src={thumb1} height="206px" width="206px" alt=""/>
                    <h3>Loren Ipsum</h3>
                    <p>Loren Ipsum</p>
                    
                </div>
                <div className="col-md-4">
                  <img src={thumb1} height="206px" width="206px" alt=""/>
                    <h3>Loren Ipsum</h3>
                    <p>Loren Ipsum</p>
                    
                </div>
                <div classname="col-md-4">
                  <img src={thumb1} height="206px" width="206px" alt=""/>
                    <h3>Loren Ipsum</h3>
                    <p>Loren Ipsum</p>
                    
                </div>
              </div>
              <div className="row dashboard-body__thumbnails">
                <div className="col-md-4">
                  <img src={thumb1} height="206px" width="206px" alt=""/>
                    <h3>Loren Ipsum</h3>
                    <p>Loren Ipsum</p>
                    
                </div>
                <div className="col-md-4">
                  <img src={thumb1} height="206px" width="206px" alt=""/>
                    <h3>Loren Ipsum</h3>
                    <p>Loren Ipsum</p>
                   
                </div>
                <div classname="col-md-4">
                  <img src={thumb1} height="206px" width="206px" alt=""/>
                    <h3>Loren Ipsum</h3>
                    <p>Loren Ipsum</p>
                    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}