import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { bindActionCreators } from "redux";
import Header from "./components/header";
import Main from "./containers/main";
import MobileMenu from "./components/mobileMenu";
import AuthenticatedHeader from "./components/isAuthenticatedHeader";
import ErrorModal from "./components/ErrorModal";
import { clearError } from "./actions/errorActions";
import { fetchLocalUser } from "./actions/authActions";
import { openStatus } from "./actions/miscActions";
import "./App.css";

class App extends Component {
  componentWillMount() {
    this.enforceSSL();
    this.props.fetchLocalUser();
    this.props.checkOpenStatus();
  }

  componentWillReceiveProps() {
    if (
      (this.props.user || localStorage.getItem("token")) &&
      this.props.location.pathname === "/account"
    ) {
      this.props.history.push("/dashboard");
    }
  }

  enforceSSL() {
    const { protocol, host, pathname } = window.location;
    if (
      process.env.REACT_APP_NODE_ENV === "production" &&
      protocol !== "https:"
    ) {
      window.location.replace(`https://${host}${pathname}`);
    }
  }

  beforeLoggedIn() {
    const isAuthenticated = this.props.user || localStorage.getItem("token");
    return (
      <span>
        <MobileMenu />
        <Header />
        <Main {...this.props} authed={isAuthenticated} />
      </span>
    );
  }

  afterLoggedIn() {
    const isAuthenticated = this.props.user || localStorage.getItem("token");
    return (
      <span>
        <AuthenticatedHeader />
        <Main {...this.props} authed={isAuthenticated} />
      </span>
    );
  }

  onClose() {
    this.props.clearError();
  }

  render() {
    const { errorMessage } = this.props;
    return (
      <div>
        <ErrorModal
          errorMessage={errorMessage}
          onClose={() => this.onClose()}
        />
        {this.props.user ? this.afterLoggedIn() : this.beforeLoggedIn()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.userInfo,
  errorMessage: state.error
});
const mapDispatchToProps = dispatch => ({
  fetchLocalUser: bindActionCreators(fetchLocalUser, dispatch),
  clearError: bindActionCreators(clearError, dispatch),
  checkOpenStatus: bindActionCreators(openStatus, dispatch)
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
