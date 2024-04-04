import { makeAutoObservable } from "mobx";

import TaskService from "API/rest/taskService.ts";

import { TTaskCreate } from "types/entities/TTask.ts";
import { ITaskStore } from "types/stores/ITaskStore.ts";
import { IRootStore } from "../types/stores/IRootStore.ts";

export class TaskStore implements ITaskStore {
  _root: IRootStore | null = null
  _isLoading: boolean = false;

  constructor(rootStore: IRootStore) {
    this._root = rootStore
    makeAutoObservable(this)
  }

  // gets
  get isLoading() {
    return this._isLoading
  }

  // sets
  setLoading = (isLoading: boolean) => {
    this._isLoading = isLoading
  }

  // async
  create = async (projectId: number, sphereId: number, task: TTaskCreate) => {
    this.setLoading(true)

    const response = await TaskService.create(projectId, sphereId, task);

    if ('data' in response) {
      const sphere = this._root?.sphereStore.getSphereById(sphereId)

      if (sphere) {
        this._root?.sphereStore.setSphere({...sphere, tasks: [...sphere.tasks, response.data.task]})
      }
    }

    this.setLoading(false)
    return response
  }

  delete = async (projectId: number, sphereId: number, taskId: number) => {
    this.setLoading(true)

    const response = await TaskService.delete(projectId, sphereId, taskId);

    if (response.status === 200) {
      const sphere = this._root?.sphereStore.getSphereById(sphereId)

      if (sphere) {
        this._root?.sphereStore.setSphere({...sphere, tasks: sphere.tasks.filter(task => task.id !== taskId)})
      }
    }

    this.setLoading(false)
    return response
  }
}