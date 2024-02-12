import { ObservableMap } from "mobx";

import { APIResponse } from "types/API/TAPI.ts";

import { TProject } from "types/entities/TProject.ts";
import { GetProjectResponse, GetProjectsResponse } from "types/API/TProjectResponse.ts";

export interface IProjectStore {
  _projects: ObservableMap<number, TProject>;
  _currentProject: TProject | null;
  _isLoading: boolean;

  // gets
  get projects(): readonly TProject[];
  get currentProject(): TProject | null;
  get isLoading(): boolean;

  // sets
  setProject(project: TProject): void;
  setCurrentProject(project: TProject | null): void;
  setIsLoading(isLoading: boolean): void;

  // async
  getAll(): APIResponse<GetProjectsResponse>
  getOne(id: number): APIResponse<GetProjectResponse>
  create(): Promise<void>
  update(): Promise<void>
  delete(): Promise<void>
}