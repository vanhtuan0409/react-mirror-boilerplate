import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import message from "./message";

class AboutPage extends Component {
  render() {
    return (
      <div>
        <FormattedMessage {...message.aboutpage} />
      </div>
    );
  }
}

export default AboutPage;
