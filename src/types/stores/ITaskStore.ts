import { APIResponse } from "types/API/TAPI.ts";
import { GetTaskResponse } from "types/API/TTaskResponse.ts";
import { TTaskCreate } from "types/entities/TTask.ts";

export interface ITaskStore {
  _isLoading: boolean;

  // gets
  get isLoading(): boolean;

  // sets
  setLoading(isLoading: boolean): void

  // async
  create(projectId: number, sphereId: number, task: TTaskCreate): APIResponse<GetTaskResponse>
  delete(projectId: number, sphereId: number, taskId: number): APIResponse<never>
}