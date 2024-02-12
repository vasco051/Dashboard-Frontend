import { TProject } from "types/entities/TProject.ts";

export type GetProjectsResponse = {
  projects: TProject[];
}

export type GetProjectResponse = {
  project: TProject;
}