import { makeAutoObservable } from "mobx";

import { localStorageConst } from "config/localStorageConst.ts";

import { ThemeVariant } from "types/entities/TTheme.ts";
import { IThemeStore } from "types/stores/IThemeStore.ts";

export class ThemeStore implements IThemeStore {
  _currentTheme: ThemeVariant = ThemeVariant.LIGHT;

  constructor() {
    this.setTheme(this.checkUserTheme());
    makeAutoObservable(this);
  }

  // gets
  get currentTheme() {
    return this._currentTheme;
  }

  checkUserTheme = () => {
    const userTheme = localStorage.getItem(localStorageConst.appTheme);
    let finallyUserTheme = ThemeVariant.LIGHT;

    if (userTheme) {
      Object.values(ThemeVariant).forEach((value) => {
        if (value === userTheme) finallyUserTheme = value
      })
    }

    return finallyUserTheme;
  }

  // sets
  setTheme = (theme: ThemeVariant) => {
    document.documentElement.setAttribute(localStorageConst.appTheme, theme);
    localStorage.setItem(localStorageConst.appTheme, theme);
    this._currentTheme = theme;
  }
}