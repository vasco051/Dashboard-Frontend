import { FC } from 'react';

import { Header, PageWrapper } from "components/layout";
import { Projects } from "./sections/projects";

import styles from './styles.module.scss'

export const Dashboard: FC = () => {
  return (
    <PageWrapper>
      <Header title='Личный кабинет'/>

      <div className={styles.wrapper}>
        <Projects/>
      </div>
    </PageWrapper>
  );
};