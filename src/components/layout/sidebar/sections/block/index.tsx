import { FC } from 'react';

import SidebarItem from "../sidebar-item";

import { TBlockItem } from "./types.ts";

import styles from './styles.module.scss'

interface IBlockProps {
  block: TBlockItem
}

const Block: FC<IBlockProps> = ({block}) => {
  return (
    <section className={styles.block}>
      <div className={styles.header}>
        <h4 className={styles.title}>{block.title}</h4>
        {!!block?.control && block.control}
      </div>

      <ul className={styles.list}>
        {block.items.length
          ? block.items.map(item => <SidebarItem item={item} key={item.id}/>)
          : block.emptyItem ? block.emptyItem : null
        }
      </ul>
    </section>
  );
};

export default Block;