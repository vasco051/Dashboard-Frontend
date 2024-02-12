import {ReactNode} from "react";

export type TBlockItem<T> = {
  statusId: number;
  header: {
    title: string;
    color: string
    onAddClick?: (block: TBlockItem<T>) => void;
  };
  items: T[];
  renderItem: (item: T) => ReactNode;
  emptyItem?: ReactNode;
}