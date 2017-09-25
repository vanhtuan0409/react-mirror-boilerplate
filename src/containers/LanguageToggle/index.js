import React, { Component } from "react";
import { actions, connect } from "mirrorx";

class LanguageToggle extends Component {
  onChangeLanguage(event) {
    actions.language.setLanguage(event.target.value);
  }

  render() {
    const { selectedLanguage } = this.props;
    return (
      <select value={selectedLanguage} onChange={this.onChangeLanguage}>
        <option value="en">English</option>
        <option value="vi">Vietnamese</option>
      </select>
    );
  }
}

export default connect(state => ({
  selectedLanguage: state.language.selected
}))(LanguageToggle);
