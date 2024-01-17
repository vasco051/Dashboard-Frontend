import {ObservableMap} from "mobx";

import {TProject} from "types/entities/TProject.ts";

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
  getAll(): Promise<void>
  getOne(): Promise<void>
  create(): Promise<void>
  update(): Promise<void>
  delete(): Promise<void>
}