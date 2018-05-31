import React, { Component } from "react";
import UserDetails from "../components/user-details";
import "../styles/user-details.css";

export default class Details extends Component {
  render() {
    return (
      <div className="user-details-container">
        <UserDetails />
      </div>
    );
  }
}