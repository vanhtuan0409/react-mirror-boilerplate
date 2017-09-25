import React, { Component } from "react";
import { Redirect, Link } from "mirrorx";
import withAuth from "@src/utils/withAuth";
import RegisterForm from "./RegisterForm";
import "./RegisterPage.css";

class RegisterPage extends Component {
  render() {
    const { auth } = this.props;

    if (auth.isAuthenticated()) {
      const { from } = this.props.location.state || { from: { pathname: "/" } };
      return <Redirect to={from} />;
    }

    return (
      <div>
        <RegisterForm onSubmit={auth.signup} />
        <Link to="/login">Login if already have account</Link>
      </div>
    );
  }
}

export default withAuth(RegisterPage);
