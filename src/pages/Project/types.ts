import {ReactNode} from "react";

export enum ProjectTabVariant {
    LIST = 'list',
    BOARD = 'board',
}

export type TProjectTabContent = {
    [key in ProjectTabVariant]: ReactNode
}