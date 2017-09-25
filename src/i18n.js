import { addLocaleData } from "react-intl";
import enLocaleData from "react-intl/locale-data/en";
import viLocaleData from "react-intl/locale-data/vi";

import enTranslationMessages from "./translations/en.json";
import viTranslationMessages from "./translations/vi.json";

export const DEFAULT_LANGUAGE = "en";

addLocaleData(enLocaleData);
addLocaleData(viLocaleData);

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LANGUAGE
      ? formatTranslationMessages(DEFAULT_LANGUAGE, enTranslationMessages)
      : {};
  return Object.keys(messages).reduce((formattedMessages, key) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LANGUAGE
        ? defaultFormattedMessages[key]
        : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  }, {});
};

export const translationMessages = {
  en: formatTranslationMessages("en", enTranslationMessages),
  vi: formatTranslationMessages("vi", viTranslationMessages)
};
