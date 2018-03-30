import React from "react";
import Header from "./components/header";
import Main from "./containers/main";

import "./App.css";

const App = () => (
  <div style={{ height: "100%" }}>
    <Main />
    <Header />
  </div>
);

export default App;
