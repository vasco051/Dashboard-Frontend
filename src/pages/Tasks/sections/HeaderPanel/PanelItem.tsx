import {FC} from 'react';
import clsx from "clsx";

import {TPanelItem} from "./types.ts";
import {TasksTabVariant} from "../../types.ts";

import styles from './styles.module.scss'

interface IPanelItemProps {
  currentTab: TasksTabVariant;
  setCurrentTab: (tab: TasksTabVariant) => void;
  item: TPanelItem;
}

export const PanelItem: FC<IPanelItemProps> = ({item, currentTab, setCurrentTab}) => {
  const itemClasses = clsx(styles.item, {
    [styles.active]: currentTab === item.type
  })

  return (
    <li className={itemClasses}>
      <button onClick={() => setCurrentTab(item.type)} className={styles.button}>
        {item.icon}
        <span>{item.title}</span>
      </button>
    </li>
  );
};