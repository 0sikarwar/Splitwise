import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// main app
import "./styles/app.scss";
import configureStore from "./store/ConfigureStore";
import "./containers/saga.js";
import "./pages/bills/saga.js";
import "./pages/friends/saga";
import Routes from "./Routes";
import App from "./App";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
    <Routes />
  </Provider>,
  document.getElementById("root")
);
