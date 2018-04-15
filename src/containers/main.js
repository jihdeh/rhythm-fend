import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import DashBoard from "./dashboard";
import Search from "./searchpage";

const Main = () => (
  <main className="main-container">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={DashBoard} />
      <Route exact path="/search" component={Search} />
    </Switch>
  </main>
);

export default Main;
