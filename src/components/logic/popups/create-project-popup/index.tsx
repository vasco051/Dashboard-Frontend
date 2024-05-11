import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";
import { useFormik } from "formik";

import { useStore } from "hooks/useStore.ts";
import { ColorSelect } from "components/logic";
import { Button, ButtonThemeVariant, EHeadingLevel, Heading, Input, Popup, Textarea, TOption } from "components/ui-kit";

import { dynamicLinks } from "config/routingLinks.ts";

import { TProjectCreate } from "types/entities/TProject.ts";
import { ICreateProjectPopup } from "./types.ts";

import styles from "./styles.module.scss";

export const CreateProjectPopup = observer(({children}: ICreateProjectPopup) => {
  const {create} = useStore().projectStore

  const [isOpenPopup, setIsOpenPopup] = useState(false)
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      color: null as TOption | null
    },
    onSubmit: async values => {
      const data: TProjectCreate = {
        name: values.name,
        description: values.description ?? null,
        color: values.color?.value ?? null,
      }

      const response = await create(data)

      if ('data' in response) {
        onClosePopup()
        navigate(dynamicLinks.project(response.data.project.id))
      }
      else formik.setErrors(response.errors)
    }
  })

  const onOpenPopup = () => setIsOpenPopup(true)

  const onClosePopup = () => {
    formik.resetForm()
    setIsOpenPopup(false)
  }

  return (
    <>
      <div onClick={onOpenPopup}>{children}</div>

      <Popup isOpen={isOpenPopup} onClose={onClosePopup} className={styles.popup}>
        <Heading level={EHeadingLevel.H4}>Создание проекта</Heading>
        <form onSubmit={formik.handleSubmit} className={styles.form}>
          <Input
            name='name'
            label='Название проекта*'
            placeholder='Работа'
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.errors.name}
          />

          <Textarea
            name='description'
            label='Описание проекта'
            placeholder='Доска для отслеживания прогресса'
            value={formik.values.description}
            onChange={formik.handleChange}
            error={formik.errors.description}
          />

          <ColorSelect
            name='color'
            label='Отображаемый цвет проекта*'
            placeholder='Оранжевый'
            value={formik.values.color}
            onChange={option => formik.setFieldValue('color', option)}
            error={formik.errors.color}
          />

          <div className={styles.buttons}>
            <Button theme={ButtonThemeVariant.PRIMARY}>Создать</Button>
            <Button theme={ButtonThemeVariant.SECONDARY} onClick={onClosePopup}>Отмена</Button>
          </div>
        </form>
      </Popup>
    </>
  )
})