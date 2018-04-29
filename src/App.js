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
import "./App.css";

class App extends Component {
  componentWillMount() {
    this.props.fetchLocalUser();
    if (this.props.user || localStorage.getItem("token")) {
      this.props.history.push("/");
    }
  }

  componentWillReceiveProps() {
    if (
      (this.props.user || localStorage.getItem("token")) &&
      this.props.location.pathname !== "/"
    ) {
      this.props.history.push("/");
    }
  }

  beforeLoggedIn() {
    return (
      <span>
        <MobileMenu />
        <Header />
        <Main />
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
  clearError: bindActionCreators(clearError, dispatch)
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
