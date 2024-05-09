import clsx from "clsx";

import { TPanelItem } from "./types.ts";

import styles from './styles.module.scss'

interface IPanelItemProps<T> {
  item: TPanelItem<T>
  currentTab: T
  setCurrentTab: (tab: T) => void
}

export function PanelItem<T>({ item, currentTab, setCurrentTab }: IPanelItemProps<T>) {
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
}