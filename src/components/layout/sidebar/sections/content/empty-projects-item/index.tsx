import { CreateProjectPopup } from "components/logic";
import { Button, ButtonSizeVariant, ButtonThemeVariant } from "components/ui-kit";

import styles from './styles.module.scss'

export const EmptyProjectsItem = () => {
  return (
    <li className={styles.item}>
      <span>Вы ещё не добавили ни одного проекта.</span>

      <CreateProjectPopup>
        <Button theme={ButtonThemeVariant.SECONDARY} size={ButtonSizeVariant.SMALL}>Добавить</Button>
      </CreateProjectPopup>
    </li>
  )
}