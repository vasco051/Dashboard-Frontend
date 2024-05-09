import { FC } from 'react';

import ImIntro from 'assets/images/auth/img_intro.png'

import IcLogo from 'assets/icons/general/ic_logo.svg?react'
import styles from './styles.module.scss'

export const Intro: FC = () => {
  return (
    <section className={styles.intro}>
      <div className={styles.label}>
        <IcLogo className={styles.logo}/>
        <h2 className={styles.title}>Hiphonic</h2>
      </div>

      <div className={styles.mainCircle}>
        <div className={styles.secondaryCircle}></div>

        <div className={styles.imageWrapper}>
          <img className={styles.image} src={ImIntro} alt="About project"/>
        </div>
      </div>

      <div className={styles.content}>
        <h4 className={styles.title}>Настраиваемая многофункциональная панель мониторинга задач</h4>
        <p className={styles.description}>Все, что вам нужно, на легко настраиваемой панели управления.</p>
      </div>
    </section>
  );
};