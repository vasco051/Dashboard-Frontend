import { observer } from "mobx-react";

import { useStore } from "hooks/useStore.ts";
import { Button, ButtonThemeVariant, Popup } from "components/ui-kit";

import { ITaskPopupProps } from "../types.ts";

import IcClose from 'assets/icons/general/ic_close.svg?react'
import styles from './styles.module.scss'

interface IRemoveTaskPopup extends ITaskPopupProps {
  taskId: number | null;
}

export const DeleteTaskPopup = observer(({
  isOpen,
  onClose,
  taskId,
  projectId,
  blockInfo
}: IRemoveTaskPopup) => {
  const {delete: deleteTask} = useStore().taskStore

  if (!blockInfo || !taskId) return null

  const onRemove = async () => {
    const response = await deleteTask(projectId, blockInfo.statusId, taskId)

    if (response.status === 200) onClose()
  }

  return (
    <Popup onClose={onClose} isOpen={isOpen} className={styles.popup}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h4 className={styles.title}>Удаление задания</h4>
          <button className={styles.closeButton} onClick={onClose}><IcClose/></button>
        </div>

        <p className={styles.description}>
          Вы действительно хотите удалить задание? <br/>
          Если вы удалите его, то все данные связанные с ним будут безвозвратно утеряны.
        </p>
      </div>

      <div className={styles.buttons}>
        <Button theme={ButtonThemeVariant.SECONDARY} onClick={onClose}>Отменить</Button>
        <Button theme={ButtonThemeVariant.DANGER} onClick={onRemove}>Удалить</Button>
      </div>
    </Popup>
  );
});