import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import "./RegisterForm.css";

class RegisterForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <br />
        <Field name="name" component="input" type="text" />
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <Field name="email" component="input" type="email" />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <Field name="password" component="input" type="password" />
        <br />
        <label htmlFor="retypePassword">Retype Password</label>
        <br />
        <Field name="retypePassword" component="input" type="password" />
        <br />
        <button type="submit">Register</button>
      </form>
    );
  }
}

export default reduxForm({
  form: "login"
})(RegisterForm);
