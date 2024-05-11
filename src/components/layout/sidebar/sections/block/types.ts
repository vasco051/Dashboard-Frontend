import { ReactNode } from "react";
import { TSidebarItem } from "../sidebar-item/types.ts";

export type TBlockItem = {
  title: string
  items: TSidebarItem[]
  control?: ReactNode
  emptyItem?: ReactNode
}