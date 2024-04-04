import { makeAutoObservable, observable, ObservableMap, values } from "mobx";

import TaskService from "API/rest/taskService.ts";

import { ITasksStore } from "types/stores/ITasksStore.ts";
import { TTaskCreate, TTaskSphere } from "types/entities/TTask.ts";

export class TaskStore implements ITasksStore {
  _spheres: ObservableMap<number, TTaskSphere> = observable.map()
  _isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this)
  }

  // gets
  get spheres() {
    return values(this._spheres)
  }

  get isLoading() {
    return this._isLoading
  }

  // sets
  setSphere = (sphere: TTaskSphere) => {
    this._spheres.set(sphere.id, sphere)
  }

  setLoading = (isLoading: boolean) => {
    this._isLoading = isLoading
  }

  // async
  getAll = async (projectId: number) => {
    this.setLoading(true)
    this._spheres.clear()

    const response = await TaskService.getAll(projectId);

    if ('data' in response) {
      response.data.spheres.forEach(sphere => this.setSphere(sphere))
    }

    this.setLoading(false)

    return response
  }

  create = async (projectId: number, task: TTaskCreate) => {
    this.setLoading(true)

    const response = await TaskService.create(projectId, task);

    if ('data' in response) {
      console.log(response)
    }

    this.setLoading(false)
  }
}