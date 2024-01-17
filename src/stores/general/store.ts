import {makeAutoObservable} from "mobx";

import {AccountStore} from "stores/accountStore.ts";
import {ThemeStore} from "stores/themeStore.ts";
import {SidebarStore} from "stores/sidebarStore.ts";
import {TaskStore} from "stores/taskStore.ts";
import {ProjectStore} from "stores/projectStore.ts";

import {IAccountStore} from "types/stores/IAccountStore.ts";
import {IThemeStore} from "types/stores/IThemeStore.ts";
import {ISidebarStore} from "types/stores/ISidebarStore.ts";
import {ITasksStore} from "types/stores/ITasksStore.ts";
import {IProjectStore} from "types/stores/IProjectStore.ts";

export class Store {
  accountStore: IAccountStore;
  themeStore: IThemeStore;
  sidebarStore: ISidebarStore;
  taskStore: ITasksStore;
  projectStore: IProjectStore;

  constructor() {
    this.accountStore = new AccountStore();
    this.themeStore = new ThemeStore();
    this.sidebarStore = new SidebarStore();
    this.taskStore = new TaskStore();
    this.projectStore = new ProjectStore();
    makeAutoObservable(this);
  }
}

export const store = new Store();