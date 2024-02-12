import { FC, useEffect } from 'react';
import { observer } from "mobx-react";
import clsx from "clsx";

import { useStore } from "hooks/useStore.ts";
import { Hr } from "components/UI/Hr";
import Block from "../Block/Block.tsx";

import { dynamicLinks } from "config/routingLinks.ts";
import { menu } from "data/Sidebar.tsx";

import { TBlockItem } from "../Block/types.ts";

import styles from "./styles.module.scss";
import { getColorByName } from "../../../../../utils/getColorByName.ts";

const Content: FC = observer(() => {
  const store = useStore()
  const { isOpen } = store.sidebarStore;
  const { isAuth } = store.accountStore;

  const isOpenSidebar = isAuth && isOpen

  const { projects, getAll } = useStore().projectStore;

  useEffect(() => {
    isAuth && getAll()
  }, [isAuth]);

  const projectsBlock: TBlockItem = {
    title: 'Проекты',
    items: projects.map(project => ({
      id: project.id,
      link: dynamicLinks.project(project.id),
      text: project.name,
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