import { FC } from "react";
import { Link } from "react-router-dom";

import { getProgressColor } from "utils/getProgressColor.ts";

import { dynamicLinks } from "config/routingLinks.ts";

import { TProject } from "types/entities/TProject.ts";

import styles from './styles.module.scss'

interface IProjectItemProps {
  item: TProject
}

export const ProjectItem: FC<IProjectItemProps> = ({ item }) => {
  const progress = parseInt((item.number_of_completed / item.number_of_tasks * 100).toFixed(0))

  const hasTasks = item.number_of_tasks > 0

  const progressLineStyles = {
    background: getProgressColor(progress),
    width: `${hasTasks ? progress : 0}%`
  }

  return (
    <li className={styles.item}>
      <Link to={dynamicLinks.project(item.id)} className={styles.link}>
        <h4 className={styles.title}>{item.name}</h4>

        <div className={styles.progress}>
          <div className={styles.top}>
            <span className={styles.text}>{hasTasks ? 'Прогресс' : 'Прогресс отсутствует'}</span>
            {hasTasks && <span className={styles.number}>{progress}%</span>}
          </div>

          <div className={styles.progressBar}>
            <div className={styles.progressLine} style={progressLineStyles}></div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.completed}>
            <span className={styles.ready}>{item.number_of_completed}</span><span>/{item.number_of_tasks}</span>
          </div>
        </div>
      </Link>
    </li>
  );
};