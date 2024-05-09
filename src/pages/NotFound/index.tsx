import { FC } from 'react';

import { PageWrapper } from "components/layout/page-wrapper";
import { ButtonSizeVariant, ButtonThemeVariant, LinkButton } from "components/UI-Kit/Buttons";

import { staticLinks } from "config/routingLinks.ts";

import styles from './styles.module.scss'

export const NotFound: FC = () => {
  return (
    <PageWrapper className={styles.main}>
      <section className={styles.wrapper}>
        <h1 className={styles.title}>404</h1>

        <div className={styles.content}>
          <h2 className={styles.subTitle}>Страница не найдена</h2>
          <p className={styles.description}>Извините, мы не можем найти страницу по вашему запросу</p>
        </div>

        <LinkButton
          to={staticLinks.main}
          size={ButtonSizeVariant.SMALL}
          theme={ButtonThemeVariant.SECONDARY}
        >
          Вернуться на главную
        </LinkButton>
      </section>
    </PageWrapper>
  );
};