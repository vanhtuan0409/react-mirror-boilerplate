import React, { Component } from "react";
import { Link } from "mirrorx";
import withAuth from "@src/utils/withAuth";
import "./Header.css";

class Header extends Component {
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <hr />
      </header>
    );
  }
}

export default withAuth(Header);
