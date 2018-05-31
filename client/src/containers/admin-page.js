import React, { Component } from "react";
import Admin from "../components/admin";
import "../styles/admin-page.css";

export default class AdminPage extends Component {
  render(){
    return (
      <div className="admin-page-container">
        <Admin />
      </div>
    );
  }
}