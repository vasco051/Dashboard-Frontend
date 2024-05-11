import { CreateProjectPopup } from "components/logic";
import { Button, ButtonSizeVariant, ButtonThemeVariant, EHeadingLevel, Heading } from "components/ui-kit";

import styles from './styles.module.scss'

export const EmptyItem = () => {
  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <Heading level={EHeadingLevel.H5} className={styles.title}>
          У вас ещё нет созданных проектов.<br/>Cоздайте проект, чтобы появилась возможность добавлять задачи.
        </Heading>

        <CreateProjectPopup>
          <Button theme={ButtonThemeVariant.PRIMARY} size={ButtonSizeVariant.DEFAULT}>
            Создать проект
          </Button>
        </CreateProjectPopup>
      </div>
    </li>
  )
}