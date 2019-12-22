import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// main app
import "./styles/app.scss";
import configureStore from "./store/ConfigureStore";
import "./containers/saga.js";
import Routes from "./Routes";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
