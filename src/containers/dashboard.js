import React, { Component } from "react";
import "../styles/dashboard.css";
import nobody from "../assets/images/nobody.jpg";

export default class DashBoard extends Component {
  
  constructor(props) {
    super(props);
   
  }
 
  render() { 
    return(
      <div className="content">
      
        <div className="row dashboard-menu">
          <div className="col-sm-2 dashboard-menu__left">
            <p>SoundIT Africa</p>
            <div className="mobile-search">
              <form className="mobile-form">
                <input className="mobile-input" type="search" name="search" placeholder="Search ..."/>
                <i className="fas fa-search mobile-search-icon"></i>
              </form>
            </div>
          </div>
          <div className="col-sm-10 dashboard-menu__right">
          <div className="menu-icon">
            <input type="checkbox" id="drawer-toggle" name="drawer-toggle"/>
          <label for="drawer-toggle" id="drawer-toggle-label"></label>
          <nav id="drawer">
            <ul className="drawer-menu">
              <li><a href="#">Vote</a></li>
              <li><a href="#">Comment</a></li>
              <li><a href="#">Social</a></li>
              <li><a href="#">Connect</a></li>
              <li><a href="#">Music</a></li>
              <li><a href="#">Videos</a></li>
              <li><a href="#">Most Liked</a></li>
              <li><a href="#">Most Viewed</a></li>
              <li><a href="#">Winners</a></li>
            </ul>
        </nav>
        </div>
            <div className="right-b">
              <i className="far fa-envelope right-b__icon"></i>
              <i className="far fa-bell right-b__icon"></i>
              <i className="far fa-flag right-b__icon"></i>
              <div className="right-b__owner">
                <img className="owner__image" src={nobody} alt=""/>
                <p>Doe</p>
              </div> 
            </div>
          </div>
        </div>

        <div className="row dashboard-body">
          <div className="col-sm-2 dashboard-body__left">
            <div className="dashboard-search">
              <form className="dashboard-form">
                <input className="dashboard-input" type="search" name="search" placeholder="Search ..."/>
                <i className="fas fa-search search-icon"></i>
              </form>
            </div>
            <div className="dashboard-navigation">
              <ul>
                <li><a href="#">Vote</a></li>
                <li><a href="#">Comment</a></li>
                <li><a href="#">Social</a></li>
                <li><a href="#">Connect</a></li>
                <li><a href="#">Music</a></li>
                <li><a href="#">Videos</a></li>
                <li><a href="#">Most Liked</a></li>
                <li><a href="#">Most Viewed</a></li>
                <li><a href="#">Winners</a></li>
              </ul>
            </div>
          </div>
          
          <div className="col-sm-10 dashboard-body">
            <div className="row head">
              <div className="col-md-6 col-left">
                <div className="col1">
                  <h1>Lorem ipsum</h1>
                </div>
                <div className="row b">
                  <div className="col-sm-6 b1">
                    <h1>Lorem ipsum</h1>
                  </div>
                  <div className="col-sm-6 b2">
                    <h1>Lorem ipsum</h1>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-right">
                <div className="col3">
                  <h1>Lorem ipsum</h1>
                </div>

                <div className="col4">
                  <h1>Lorem ipsum</h1>
                </div>
                
              </div>
            </div>
          </div>
        </div>

      </div>
      
    )
  }
}