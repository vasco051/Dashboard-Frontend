import { HTMLAttributes, PropsWithChildren, ReactNode } from "react";

export interface IHeadingProps extends PropsWithChildren, HTMLAttributes<HTMLHeadingElement> {
  level: EHeadingLevel;
}

export enum EHeadingLevel {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

export type THeadingConfig = {
  [key in EHeadingLevel]: ReactNode
}