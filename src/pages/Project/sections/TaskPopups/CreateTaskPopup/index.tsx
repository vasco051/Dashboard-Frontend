import { FC, useEffect } from "react";
import { observer } from "mobx-react";
import { useFormik } from "formik";

import { useStore } from "hooks/useStore.ts";
import { Popup } from "components/UI-Kit/Poppers";
import { Input, Textarea } from "components/UI-Kit/Inputs";
import { Button } from "components/UI-Kit/Buttons";

import { TTaskCreate } from "types/entities/TTask.ts";
import { ITaskPopupProps } from "../types.ts";

import IcClose from 'assets/icons/general/ic_close.svg?react'
import styles from './styles.module.scss'


export const CreateTaskPopup: FC<ITaskPopupProps> = observer(({
  projectId,
  projectName,
  isOpen,
  onClose,
  blockInfo
}) => {
  const {create: createTask} = useStore().taskStore

  const nextStepSymbol = '>'

  const formik = useFormik({
    initialValues: {
      title: '',
      description: ''
    },
    onSubmit: async (values) => {
      if (!blockInfo) return null

      const task: TTaskCreate = {
        title: values.title,
        description: values.description ?? null,
        status: blockInfo.header.title
      }

      const response = await createTask(projectId, blockInfo.statusId, task)

      if ('data' in response) onClose()
      else formik.setErrors(response.errors)
    }
  })

  useEffect(formik.resetForm, [blockInfo, projectId])

  return (
    <Popup isOpen={isOpen} onClose={onClose} className={styles.popup}>
      <section className={styles.header}>
        <div className={styles.bradCrumbsWrapper}>
          <span>Проекты {nextStepSymbol} {projectName} {nextStepSymbol} {blockInfo?.header.title} {nextStepSymbol} Новая задача</span>
        </div>

        <button className={styles.closeButton} onClick={onClose}><IcClose/></button>
      </section>

      <section className={styles.content}>
        <form className={styles.form} onSubmit={formik.handleSubmit}>
          <Input
            name='title'
            value={formik.values.title}
            onChange={formik.handleChange}
            placeholder='Название задачи'
            error={formik.errors.title}
          />

          <Textarea
            name='description'
            value={formik.values.description}
            onChange={formik.handleChange}
            placeholder='Описание задачи'
            error={formik.errors.description}
            resizable
          />

          <Button>Создать</Button>
        </form>
      </section>
    </Popup>
  );
});