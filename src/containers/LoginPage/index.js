import React, { Component } from "react";
import { Redirect, Link } from "mirrorx";
import withAuth from "@src/utils/withAuth";
import LoginForm from "./LoginForm";
import "./LoginPage.css";

class LoginPage extends Component {
  render() {
    const { auth } = this.props;

    if (auth.isAuthenticated()) {
      const { from } = this.props.location.state || { from: { pathname: "/" } };
      return <Redirect to={from} />;
    }

    return (
      <div>
        <LoginForm onSubmit={auth.login} />
        <Link to="/register">Register new account</Link>
      </div>
    );
  }
}

export default withAuth(LoginPage);
