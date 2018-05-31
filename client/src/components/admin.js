import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Admin extends Component {
  render(){
    return(
      <div>
        <div className="admin-search-container">
          <input
            className="adminSearchInput"
            type="text"
            placeholder="Search users"
          />
          <button className="admin-search-input__button">
            <i className="fas fa-search admin-search-icon" />
          </button>
        </div>
        <h1 className="admin-page-title">Users</h1>
        <div className="row">
          <div className="col-sm-4 col-md-3 admin-page-contestant-profile">
            <div className="admin-page-contestant-name">
              <p>John Doe</p>
              <div className="admin-page-contestant-edit">
                <p>Switch</p>
                <p className="admin-page-divider">|</p>
                <p>Remove</p>
              </div>
            </div>
            <Link
              to="/admin/users/details" 
            >
            <div className="admin-page-contestant-info">
              <img 
                className="admin-page-contestant-image"
                src="../images/nobody.jpg" />
              <div className="admin-page-contestant-text">
                <p>Status: Active</p>
                <p>johndoe@gmail.com</p>
              </div>
            </div>
            </Link>
          </div>
          
          <div className="col-sm-4 col-md-3 admin-page-contestant-profile">
            <div className="admin-page-contestant-name">
              <p>John Doe</p>
              <div className="admin-page-contestant-edit">
                <p>Switch</p>
                <p className="admin-page-divider">|</p>
                <p>Remove</p>
              </div>
            </div>
            <Link
              to="/admin/users/details" 
            >
            <div className="admin-page-contestant-info">
              <img 
                className="admin-page-contestant-image"
                src="../images/nobody.jpg" />
              <div className="admin-page-contestant-text">
                <p>Status: Active</p>
                <p>johndoe@gmail.com</p>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-sm-4 col-md-3 admin-page-contestant-profile">
            <div className="admin-page-contestant-name">
              <p>John Doe</p>
              <div className="admin-page-contestant-edit">
                <p>Switch</p>
                <p className="admin-page-divider">|</p>
                <p>Remove</p>
              </div>
            </div>
            <Link
              to="/admin/users/details" 
            >
            <div className="admin-page-contestant-info">
              <img 
                className="admin-page-contestant-image"
                src="../images/nobody.jpg" />
              <div className="admin-page-contestant-text">
                <p>Status: Active</p>
                <p>johndoe@gmail.com</p>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-sm-4 col-md-3 admin-page-contestant-profile">
            <div className="admin-page-contestant-name">
              <p>John Doe</p>
              <div className="admin-page-contestant-edit">
                <p>Switch</p>
                <p className="admin-page-divider">|</p>
                <p>Remove</p>
              </div>
            </div>
            <Link
              to="/admin/users/details" 
            >
            <div className="admin-page-contestant-info">
              <img 
                className="admin-page-contestant-image"
                src="../images/nobody.jpg" />
              <div className="admin-page-contestant-text">
                <p>Status: Active</p>
                <p>johndoe@gmail.com</p>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-sm-4 col-md-3 admin-page-contestant-profile">
            <div className="admin-page-contestant-name">
              <p>John Doe</p>
              <div className="admin-page-contestant-edit">
                <p>Switch</p>
                <p className="admin-page-divider">|</p>
                <p>Remove</p>
              </div>
            </div>
            <Link
              to="/admin/users/details" 
            >
            <div className="admin-page-contestant-info">
              <img 
                className="admin-page-contestant-image"
                src="../images/nobody.jpg" />
              <div className="admin-page-contestant-text">
                <p>Status: Active</p>
                <p>johndoe@gmail.com</p>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-sm-4 col-md-3 admin-page-contestant-profile">
            <div className="admin-page-contestant-name">
              <p>John Doe</p>
              <div className="admin-page-contestant-edit">
                <p>Switch</p>
                <p className="admin-page-divider">|</p>
                <p>Remove</p>
              </div>
            </div>
            <Link
              to="/admin/users/details" 
            >
            <div className="admin-page-contestant-info">
              <img 
                className="admin-page-contestant-image"
                src="../images/nobody.jpg" />
              <div className="admin-page-contestant-text">
                <p>Status: Active</p>
                <p>johndoe@gmail.com</p>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-sm-4 col-md-3 admin-page-contestant-profile">
            <div className="admin-page-contestant-name">
              <p>John Doe</p>
              <div className="admin-page-contestant-edit">
                <p>Switch</p>
                <p className="admin-page-divider">|</p>
                <p>Remove</p>
              </div>
            </div>
            <Link
              to="/admin/users/details" 
            >
            <div className="admin-page-contestant-info">
              <img 
                className="admin-page-contestant-image"
                src="../images/nobody.jpg" />
              <div className="admin-page-contestant-text">
                <p>Status: Active</p>
                <p>johndoe@gmail.com</p>
              </div>
            </div>
            </Link>
          </div>
          <div className="col-sm-4 col-md-3 admin-page-contestant-profile">
            <div className="admin-page-contestant-name">
              <p>John Doe</p>
              <div className="admin-page-contestant-edit">
                <p>Switch</p>
                <p className="admin-page-divider">|</p>
                <p>Remove</p>
              </div>
            </div>
            <Link
              to="/admin/users/details" 
            >
            <div className="admin-page-contestant-info">
              <img 
                className="admin-page-contestant-image"
                src="../images/nobody.jpg" />
              <div className="admin-page-contestant-text">
                <p>Status: Active</p>
                <p>johndoe@gmail.com</p>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}