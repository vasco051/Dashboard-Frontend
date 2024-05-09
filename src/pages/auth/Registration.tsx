import { FC } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";

import { useStore } from "hooks/useStore.ts";
import { PageWrapper } from "components/layout/page-wrapper";
import { Button, ButtonSizeVariant } from "components/UI-Kit/Buttons";
import { PasswordInput } from "components/ui/password-input";
import { Input } from "components/UI-Kit/Inputs";
import { Intro } from "./sections/intro";

import { staticLinks } from "config/routingLinks.ts";

import { TRegistrationData } from "types/entities/TAccount.ts";

import IcUser from 'assets/icons/general/ic_user.svg?react'
import styles from './styles.module.scss'

export const Registration: FC = () => {
  const { registration } = useStore().accountStore
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      approve_password: ''
    } as TRegistrationData,
    onSubmit: async values => {
      const response = await registration(values)

      if ('data' in response) navigate(staticLinks.main)
      else formik.setErrors(response.errors)
    }
  })

  return (
    <PageWrapper className={styles.main}>
      <Intro/>
      <section className={styles.authSection}>
        <div className={styles.content}>
          <h1 className={styles.title}>Регистрация</h1>

          <form onSubmit={formik.handleSubmit} className={styles.form}>
            <Input
              name='username'
              placeholder='Имя пользователя'
              error={formik.errors.username}
              leftIcon={<IcUser/>}
              value={formik.values.username}
              onChange={formik.handleChange}
            />

            <PasswordInput
              name='password'
              placeholder='Пароль'
              error={formik.errors.password}
              value={formik.values.password}
              onChange={formik.handleChange}
            />

            <PasswordInput
              name='approve_password'
              placeholder='Повторите пароль'
              error={formik.errors.approve_password}
              value={formik.values.approve_password}
              onChange={formik.handleChange}
            />

            <Button className={styles.button} size={ButtonSizeVariant.BIG}>Зарегистрироваться</Button>
          </form>

          <p className={styles.text}>
            У вас уже есть аккаунт? <Link to={staticLinks.authorization}>Авторизоваться</Link>
          </p>
        </div>
      </section>
    </PageWrapper>
  );
};