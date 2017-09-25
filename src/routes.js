import React from "react";
import { Router, Switch, Route } from "mirrorx";

import Layout from "./components/Layout";
import ProtectedRoute from "./containers/ProtectedRoute";
import NotFoundPage from "./containers/NotFoundPage";
import LoginPage from "./containers/LoginPage";
import RegisterPage from "./containers/RegisterPage";
import HomePage from "./containers/HomePage";
import AboutPage from "./containers/AboutPage";

export default () => (
  <Router>
    <Switch>
      <ProtectedRoute path="/" layout={Layout} exact component={HomePage} />
      <ProtectedRoute path="/about" layout={Layout} component={AboutPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);
