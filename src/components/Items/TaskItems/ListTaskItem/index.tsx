import {FC} from 'react';

import {TTask} from "types/entities/TTask.ts";

import IcCalendar from 'assets/icons/general/ic_calendar.svg?react'
import styles from './styles.module.scss'

interface IListTaskItemProps {
  item: TTask;
}

export const ListTaskItem: FC<IListTaskItemProps> = ({item}) => {
  const finishDate = new Date().toDateString()

  return (
    <li className={styles.item} draggable={true}>
      <div className={styles.left}>
        <div className={styles.info}>
          <h4 className={styles.title}>{item.title}</h4>
          <div className={styles.category}>
            <div style={{background: item.category.color}} className={styles.circle}></div>
            <span style={{color: item.category.color}}>{item.category.name}</span>
          </div>
        </div>

        {!!item.description && (
          <p className={styles.description}>{item.description}</p>
        )}
      </div>
      <div className={styles.right}>
        <div className={styles.dateWrapper}>
          <IcCalendar className={styles.icon}/>
          <span className={styles.date}>{finishDate}</span>
        </div>
      </div>
    </li>
  );
};