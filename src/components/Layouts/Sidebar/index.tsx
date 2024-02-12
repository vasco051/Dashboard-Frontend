import { FC, MouseEvent } from 'react';
import { observer } from "mobx-react";
import clsx from "clsx";

import { useStore } from "hooks/useStore.ts";
import { Hr } from "components/UI/Hr";
import { Content, Footer, Header } from "./sections";

import styles from './styles.module.scss'

export const Sidebar: FC = observer(() => {
  const store = useStore()
  const { isOpen, setToggleIsOpen } = store.sidebarStore;
  const { isAuth } = store.accountStore;

  const isOpenSidebar = isAuth && isOpen

  const onClickAside = () => {
    if (!isOpenSidebar) toggleAside()
  }

  const toggleAside = (event?: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    event && event.stopPropagation()
    setToggleIsOpen()
  }

  const asideClasses = clsx(styles.aside, {
    [styles.hidden]: !isOpenSidebar,
    [styles.withCursor]: !isOpenSidebar
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