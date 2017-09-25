import React, { Component } from "react";
import { NavLink, actions, connect } from "mirrorx";
import withAuth from "@src/utils/withAuth";
import { ENGLISH_LANGUAGE, VIETNAMESE_LANGUAGE } from "@src/i18n";
import "./Header.css";

class Header extends Component {
  onChangeLanguage(event) {
    actions.language.setLanguage(event.target.value);
  }

  render() {
    const { selectedLanguage, auth } = this.props;
    const user = auth.getSession();

    return (
      <header className="header">
        <p>Hello {user.name}</p>
        <p>
          <button onClick={auth.logout}>Logout</button>
        </p>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
        </ul>
        <select value={selectedLanguage} onChange={this.onChangeLanguage}>
          <option value={ENGLISH_LANGUAGE}>English</option>
          <option value={VIETNAMESE_LANGUAGE}>Vietnamese</option>
        </select>
        <hr />
      </header>
    );
  }
}

export default withAuth(
  connect(state => ({
    selectedLanguage: state.language.selected
  }))(Header)
);
