import mirror from "mirrorx";
import { DEFAULT_LANGUAGE } from "@src/i18n";

mirror.model({
  name: "language",
  initialState: {
    selected: DEFAULT_LANGUAGE
  },
  reducers: {
    setLanguage(state, selected) {
      return { selected };
    }
  }
});
