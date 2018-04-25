import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import DashBoard from "./dashboard";
import Search from "./searchpage";
import SignUp from "./signup";
import Profile from "./profile";

const Main = () => (
  <main className="main-container">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={DashBoard} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/rsg" component={Profile} />
    </Switch>
  </main>
);

export default Main;
