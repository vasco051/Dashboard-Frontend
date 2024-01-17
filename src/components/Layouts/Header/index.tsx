import {FC, ReactNode} from 'react';

import styles from './styles.module.scss'
import {Hr} from "../../UI/Hr";
import clsx from "clsx";
import {observer} from "mobx-react";
import {useStore} from "../../../hooks/useStore.ts";

interface IHeaderProps {
  title: string;
  customBottom?: ReactNode;
}

export const Header: FC<IHeaderProps> = observer(({title, customBottom}) => {
  const {isAuth, account} = useStore().accountStore

  const headerClasses = clsx(styles.header, {
    [styles.withBottom]: !!customBottom
  })

  return (
    <header className={headerClasses}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{isAuth? account?.username : 'Войти'}</p>
      </div>

      {customBottom && (
        <>
          <Hr/>
          {customBottom}
        </>
      )}
    </header>
  );
});