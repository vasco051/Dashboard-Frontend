import { ListSection } from "./sections/ListSection";
import { BoardSection } from "./sections/BoardSection";

import { TPanelInfo } from "components/layout/header";
import { ProjectTabVariant, TProjectTabContent } from "./types.ts";

import IcList from 'assets/icons/tasks/ic_list.svg?react'
import IcBoard from 'assets/icons/tasks/ic_board.svg?react'

export function getProjectPanelInfo(currentTab: ProjectTabVariant, setCurrentTab: (tab: ProjectTabVariant) => void) {
  return {
    currentTab,
    setCurrentTab,
    tabs: [
      {
        title: 'Список',
        type: ProjectTabVariant.LIST,
        icon: <IcList/>
      },
      {
        title: 'Доска',
        type: ProjectTabVariant.BOARD,
        icon: <IcBoard/>
      },
    ]
  } as TPanelInfo<ProjectTabVariant>
}

export const contentConfig: TProjectTabContent = {
  [ProjectTabVariant.LIST]: <ListSection/>,
  [ProjectTabVariant.BOARD]: <BoardSection/>,
}