import React, { PureComponent } from "react";
import { connect } from "mirrorx";
import { IntlProvider } from "react-intl";

class LanguageProvider extends PureComponent {
  render() {
    const { locale, messages, children } = this.props;
    const selectedMessage = messages[locale];
    return (
      <IntlProvider key={locale} locale={locale} messages={selectedMessage}>
        {children}
      </IntlProvider>
    );
  }
}

export default connect(state => ({
  locale: state.language.selected
}))(LanguageProvider);
