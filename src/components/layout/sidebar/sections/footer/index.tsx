import { FC } from 'react';
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
import clsx from "clsx";

import { useStore } from "hooks/useStore.ts";
import { Hr } from "components/ui";
import SidebarItem from "../sidebar-item";

import { staticLinks } from "config/routingLinks.ts";

import { ThemeVariant } from "types/entities/TTheme.ts";

import IcDarkMode from 'assets/icons/general/ic_dark-mode.svg?react'
import IcLightMode from 'assets/icons/general/ic_light-mode.svg?react'
import IcLogout from 'assets/icons/general/ic_logout.svg?react'
import styles from './styles.module.scss'

const Footer: FC = observer(() => {
  const store = useStore()
  const { isOpen } = store.sidebarStore;
  const { isAuth, logout } = store.accountStore;
  const { currentTheme, setTheme } = store.themeStore;

  const navigate = useNavigate()

  const isOpenSidebar = isAuth && isOpen

  const bottomItems = {
    setting: {
      id: 1,
      text: isAuth ? 'Выйти' : 'Войти',
      icon: <IcLogout/>,
      onClick: () => {
        logout()
        navigate(staticLinks.main)
      }
    },
    theme: {
      id: 2,
      text: currentTheme === ThemeVariant.LIGHT ? 'Темная тема' : 'Светлая тема',
      icon: currentTheme === ThemeVariant.LIGHT ? <IcDarkMode/> : <IcLightMode/>,
      onClick: () => {
        setTheme(currentTheme === ThemeVariant.LIGHT ? ThemeVariant.DARK : ThemeVariant.LIGHT)
      }
    }
  }

  const listClasses = clsx(styles.list, {
    [styles.short]: !isOpenSidebar
  })

  return (
    <footer>
      <ul className={listClasses}>
        {isAuth && <SidebarItem item={bottomItems.setting} short={!isOpenSidebar}/>}
        <Hr/>
        <SidebarItem item={bottomItems.theme} short={!isOpenSidebar}/>
      </ul>
    </footer>
  );
});

export default Footer;