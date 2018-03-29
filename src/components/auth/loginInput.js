import React, { Component } from "react";
import "../../styles/login.css";

export default class LoginInput extends Component {
  render() {
    return (
      <div>
        <form>
          <label>
            Email:
            <input id="email" type="email" placeholder="" autoComplete="on" />
          </label>
          <label>
            Password:
            <input
              id="password"
              type="password"
              placeholder=""
              autoComplete="on"
            />
          </label>
          <input type="button" value="Log In" />
        </form>
      </div>
    );
  }
}
