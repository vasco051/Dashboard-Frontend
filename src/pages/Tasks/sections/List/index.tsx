import {FC} from 'react';

import {ItemsBlock} from "components/Layouts/ItemsBlock";

import {listTasksConfig} from "data/Tasks.tsx";

import styles from './styles.module.scss'

export const List: FC = () => {
  return (
    <section className={styles.list}>
      {listTasksConfig.map((block, index) => (
        <ItemsBlock block={block} key={index}/>
      ))}
    </section>
  );
};