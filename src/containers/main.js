import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import Register from "./register";
import Dashboard from "./dashboard";
import Search from "./searchpage";
import Profile from "./profile";

const Main = () => (
  <main className="main-container">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/rsg" component={Profile} />
    </Switch>
  </main>
);

export default Main;
