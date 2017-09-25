var jsonfile = require("jsonfile");
const paths = require("../config/paths");

const messagePath = `${paths.appTranslation}/messages.json`;
const messages = require(messagePath);

const appLocales = ["en", "vi"];

const translation = {};
for (let i = 0; i < messages.length; i++) {
  const m = messages[i];
  translation[m.id] = m.defaultMessage;
}

appLocales.forEach(locale => {
  const filepath = `${paths.appTranslation}/${locale}.json`;
  jsonfile.writeFileSync(filepath, translation, { spaces: 2 });
});
