import { ObservableMap } from "mobx";

import { TSphere } from "types/entities/TSphere.ts";
import { APIResponse } from "types/API/TAPI.ts";
import { GetSpheresResponse } from "types/API/TSphereResponse.ts";

export interface ISphereStore {
  _spheres: ObservableMap<number, TSphere>;
  _isLoading: boolean;

  // gets
  get spheres(): readonly TSphere[];
  get isLoading(): boolean;
  getSphereById(id: number): TSphere | null

  // sets
  setSphere(sphere: TSphere): void
  setLoading(isLoading: boolean): void

  // async
  getAll(projectId: number): APIResponse<GetSpheresResponse>
}