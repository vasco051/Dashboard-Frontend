import { FC } from 'react';
import { observer } from "mobx-react";

import { useStore } from "hooks/useStore.ts";

import IcUser from 'assets/icons/general/ic_user.svg?react'
import styles from './styles.module.scss'

export const UserInfo: FC = observer(() => {
  const { isAuth, account } = useStore().accountStore

  if (!isAuth) return null

  return (
    <section className={styles.userInfo}>
      <IcUser className={styles.icon}/>
      <h4 className={styles.title}>{account?.username}</h4>
    </section>
  );
});