import {makeAutoObservable} from "mobx";

import {ITasksStore} from "types/stores/ITasksStore.ts";

export class TaskStore implements ITasksStore {
  constructor() {
    makeAutoObservable(this)
  }
}