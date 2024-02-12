import {FC} from 'react';

import {PageWrapper} from "components/Layouts/PageWrapper";
import {Header} from "components/Layouts/Header/Header.tsx"
import {Projects} from "./sections/Projects";

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