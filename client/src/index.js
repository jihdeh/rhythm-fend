import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import configureStore from "./configureStore";
import registerServiceWorker from "./registerServiceWorker";
import LazyLoad from 'react-lazyload';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <LazyLoad
      once={true}
      >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LazyLoad>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
