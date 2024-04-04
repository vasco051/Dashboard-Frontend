import { TTask } from "types/entities/TTask.ts";

export type GetTasksResponse = {
  tasks: TTask[]
}

export type GetTaskResponse = {
  task: TTask;
}