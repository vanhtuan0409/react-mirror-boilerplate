import mirror from "mirrorx";
import { MEDIUM_SCREEN } from "@src/responsive";

mirror.model({
  name: "responsive",
  initialState: {
    screen: MEDIUM_SCREEN
  },
  reducers: {
    setScreen(state, screen) {
      return Object.assign({}, state, { screen });
    }
  }
});
