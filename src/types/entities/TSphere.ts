import { TTask } from "./TTask.ts";

export type TSphere = {
  id: number
  name: string
  is_completed: boolean,
  created_at: string;
  updated_at: string;
  color_name: string
  tasks: TTask[]
}
