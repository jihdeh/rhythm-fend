import React, { Component } from "react";
import Header from "./components/header";
import Main from "./containers/main";
import MobileMenu from "./components/mobileMenu";
import AuthenticatedHeader from "./components/isAuthenticatedHeader";
import "./App.css";

class App extends Component {
  state = {
    isLoggedIn: true
  };

  beforeLoggedIn() {
    return (
      <span>
        <MobileMenu />
        <Main />
        <Header />
      </span>
    );
  }

  afterLoggedIn() {
    return (
      <span>
        <AuthenticatedHeader />
        <Main />
      </span>
    );
  }

  render() {
    return (
      <div style={{ height: "100%" }}>
        {this.state.isLoggedIn ? this.afterLoggedIn() : this.beforeLoggedIn()}
      </div>
    );
  }
}

export default App;
