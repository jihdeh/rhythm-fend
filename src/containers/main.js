import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Signup from "./signup";

const Main = () => (
  <main style={{ height: "100%" }}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Switch>
  </main>
);

export default Main;
