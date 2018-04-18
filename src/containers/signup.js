import React, { Component } from "react";
import "../styles/signup.css";
import SignupView from "../components/signup/signupView";


export default class Signup extends Component {

  render() {

    return(
      <div>
         <SignupView />
      </div>
    );
  }
}