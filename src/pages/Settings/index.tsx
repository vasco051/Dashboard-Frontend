import {FC} from 'react';

import {PageWrapper} from "components/Layouts/PageWrapper";

import styles from './styles.module.scss'

export const Settings: FC = () => {
  return (
    <PageWrapper className={styles.main}>
      Settings page
    </PageWrapper>
  );
};