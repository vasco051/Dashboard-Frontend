import {ReactNode} from "react";

export type TPanelInfo<T> = {
  tabs: TPanelItem<T>[]
  currentTab: T;
  setCurrentTab: (tab: T) => void
}

export type TPanelItem<T> = {
  title: string;
  icon?: ReactNode;
  type: T;
}