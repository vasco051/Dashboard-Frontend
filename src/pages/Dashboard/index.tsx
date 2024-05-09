import { FC } from 'react';

import { PageWrapper } from "components/layout/page-wrapper";
import { Header } from "components/layout/header/Header.tsx"
import { Projects } from "./sections/Projects";

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