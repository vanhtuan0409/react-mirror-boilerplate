import React, { Component } from "react";
import Header from "@src/components/Header";

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
        <main>{children}</main>
      </div>
    );
  }
}
export default Layout;
