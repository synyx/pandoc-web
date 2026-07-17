const LOCAL_STORAGE_KEY = 'theme';
const DEFAULT_THEME = 'light';
const VALID_THEMES = ['light', 'dark'];

export function getSavedTheme() {
  const theme = window.localStorage.getItem(LOCAL_STORAGE_KEY) || DEFAULT_THEME;

  if (VALID_THEMES.indexOf(theme) < 0) {
    return DEFAULT_THEME;
  }

  return theme;
}

export function setSavedTheme(theme) {
  window.localStorage.setItem(LOCAL_STORAGE_KEY, theme);
}
