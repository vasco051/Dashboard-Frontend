import {TBlockItem} from "../../types.ts"

import IcPlus from 'assets/icons/general/ic_plus.svg?react'
import IcDots from 'assets/icons/general/ic_dots.svg?react'
import styles from "./styles.module.scss";

interface IHeaderProps<T> {
  block: TBlockItem<T>
}

export function Header<T>({block}: IHeaderProps<T>) {
  const countItems = block.items.length < 10 ? `0${block.items.length}` : block.items.length

  return (
    <header className={styles.header}>
      <h4 className={styles.title} style={{color: block.header.color}}>
        {block.header.title} <span className={styles.countItems}>({countItems})</span>
      </h4>

      <div className={styles.options}>
        <IcPlus/>
        <IcDots/>
      </div>
    </header>
  );
}