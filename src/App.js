import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../src/home/header';
import Login from '../src/user/login';
import Signup from '../src/user/signup';
import Pay from '../src/payment/pay'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/payment" component={Pay}/>
    </Switch>
  </BrowserRouter>
)

export default App;
