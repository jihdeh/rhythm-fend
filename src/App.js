import React from "react";
import Header from "./components/header";
import Main from "./containers/main";
import HeaderTop from "./components/header-top";

import "./App.css";

const App = () => (
  <div style={{ height: "100%" }}>
    <HeaderTop />
    <Main />
    <Header />
  </div>
);

export default App;
