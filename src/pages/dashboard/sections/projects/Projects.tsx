import { FC, useEffect } from 'react';
import { observer } from "mobx-react";

import { useStore } from "hooks/useStore.ts";
import { Hr } from "components/ui";
import { ProjectItem } from "./ProjectItem.tsx";

import styles from "./styles.module.scss";

export const Projects: FC = observer(() => {
  const { projects, getAll } = useStore().projectStore

  useEffect(() => {
    getAll()
  }, []);

  return (
    <section className={styles.projects}>
      <h4 className={styles.title}>Мои проекты</h4>
      <Hr/>
      <ul className={styles.list}>
        {projects.map(project => (
          <ProjectItem item={project} key={project.id}/>
        ))}
      </ul>
    </section>
  );
});