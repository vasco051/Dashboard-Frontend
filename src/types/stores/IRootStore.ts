import { IAccountStore } from "./IAccountStore.ts";
import { IThemeStore } from "./IThemeStore.ts";
import { ISidebarStore } from "./ISidebarStore.ts";
import { IProjectStore } from "./IProjectStore.ts";
import { ISphereStore } from "./ISphereStore.ts";
import { ITaskStore } from "./ITaskStore.ts";

export interface IRootStore{
  accountStore: IAccountStore;
  themeStore: IThemeStore;
  sidebarStore: ISidebarStore;
  projectStore: IProjectStore;
  sphereStore: ISphereStore;
  taskStore: ITaskStore;
}