import { TBlockItem } from "./types.ts";

import { Header } from "./sections/Header/Header.tsx";

import styles from './styles.module.scss'

interface IItemsBlockProps<T> {
  block: TBlockItem<T>
}

export function ItemsBlock<T>({ block }: IItemsBlockProps<T>) {
  return (
    <section className={styles.block}>
      <Header block={block}/>

      {block.items.length
        ? <ul className={styles.list}>{block.items.map(block.renderItem)}</ul>
        : block.emptyItem
      }
    </section>
  );
}