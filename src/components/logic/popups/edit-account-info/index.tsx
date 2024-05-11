import { useState } from "react";
import { observer } from "mobx-react";
import { useFormik } from "formik";

import { useStore } from "hooks/useStore.ts";
import { Button, ButtonThemeVariant, EHeadingLevel, Heading, Input, Popup } from "components/ui-kit";

import { IEditAccountInfoPopup } from "./types.ts";

import styles from './styles.module.scss'

export const EditAccountInfo = observer(({children}: IEditAccountInfoPopup) => {
  const {account, updateProfile} = useStore().accountStore
  const [isOpenPopup, setIsOpenPopup] = useState(false)

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: account?.email ?? '',
      username: account?.username ?? ''
    },
    onSubmit: async values => {
      const response = await updateProfile({...values, email: values.email.toLowerCase()})

      if ('data' in response) onClosePopup()
      else formik.setErrors(response.errors)
    }
  })

  if (!account) return null

  const onOpenPopup = () => setIsOpenPopup(true)

  const onClosePopup = () => {
    formik.resetForm()
    setIsOpenPopup(false)
  }

  return (
    <>
      <div onClick={onOpenPopup}>
        {children}
      </div>

      <Popup isOpen={isOpenPopup} onClose={onClosePopup} className={styles.popup}>
        <Heading level={EHeadingLevel.H4}>Редактирование профиля</Heading>
        <form onSubmit={formik.handleSubmit} className={styles.form}>
          <Input
            name='username'
            label='Имя пользователя*'
            placeholder='Введите имя'
            value={formik.values.username}
            onChange={formik.handleChange}
            error={formik.errors.username}
          />

          <Input
            name='email'
            label='Почта*'
            placeholder='example@gmail.com'
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.errors.email}
          />

          <div className={styles.buttons}>
            <Button theme={ButtonThemeVariant.PRIMARY}>Сохранить</Button>
            <Button theme={ButtonThemeVariant.SECONDARY} type='button' onClick={onClosePopup}>Отмена</Button>
          </div>
        </form>
      </Popup>
    </>
  )
})