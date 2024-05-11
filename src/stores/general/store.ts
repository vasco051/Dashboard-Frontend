import { makeAutoObservable } from "mobx";

import { AccountStore } from "stores/accountStore.ts";
import { ThemeStore } from "stores/themeStore.ts";
import { SidebarStore } from "stores/sidebarStore.ts";
import { SphereStore } from "stores/sphereStore.ts";
import { ProjectStore } from "stores/projectStore.ts";
import { TaskStore } from "stores/taskStore.ts";
import { ColorStore } from "stores/colorStore.ts";

import { IRootStore } from "types/stores/IRootStore.ts";

import { IAccountStore } from "types/stores/IAccountStore.ts";
import { IThemeStore } from "types/stores/IThemeStore.ts";
import { ISidebarStore } from "types/stores/ISidebarStore.ts";
import { IProjectStore } from "types/stores/IProjectStore.ts";
import { ISphereStore } from "types/stores/ISphereStore.ts";
import { ITaskStore } from "types/stores/ITaskStore.ts";
import { IColorStore } from "types/stores/IColorStore.ts";

export class Store implements IRootStore {
  accountStore: IAccountStore;
  themeStore: IThemeStore;
  sidebarStore: ISidebarStore;
  projectStore: IProjectStore;
  sphereStore: ISphereStore;
  taskStore: ITaskStore;
  colorStore: IColorStore;

  constructor() {
    this.accountStore = new AccountStore();
    this.themeStore = new ThemeStore();
    this.sidebarStore = new SidebarStore();
    this.projectStore = new ProjectStore();
    this.sphereStore = new SphereStore();
    this.taskStore = new TaskStore(this);
    this.colorStore = new ColorStore();
    makeAutoObservable(this);
  }
}

export const store = new Store();