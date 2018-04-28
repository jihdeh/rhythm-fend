import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/noMatch.css"

export default class NoMatch extends Component {
  render() {
    return (
      <div>
        <div className="nomatch">
          <img className="nomatch-logo" src="/images/logo.png" alt="" />
          <div className="nomatch-text">
            <h3>Page not found</h3>
            <p>Click to go <Link to="/"><span className="nomatch-home">Home</span></Link></p>
          </div>
        </div>
      </div>
    )
  } 
}