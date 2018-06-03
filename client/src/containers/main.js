import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import get from "lodash/get";
import Loadable from "react-loadable";
import AdminPage from "./admin-page";
import UserDetails from "./userDetails";

// -----STYLES------ //
import "../styles/header.css";
import "../styles/home.css";
import "../styles/slider.css";
import "../styles/gallery.css";
import "../styles/edit-profile.css";
import "../styles/account.css";
import "../styles/donate.css";
import "../styles/aboutUs.css";
import "../styles/profile.css";
import "../styles/register.css";
import "../styles/searchpage.css";
import "../styles/dashboard.css";
import "../styles/currentlyClosed.css";
import "../styles/vote.css";

// ----END STYLES ----//

import NoMatch from "./noMatch";

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

function PublicRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        !authed ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
}

function PrivateAdminRoute({
  component: Component,
  authed,
  permission,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props =>
        authed && permission ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/account", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

function AppLoader(props) {
  if (props.error) {
    return (
      <div
        style={{ textAlign: "center", background: "#121212", height: "100vh" }}
      >
        Error! <button onClick={props.retry}>Retry</button>
      </div>
    );
  } else if (props.timedOut) {
    return (
      <div>
        Taking a long time... <button onClick={props.retry}>Retry</button>
      </div>
    );
  } else if (props.pastDelay) {
    return (
      <div
        style={{ textAlign: "center", background: "#121212", height: "100vh" }}
      >
        Loading...
      </div>
    );
  } else {
    return null;
  }
}

const Home = Loadable({
  loader: () => import("./home"),
  loading: AppLoader,
  delay: 200 // 0.2 seconds
});

const Dashboard = Loadable({
  loader: () => import("./dashboard"),
  loading: AppLoader,
  delay: 200 // 0.2 seconds
});

const Register = Loadable({
  loader: () => import("./register"),
  loading: AppLoader,
  delay: 200 // 0.2 seconds
});

const Donate = Loadable({
  loader: () => import("./donate"),
  loading: AppLoader,
  delay: 200 // 0.2 seconds
});

const Search = Loadable({
  loader: () => import("./searchpage"),
  loading: AppLoader,
  delay: 200 // 0.2 seconds
});

const AboutUs = Loadable({
  loader: () => import("./aboutUs"),
  loading: AppLoader,
  delay: 200 // 0.2 seconds
});

const Gallery = Loadable({
  loader: () => import("./gallery"),
  loading: AppLoader,
  delay: 200 // 0.2 seconds
});

const Account = Loadable({
  loader: () => import("./account"),
  loading: AppLoader,
  delay: 200 // 0.2 seconds
});

const Profile = Loadable({
  loader: () => import("./profile"),
  loading: AppLoader,
  delay: 200 // 0.2 seconds
});

const EditProfile = Loadable({
  loader: () => import("./editProfile"),
  loading: AppLoader,
  delay: 200 // 0.2 seconds
});

const Main = props => {
  return (
    <main className="main-container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/donate" component={Donate} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/rsg/:username" component={Profile} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/admin/users/details" component={UserDetails} />

        <PublicRoute
          authed={props.authed}
          path="/register"
          component={Register}
        />
        <PublicRoute
          authed={props.authed}
          path="/account"
          component={Account}
        />

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

        <PrivateAdminRoute
          authed={props.authed}
          permission={
            get(props, "permission") && props.permission.includes("main")
          }
          path="/wicked/users"
          component={AdminPage}
        />
        <Route component={NoMatch} />
      </Switch>
    </main>
  );
};

export default Main;
