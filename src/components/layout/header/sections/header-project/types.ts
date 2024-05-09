import { TProject } from "types/entities/TProject.ts";

export type TProjectInfo = {
  isLoading: boolean;
  project: TProject | null
}