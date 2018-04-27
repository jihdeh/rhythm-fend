import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import Register from "./register";
import Search from "./searchpage";
import Profile from "./profile";

const Main = () => (
  <main className="main-container">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/rsg/:uniqueCode" component={Profile} />
    </Switch>
  </main>
);

export default Main;
