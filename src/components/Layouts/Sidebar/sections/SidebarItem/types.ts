import { ReactNode } from "react";

// general
type TBaseItemProps = {
  id: number;
  text: string;
  onClick?: (item: TSidebarItem) => void;
}

type TAdditionalItemProps = TItemDecor & TLinkItem
export type TSidebarItem = TBaseItemProps & TAdditionalItemProps

// additional
type TItemWithIcon = {
  icon: ReactNode;
}

type TItemWithColor = {
  color: string;
}

type TItemDecor = TItemWithColor | TItemWithIcon

type TLinkItem = {
  link?: string;
}