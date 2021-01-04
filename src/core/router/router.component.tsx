import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { switchRoutes } from "./routes";

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={switchRoutes.root}>
          <p>This is the root!</p>
        </Route>
      </Switch>
    </Router>
  );
};
