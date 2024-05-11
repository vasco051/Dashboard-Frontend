import { makeAutoObservable, observable, values } from "mobx";

import ColorService from "API/rest/colorService.ts";

import { TColor } from "types/entities/TColor.ts";
import { IColorStore } from "types/stores/IColorStore.ts";

export class ColorStore implements IColorStore {
  _colors = observable.map<number, TColor>()
  _isLoading: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  // gets
  get colors() {
    return values(this._colors)
  }

  get isLoading() {
    return this._isLoading
  }

  // sets
  setIsLoading = (isLoading: boolean) => {
    this._isLoading = isLoading
  }

  setColor = (color: TColor) => {
    this._colors.set(color.id, color)
  }

  getAll = async () => {
    this.setIsLoading(true)
    this._colors.clear()

    const response = await ColorService.getAll();

    if ('data' in response) {
      response.data.colors.forEach(color => this.setColor(color))
    }

    this.setIsLoading(false)
    return response
  }
}