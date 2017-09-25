import React, { PureComponent } from "react";
import { connect } from "mirrorx";
import { IntlProvider } from "react-intl";

class LanguageProvider extends PureComponent {
  render() {
    const { selectedLanguage, children } = this.props;
    return <IntlProvider locale={selectedLanguage}>{children}</IntlProvider>;
  }
}

export default connect(state => ({
  selectedLanguage: state.language.selected
}))(LanguageProvider);
