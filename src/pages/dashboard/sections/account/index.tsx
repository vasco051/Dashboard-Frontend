import { observer } from "mobx-react";

import { useStore } from "hooks/useStore.ts";
import { EditAccountInfo } from "components/logic";
import { Button, ButtonSizeVariant, ButtonThemeVariant, EHeadingLevel, Heading } from "components/ui-kit";

import styles from './styles.module.scss'

export const Account = observer(() => {
  const {account} = useStore().accountStore

  const config = [
    {
      title: 'ID пользователя',
      content: account?.id
    },
    {
      title: 'Почта пользователя',
      content: account?.email
    },
    {
      title: 'Дата создания аккаунта',
      content: account?.created_at
    },
    {
      title: 'Дата обновления аккаунта',
      content: account?.updated_at ?? 'Загрузка...'
    }
  ]

  return (
    <section className={styles.account}>
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.avatar}></div>
          <Heading level={EHeadingLevel.H4}>{account?.username}</Heading>
        </div>

        <EditAccountInfo>
          <Button size={ButtonSizeVariant.SMALL} theme={ButtonThemeVariant.SECONDARY}>
            Редактировать профиль
          </Button>
        </EditAccountInfo>
      </div>

      <ul className={styles.list}>
        {config.map((item, index) => (
          <>
            {index > 0 && <li className={styles.hr} key={`${index}-hr`}></li>}

            <li className={styles.item} key={index}>
              <span className={styles.title}>{item.title}</span>
              <Heading level={EHeadingLevel.H6} className={styles.content}>{item.content}</Heading>
            </li>
          </>
        ))}
      </ul>
    </section>
  )
})