import {FC} from 'react';

import {Hr} from "components/UI/Hr";
import {ProjectItem} from "./ProjectItem.tsx";

import {projectConfig} from "data/Dashboard.ts";

import styles from "./styles.module.scss";

export const Projects: FC = () => {
  return (
    <section className={styles.projects}>
      <h4 className={styles.title}>Недавние проекты</h4>
      <Hr/>
      <ul className={styles.list}>
        {projectConfig.map(project => (
          <ProjectItem item={project} key={project.id}/>
        ))}
      </ul>
    </section>
  );
};