import { FC, useEffect } from "react";
import { useFormik } from "formik";

import { Popup } from "components/UI-Kit/Poppers";
import { Input, Textarea } from "components/UI-Kit/Inputs";
import { Button } from "components/UI-Kit/Buttons";
import { TBlockItem } from "components/Layouts/ItemsBlock";

import taskService from "API/rest/taskService.ts";

import { TTask, TTaskCreate } from "types/entities/TTask.ts";

import IcClose from 'assets/icons/general/ic_close.svg?react'
import styles from './styles.module.scss'

interface ICreateTaskPopup {
  projectId: number;
  projectName: string;
  blockInfo: TBlockItem<TTask> | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CreateTaskPopup: FC<ICreateTaskPopup> = ({ projectId, projectName, isOpen, onClose, blockInfo }) => {
  const nextStepSymbol = '>'

  const formik = useFormik({
    initialValues: {
      title: '',
      description: ''
    },
    onSubmit: async (values) => {
      const task: TTaskCreate = {
        title: values.title,
        description: values.description ?? null,
        status: blockInfo?.header.title ?? ''
      }

      const response = await taskService.create(projectId, task)

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
};