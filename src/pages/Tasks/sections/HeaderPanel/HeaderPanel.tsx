import {FC} from 'react';

import {PanelItem} from "./PanelItem.tsx";

import {TasksTabVariant} from "../../types.ts";
import {TPanelItem} from "./types.ts";

import IcList from 'assets/icons/tasks/ic_list.svg?react'
import IcBoard from 'assets/icons/tasks/ic_board.svg?react'
import IcTimeBoard from 'assets/icons/tasks/ic_time-board.svg?react'
import styles from './styles.module.scss'

interface IHeaderPanel {
  currentTab: TasksTabVariant;
  setCurrentTab: (tab: TasksTabVariant) => void
}

const headerPanelTabsConfig: TPanelItem[] = [
  {
    type: TasksTabVariant.LIST,
    title: 'Список',
    icon: <IcList/>
  },
  {
    type: TasksTabVariant.BOARD,
    title: 'Доска',
    icon: <IcBoard/>
  },
  {
    type: TasksTabVariant.TIME_BOARD,
    title: 'График',
    icon: <IcTimeBoard/>
  },
]


export const HeaderPanel: FC<IHeaderPanel> = ({currentTab, setCurrentTab}) => {
  return (
    <section>
      <ul className={styles.list}>
        {headerPanelTabsConfig.map(tab => (
          <PanelItem currentTab={currentTab} setCurrentTab={setCurrentTab} item={tab} key={tab.type}/>
        ))}
      </ul>
    </section>
  );
};