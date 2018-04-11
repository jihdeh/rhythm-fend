import React from "react";
import Header from "./components/header";
import Main from "./containers/main";
import MobileMenu from "./components/mobileMenu";
import "./App.css";

const App = () => (
  <div style={{ height: "100%" }}>
    <MobileMenu />
    <Main />
    <Header />
  </div>
);

export default App;
