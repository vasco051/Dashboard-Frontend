import { FC, PropsWithChildren } from 'react';
import { observer } from "mobx-react";
import clsx from "clsx";

import { useStore } from "hooks/useStore.ts";

import styles from './styles.module.scss'

interface IPageWrapper {
  className?: string;
}

export const PageWrapper: FC<PropsWithChildren<IPageWrapper>> = observer(({ className = '', children }) => {
  const store = useStore()
  const { isOpen } = store.sidebarStore;
  const { isAuth } = store.accountStore;

  const isOpenSidebar = isAuth && isOpen

  const mainClasses = clsx(styles.main, {
    [styles.hideSidebar]: !isOpenSidebar,
    [className]: !!className
  })

  return <main className={mainClasses}>{children}</main>;
});