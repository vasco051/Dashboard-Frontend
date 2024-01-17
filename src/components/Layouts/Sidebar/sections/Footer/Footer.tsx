import {FC} from 'react';
import {observer} from "mobx-react";
import clsx from "clsx";

import {useStore} from "hooks/useStore.ts";
import {Hr} from "components/UI/Hr";
import SidebarItem from "../SidebarItem/SidebarItem.tsx";

import {staticLinks} from "config/routingLinks.ts";

import {ThemeVariant} from "types/entities/TTheme.ts";

import IcDarkMode from 'assets/icons/general/ic_dark-mode.svg?react'
import IcLightMode from 'assets/icons/general/ic_light-mode.svg?react'
import IcSettings from 'assets/icons/general/ic_settings.svg?react'
import styles from './styles.module.scss'

const Footer: FC = observer(() => {
  const store = useStore()
  const {isOpen} = store.sidebarStore;
  const {currentTheme, setTheme} = store.themeStore;

  const bottomItems = {
    setting: {
      id: 1,
      text: 'Настройки',
      icon: <IcSettings/>,
      link: staticLinks.settings
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
    [styles.short]: !isOpen
  })

  return (
    <footer>
      <ul className={listClasses}>
        <SidebarItem item={bottomItems.setting} short={!isOpen}/>
        <Hr/>
        <SidebarItem item={bottomItems.theme} short={!isOpen}/>
      </ul>
    </footer>
  );
});

export default Footer;