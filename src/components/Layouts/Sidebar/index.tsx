import {FC, MouseEvent} from 'react';
import {observer} from "mobx-react";
import clsx from "clsx";

import {useStore} from "hooks/useStore.ts";
import {Hr} from "components/UI/Hr";
import {Content, Footer, Header} from "./sections";

import styles from './styles.module.scss'

export const Sidebar: FC = observer(() => {
  const {isOpen, setToggleIsOpen} = useStore().sidebarStore;

  const onClickAside = () => {
    if (!isOpen) toggleAside()
  }

  const toggleAside = (event?: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    event && event.stopPropagation()
    setToggleIsOpen()
  }

  const asideClasses = clsx(styles.aside, {
    [styles.hidden]: !isOpen
  })

  return (
    <aside className={asideClasses} onClick={onClickAside}>
      <div className={styles.content}>
        <Header/>
        <Hr/>
        <Content/>
        <Footer/>
      </div>
    </aside>
  );
});