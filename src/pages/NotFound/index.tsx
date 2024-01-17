import {FC} from 'react';

import {PageWrapper} from "components/Layouts/PageWrapper";

import styles from './styles.module.scss'

export const NotFound: FC = () => {
  return (
    <PageWrapper className={styles.main}>
      <section className={styles.wrapper}>
        <h1 className={styles.title}>404</h1>

        <div className={styles.content}>
          <h2 className={styles.subTitle}>Page Not Found</h2>
          <p className={styles.description}>Sorry, We can’t find the page you’re looking for</p>
        </div>
      </section>
    </PageWrapper>
  );
};