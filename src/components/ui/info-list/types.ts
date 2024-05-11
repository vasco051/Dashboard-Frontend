import { ReactNode } from "react";

export interface IInfoListProps {
  items: TInfoItem[]
}

export type TInfoItem = {
  title: string
  content: ReactNode
}