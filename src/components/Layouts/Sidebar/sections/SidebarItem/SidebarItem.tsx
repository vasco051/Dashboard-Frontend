import { FC, MouseEvent } from 'react';
import { Link } from "react-router-dom";
import clsx from "clsx";

import { TSidebarItem } from "./types.ts";

import styles from "./styles.module.scss";

interface ISidebarItemProps {
  item: TSidebarItem;
  short?: boolean;
}

const SidebarItem: FC<ISidebarItemProps> = ({ item, short }) => {
  const onClick = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    event.stopPropagation()
    item.onClick && item.onClick(item)
  }

  const itemClasses = clsx(styles.item, {
    [styles.short]: !!short
  })

  return (
    item?.link
      ? (
        <li>
          <Link className={itemClasses} to={item.link}>
            {'color' in item
              ? <div style={{ backgroundColor: item.color }} className={styles.colorWrapper}></div>
              : <div className={styles.iconWrapper}>{item.icon}</div>
            }
            <p className={styles.text}>{item.text}</p>
          </Link>
        </li>
      )
      : (
        <li>
          <button className={itemClasses} onClick={onClick}>
            {'color' in item
              ? <div style={{ backgroundColor: item.color }} className={styles.colorWrapper}></div>
              : <div className={styles.iconWrapper}>{item.icon}</div>
            }
            <p className={styles.text}>{item.text}</p>
          </button>
        </li>
      )
  );
};

export default SidebarItem;