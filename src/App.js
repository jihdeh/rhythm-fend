import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./components/header";
import Main from "./containers/main";
import MobileMenu from "./components/mobileMenu";
import AuthenticatedHeader from "./components/isAuthenticatedHeader";
import "./App.css";

class App extends Component {
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
    console.log(this.props.user, "---");
    return (
      <div style={{ height: "100%" }}>
        {this.props.user ? this.afterLoggedIn() : this.beforeLoggedIn()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.userInfo
});

export default connect(mapStateToProps)(App);
