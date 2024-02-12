import { PanelItem } from "./PanelItem.tsx";

import { TPanelInfo } from "./types.ts";

import styles from './styles.module.scss'

interface IHeaderPanelProps<T> {
  panel: TPanelInfo<T>
}

export function HeaderPanel<T>({ panel }: IHeaderPanelProps<T>) {
  return (
    <ul className={styles.list}>
      {panel.tabs.map(tab => (
        <PanelItem currentTab={panel.currentTab} setCurrentTab={panel.setCurrentTab} item={tab} key={tab.title}/>
      ))}
    </ul>
  );
}