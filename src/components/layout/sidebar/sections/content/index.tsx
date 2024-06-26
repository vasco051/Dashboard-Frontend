import { FC, useEffect } from 'react';
import { observer } from "mobx-react";
import clsx from "clsx";

import { useStore } from "hooks/useStore.ts";
import { Hr } from "components/ui";
import Block from "../block";

import { getColorByName } from "utils/getColorByName.ts";
import { dynamicLinks } from "config/routingLinks.ts";
import { menu } from "data/sidebar.tsx";

import { TBlockItem } from "../block/types.ts";

import styles from "./styles.module.scss";
import { EmptyProjectsItem } from "./empty-projects-item";
import { ProjectsControls } from "./projects-controls";

const Content: FC = observer(() => {
  const store = useStore()
  const {isOpen} = store.sidebarStore;
  const {isAuth} = store.accountStore;

  const isOpenSidebar = isAuth && isOpen

  const {projects, getAll} = useStore().projectStore;

  useEffect(() => {
    isAuth && getAll()
  }, [isAuth]);

  const projectsBlock: TBlockItem = {
    title: 'Проекты',
    control: <ProjectsControls/>,
    emptyItem: <EmptyProjectsItem/>,
    items: projects.map(project => ({
      id: project.id,
      text: project.name,
      link: dynamicLinks.project(project.id),
      color: getColorByName(project.color_name)
    }))
  }

  const contentClasses = clsx(styles.content, {
    [styles.hidden]: !isOpenSidebar
  })

  return (
    <section className={contentClasses}>
      <Block block={menu}/>
      <Hr/>
      <Block block={projectsBlock}/>
    </section>
  );
});

export default Content;