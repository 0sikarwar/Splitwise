import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Bills from "./pages/bills";
import Friends from "./pages/friends";
const Routes = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/bills" component={Bills} />
      <Route exact path="/friends" component={Friends} />
    </Switch>
  </HashRouter>
);
export default Routes;
