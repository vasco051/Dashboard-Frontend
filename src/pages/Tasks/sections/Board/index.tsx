import {FC} from 'react';

import {ItemsBlock} from "components/Layouts/ItemsBlock";

import {boardTasksConfig} from "data/Tasks.tsx";

import styles from "./styles.module.scss";

export const Board: FC = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.board}>
        {boardTasksConfig.map((block, index) => (
          <ItemsBlock block={block} key={index}/>
        ))}
      </div>
    </section>
  );
};