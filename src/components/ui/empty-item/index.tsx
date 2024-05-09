import IcCart from 'assets/icons/general/ic_cart.svg?react'
import styles from './styles.module.scss'

export const EmptyItem = () => {
  return (
    <section className={styles.wrapper}>
      <IcCart className={styles.icon}/>
      <p className={styles.description}>Cписок пуст</p>
    </section>
  )
}