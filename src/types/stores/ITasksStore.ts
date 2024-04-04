import { ObservableMap } from "mobx";

import { TTaskSphere } from "types/entities/TTask.ts";
import { APIResponse } from "types/API/TAPI.ts";
import { GetTasksResponse } from "types/API/TTaskResponse.ts";

export interface ITasksStore {
  _spheres: ObservableMap<number, TTaskSphere>;
  _isLoading: boolean;

  // gets
  get spheres(): readonly TTaskSphere[];

  get isLoading(): boolean;

  // sets
  setSphere(sphere: TTaskSphere): void

  setLoading(isLoading: boolean): void

  // async
  getAll(projectId: number): APIResponse<GetTasksResponse>
}