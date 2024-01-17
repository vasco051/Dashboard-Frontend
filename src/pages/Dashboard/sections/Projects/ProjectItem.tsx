import {FC} from "react";

import {getProgressColor} from "utils/getProgressColor.ts";

import {TProject} from "types/entities/TProject.ts";

import styles from './styles.module.scss'

interface IProjectItemProps {
  item: TProject
}

export const ProjectItem: FC<IProjectItemProps> = ({item}) => {
  const progress = parseInt((item.numberCompleted / item.numberTasks * 100).toFixed(0))

  const progressLineStyles = {
    background: getProgressColor(progress),
    width: `${progress > 100? 100 : progress}%`
  }

  return (
    <li className={styles.item}>
      <h4 className={styles.title}>{item.name}</h4>

      <div className={styles.progress}>
        <div className={styles.top}>
          <span className={styles.text}>Прогресс</span>
          <span className={styles.number}>{progress}%</span>
        </div>

        <div className={styles.progressBar}>
          <div className={styles.progressLine} style={progressLineStyles}></div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.completed}>
          <span className={styles.ready}>{item.numberCompleted}</span><span>/{item.numberTasks}</span>
        </div>
        <ul className={styles.users}>

        </ul>
      </div>
    </li>
  );
};