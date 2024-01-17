import {makeAutoObservable, observable, ObservableMap, values} from "mobx";

import {TProject} from "types/entities/TProject.ts";
import {IProjectStore} from "types/stores/IProjectStore.ts";
import projectService from "../API/rest/projectService.ts";

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
    this._projects.set(project.project_id, project)
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

    const response = await projectService.getAll();

    if ('data' in response) {
      response.data.projects.forEach(project => this.setProject(project))
    }

    this.setIsLoading(false)
  }

  getOne = async () => {

  }

  create = async () => {

  }


  update = async () => {

  }


  delete = async () => {

  }
}