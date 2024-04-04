import { FC } from 'react';

import { Hr } from "components/UI/Hr";

import { getColorByName } from "utils/getColorByName.ts";

import { TTask } from "types/entities/TTask.ts";

import IcCalendar from 'assets/icons/general/ic_calendar.svg?react'
import styles from './styles.module.scss'

interface IBoardTaskItemProps {
  item: TTask;
  onRemoveItem?: (sphereId: number, taskId: number) => void
}

export const BoardTaskItem: FC<IBoardTaskItemProps> = ({item, onRemoveItem}) => {
  const finishDate = new Date().toDateString()

  const onClickRemoveItem = () => onRemoveItem && onRemoveItem(item.status_id, item.id)

  return (
    <li className={styles.item} draggable>
      <div className={styles.header}>
        <h4 className={styles.title}>{item.title}</h4>

        {!!item.tag && (
          <div className={styles.tag}>
            <div style={{background: getColorByName(item.tag.color_name)}} className={styles.circle}></div>
            <span style={{color: getColorByName(item.tag.color_name)}}>{item.tag.name}</span>
          </div>
        )}
      </div>

      {item.description && <p className={styles.description}>{item.description}</p>}

      <Hr/>

      <div className={styles.bottom}>
        <div className={styles.dateWrapper}>
          <IcCalendar className={styles.icon}/>
          <span className={styles.date}>{finishDate}</span>
        </div>

        <div className={styles.options} onClick={onClickRemoveItem}>Уд.</div>
      </div>
    </li>
  );
};