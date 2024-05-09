import { ItemsBlock, TBlockItem } from "components/layout";

import styles from './styles.module.scss'

interface IListProps<T> {
  blocks: TBlockItem<T>[]
}

export function List<T>({ blocks }: IListProps<T>) {
  return (
    <section className={styles.list}>
      {blocks.map((block, index) => (
        <ItemsBlock block={block} key={index}/>
      ))}
    </section>
  );
}