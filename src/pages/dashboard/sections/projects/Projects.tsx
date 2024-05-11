import { FC, useEffect } from 'react';
import { observer } from "mobx-react";

import { useStore } from "hooks/useStore.ts";
import { Hr } from "components/ui";
import { EHeadingLevel, Heading } from "components/ui-kit";
import { CreateProjectPopup } from "components/logic/popups/create-project-popup";
import { ProjectItem } from "./items/project-item";
import { EmptyItem } from "./items/empty-item";

import IcPlus from 'assets/icons/general/ic_plus.svg?react'
import styles from "./styles.module.scss";

export const Projects: FC = observer(() => {
  const store = useStore()
  const {account} = store.accountStore
  const {projects, getAll} = store.projectStore

  useEffect(() => {
    getAll()
  }, [account]);

  return (
    <section className={styles.projects}>
      <div className={styles.header}>
        <Heading level={EHeadingLevel.H4}>Мои проекты ({projects.length})</Heading>

        {!!projects.length && (
          <CreateProjectPopup>
            <button className={styles.addButton}><IcPlus/> Добавить проект</button>
          </CreateProjectPopup>
        )}
      </div>

      <Hr/>

      <ul className={styles.list}>
        {projects.length
          ? projects.map(project => (
            <ProjectItem item={project} key={project.id}/>
          )) : (
            <EmptyItem/>
          )
        }
      </ul>
    </section>
  );
});