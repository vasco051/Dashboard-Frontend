export type TTask = {
  id: number;
  title: string;
  description: string | null;
  created_at: string;
  updated_at: string;
  status_id: number;
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