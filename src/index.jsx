import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// main app
import App from "./containers/App";
import "./styles/app.scss";
import configureStore from "./store/ConfigureStore";
import "./containers/saga.js";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
