import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./home";
import Register from "./register";
import Dashboard from "./dashboard";
import Donate from "./donate";
import Search from "./searchpage";
import Profile from "./profile";
import NoMatch from "./noMatch";
import EditProfile from "./editProfile";
import AboutUs from "./aboutUs";
import Gallery from "./gallery";
import Account from "./account";

function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authed ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
}

const Main = props => {
  return (
    <main className="main-container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/donate" component={Donate} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/edit/profile" component={EditProfile} />
        <Route exact path="/rsg/:username" component={Profile} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/account" component={Account} />
        <PrivateRoute
          authed={props.authed}
          path="/dashboard"
          component={Dashboard}
        />
        <PrivateRoute
          authed={props.authed}
          path="/edit/profile"
          component={EditProfile}
        />
        <Route component={NoMatch} />
      </Switch>
    </main>
  );
};

export default Main;
