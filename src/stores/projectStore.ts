import { makeAutoObservable, observable, ObservableMap, values } from "mobx";

import ProjectService from "API/rest/projectService.ts";

import { TProject, TProjectCreate } from "types/entities/TProject.ts";
import { IProjectStore } from "types/stores/IProjectStore.ts";

export class ProjectStore implements IProjectStore {
  _projects: ObservableMap<number, TProject> = observable.map()
  _currentProject: TProject | null = null
  _isLoading: boolean = false

  constructor() {
    makeAutoObservable(this)
  }

  // gets
  get projects() {
    return values(this._projects)
  }

  get currentProject() {
    return this._currentProject
  }

  get isLoading() {
    return this._isLoading
  }

  // sets
  setProject(project: TProject) {
    this._projects.set(project.id, project)
  }

  setCurrentProject(project: TProject | null) {
    this._currentProject = project
  }

  setIsLoading(isLoading: boolean) {
    this._isLoading = isLoading
  }

  // async
  getAll = async () => {
    this.setIsLoading(true)

    const response = await ProjectService.getAll();

    if ('data' in response) {
      response.data.projects.forEach(project => this.setProject(project))
    }

    this.setIsLoading(false)
    return response
  }

  getOne = async (id: number) => {
    this.setIsLoading(true)
    this.setCurrentProject(null)

    const response = await ProjectService.getOne(id);

    if ('data' in response) {
      this.setCurrentProject(response.data.project)
    }

    this.setIsLoading(false)
    return response
  }

  create = async (project: TProjectCreate) => {
    this.setIsLoading(true)

    const response = await ProjectService.create(project);

    if ('data' in response) {
      this.getAll()
    }

    this.setIsLoading(false)
    return response
  }


  update = async () => {

  }


  delete = async () => {

  }
}