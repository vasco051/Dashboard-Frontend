import { ObservableMap } from "mobx";

import { APIResponse } from "types/API/TAPI.ts";
import { TColor } from "types/entities/TColor.ts";
import { GetColorsResponse } from "types/API/TColorResponse.ts";

export interface IColorStore {
  _colors: ObservableMap<number, TColor>
  _isLoading: boolean;

  // gets
  get colors(): readonly TColor[]
  get isLoading(): boolean

  // sets
  setIsLoading(isLoading: boolean): void
  setColor(color: TColor): void

  // async
  getAll(): APIResponse<GetColorsResponse>
}