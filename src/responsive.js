import { actions } from "mirrorx";

export const EXTRA_SMALL_SCREEN = 0;
export const SMALL_SCREEN = 1;
export const MEDIUM_SCREEN = 2;
export const LARGE_SCREEN = 3;

export const extraSmallScreenMql = window.matchMedia(`(max-width: 768px)`);
export const smallScreenMql = window.matchMedia(
  `(min-width: 768px) and (max-width: 992px)`
);
export const mediumScreenMql = window.matchMedia(
  `(min-width: 992px) and (max-width: 1200px)`
);
export const largeScreenMql = window.matchMedia(`(min-width: 1200px)`);

export function getScreenSize() {
  if (extraSmallScreenMql.matches) return EXTRA_SMALL_SCREEN;
  if (smallScreenMql.matches) return SMALL_SCREEN;
  if (mediumScreenMql.matches) return MEDIUM_SCREEN;
  return LARGE_SCREEN;
}

extraSmallScreenMql.addListener(() => {
  if (extraSmallScreenMql.matches) {
    actions.responsive.setScreen(EXTRA_SMALL_SCREEN);
  }
});
smallScreenMql.addListener(() => {
  if (smallScreenMql.matches) {
    actions.responsive.setScreen(SMALL_SCREEN);
  }
});
mediumScreenMql.addListener(() => {
  if (mediumScreenMql.matches) {
    actions.responsive.setScreen(MEDIUM_SCREEN);
  }
});
largeScreenMql.addListener(() => {
  if (largeScreenMql.matches) {
    actions.responsive.setScreen(LARGE_SCREEN);
  }
});

setTimeout(() => {
  const initialScreen = getScreenSize();
  actions.responsive.setScreen(initialScreen);
}, 1);
