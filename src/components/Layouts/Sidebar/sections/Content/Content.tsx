import {FC, useEffect, useState} from 'react';
import {observer} from "mobx-react";
import clsx from "clsx";

import {useStore} from "hooks/useStore.ts";
import {Hr} from "components/UI/Hr";
import Block from "../Block/Block.tsx";

import {menu} from "data/Sidebar.tsx";

import {TBlockItem} from "../Block/types.ts";

import styles from "./styles.module.scss";

const Content: FC = observer(() => {
  const {isOpen} = useStore().sidebarStore;
  const {projects, getAll} = useStore().projectStore;
  const [isShowContent, setIsShowContent] = useState(isOpen)

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        !isOpen && setIsShowContent(false)
      }, 700)
    } else setIsShowContent(true)
  }, [isOpen]);

  useEffect(() => {
    getAll()
  }, []);

  const projectsBlock: TBlockItem = {
    title: 'Проекты',
    items: projects.map(project => ({
      id: project.project_id,
      link: String(project.project_id),
      text: project.name,
      color: project.color
    }))
  }

  const contentClasses = clsx(styles.content, {
    [styles.hidden]: !isOpen
  })

  return (
    <section className={contentClasses}>
      {isShowContent && (
        <>
          <Block block={menu}/>
          <Hr/>
          <Block block={projectsBlock}/>
        </>
      )}
    </section>
  );
});

export default Content;