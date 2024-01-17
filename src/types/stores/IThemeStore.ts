import {ThemeVariant} from "../entities/TTheme.ts";

export interface IThemeStore {
  _currentTheme: ThemeVariant;

  // gets
  get currentTheme(): ThemeVariant;
  checkUserTheme(): ThemeVariant;

  // sets
  setTheme(newThemeVariant: ThemeVariant): void;
}
