import { FC, MouseEvent } from 'react';
import { observer } from "mobx-react";
import clsx from "clsx";

import { useStore } from "hooks/useStore.ts";

import IcLogo from "assets/icons/general/ic_logo.svg?react";
import styles from "./styles.module.scss";

const Header: FC = observer(() => {
  const store = useStore()
  const { isOpen, setToggleIsOpen } = store.sidebarStore;
  const { isAuth } = store.accountStore;

  const isOpenSidebar = isAuth && isOpen

  const toggleAside = (event?: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    event && event.stopPropagation()
    setToggleIsOpen()
  }

  const headerClasses = clsx(styles.header, {
    [styles.hidden]: !isOpenSidebar
  })

  return (
    <header className={headerClasses}>
      <button className={styles.button} onClick={toggleAside}>
        <IcLogo className={styles.logo}/>
        <span className={styles.name}>Hiphonic</span>
      </button>
    </header>
  );
});

export default Header;