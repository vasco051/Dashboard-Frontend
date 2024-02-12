import { ItemsBlock, TBlockItem } from "components/Layouts/ItemsBlock";

import styles from "./styles.module.scss";

interface IBoardProps<T> {
  blocks: TBlockItem<T>[]
}

export function Board<T>({ blocks }: IBoardProps<T>) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.board}>
        {blocks.map((block, index) => (
          <ItemsBlock block={block} key={index}/>
        ))}
      </div>
    </section>
  );
}