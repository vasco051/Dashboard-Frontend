import {ReactNode} from "react";

import {TasksTabVariant} from "../../types.ts";

export type TPanelItem = {
  title: string;
  icon: ReactNode;
  type: TasksTabVariant;
}