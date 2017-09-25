import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import messages from "./messages";

class HomePage extends Component {
  render() {
    return (
      <div>
        <FormattedMessage {...messages.homepage} />
      </div>
    );
  }
}

export default HomePage;
