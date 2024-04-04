export type TTaskSphere = {
  id: number
  name: string
  is_completed: boolean,
  created_at: string;
  updated_at: string;
  color_name: string
  tasks: TTask[]
}

export type TTask = {
  id: number;
  title: string;
  description: string | null;
  created_at: string;
  updated_at: string;
  tag: {
    id: number,
    name: string,
    color_name: string,
    created_at: string;
    updated_at: string;
  } | null
}

export type TTaskCreate = {
  title: string;
  status: string;
  description: string | null;
}