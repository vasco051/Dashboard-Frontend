import { ReactNode } from "react";

export enum TasksTabVariant {
  LIST = 'list',
  BOARD = 'board',
  TIME_BOARD = 'timeBoard'
}

export type TTasksTabContent = {
  [key in TasksTabVariant]: ReactNode
}