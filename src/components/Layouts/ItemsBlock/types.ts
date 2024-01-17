import {ReactNode} from "react";

export type TBlockItem<T> = {
  items: T[];
  renderItem: (item: T) => ReactNode;
  header: {
    title: string;
    color: string
  }
}