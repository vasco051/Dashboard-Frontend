import { TBlockItem } from "components/Layouts/ItemsBlock";

import { TTask } from "types/entities/TTask.ts";

export interface ITaskPopupProps {
  isOpen: boolean;
  onClose: () => void;

  projectId: number;
  projectName: string;

  blockInfo: TBlockItem<TTask> | null;
}