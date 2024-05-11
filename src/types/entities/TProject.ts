export type TProject = {
  id: number;
  name: string;
  description: string | null;
  color_name: string;
  number_of_completed: number,
  number_of_tasks: number
  created_at: string;
  updated_at: string;
}

export type TProjectCreate = {
  name: string;
  description: string;
  color: string | null
}