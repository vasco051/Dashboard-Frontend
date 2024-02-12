import {TTask, TTaskSphere} from "types/entities/TTask.ts";

export type GetTasksResponse = {
  spheres: TTaskSphere[]
}

export type GetTaskResponse = {
  task: TTask;
}