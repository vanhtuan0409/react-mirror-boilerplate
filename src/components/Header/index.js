import React, { Component } from "react";
import { NavLink, actions } from "mirrorx";
import withAuth from "@src/utils/withAuth";
import LanguageToggle from "@src/containers/LanguageToggle";
import "./Header.css";

class Header extends Component {
  onChangeLanguage(event) {
    actions.language.setLanguage(event.target.value);
  }

  render() {
    const { auth } = this.props;
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
        <LanguageToggle />
        <hr />
      </header>
    );
  }
}

export default withAuth(Header);
