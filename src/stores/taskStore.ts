import {makeAutoObservable, observable, ObservableMap, values} from "mobx";

import TaskService from "API/rest/taskService.ts";

import {ITasksStore} from "types/stores/ITasksStore.ts";
import {TTaskSphere} from "types/entities/TTask.ts";

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

  addOne = (sphereId: number) => {
    const currentSphere = this._spheres.get(sphereId)

    if (!currentSphere) return null

    currentSphere.name += ' '
    currentSphere.tasks.unshift({
      id: 999,
      tag: null,
      created_at: '',
      updated_at: '',
      description: null,
      title: 'new task'
    })

    this.setSphere(currentSphere)
  }
}