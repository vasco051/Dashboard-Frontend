import {FC} from 'react';

import {Hr} from "components/UI/Hr";

import {TTask} from "types/entities/TTask.ts";

import IcCalendar from 'assets/icons/general/ic_calendar.svg?react'
import styles from './styles.module.scss'

interface IBoardTaskItemProps {
  item: TTask
}

export const BoardTaskItem: FC<IBoardTaskItemProps> = ({item}) => {
  const finishDate = new Date().toDateString()

  return (
    <li className={styles.item} draggable>
      <div className={styles.header}>
        <h4 className={styles.title}>{item.title}</h4>
        <div className={styles.category}>
          <div style={{background: item.category.color}} className={styles.circle}></div>
          <span style={{color: item.category.color}}>{item.category.name}</span>
        </div>
      </div>

      {item.description && (
        <p className={styles.description}>{item.description}</p>
      )}

      <Hr/>

      <div className={styles.dateWrapper}>
        <IcCalendar className={styles.icon}/>
        <span className={styles.date}>{finishDate}</span>
      </div>
    </li>
  );
};