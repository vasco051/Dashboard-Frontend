import { IInfoListProps } from "./types.ts";

import styles from "./styles.module.scss";

export const InfoList = ({items}: IInfoListProps) => {
  return (
    <ul className={styles.list}>
      {items.map(item => (
        <li className={styles.item}>
          <span className={styles.left}>{item.title}:</span>
          <span className={styles.right}>{item.content}</span>
        </li>
      ))}
    </ul>
  )
}