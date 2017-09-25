import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import "./LoginForm.css";

class LoginForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <br />
        <Field name="email" component="input" type="email" />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <Field name="password" component="input" type="password" />
        <br />
        <button type="submit">Sign in</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "login"
})(LoginForm);
