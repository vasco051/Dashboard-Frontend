import {FC} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useFormik} from "formik";

import {useStore} from "hooks/useStore.ts";
import {PageWrapper} from "components/Layouts/PageWrapper";
import {Button, ButtonSizeVariant} from "components/UI-Kit/Buttons";
import {PasswordInput} from "components/UI/PasswordInput";
import {Input} from "components/UI-Kit/Inputs";
import {Intro} from "./sections/Intro";

import {staticLinks} from "config/routingLinks.ts";

import {TLoginData} from "types/entities/TAccount.ts";

import IcUser from 'assets/icons/general/ic_user.svg?react'
import styles from './styles.module.scss'

export const Authorization: FC = () => {
  const {login} = useStore().accountStore
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    } as TLoginData,
    onSubmit: async (values) => {
      const response = await login(values)

      if ('data' in response) navigate(staticLinks.main)
      else formik.setErrors(response.errors)
    }
  })

  return (
    <PageWrapper className={styles.main}>
      <Intro/>
      <section className={styles.authSection}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h1 className={styles.title}>Авторизация</h1>
            <p className={styles.text}>Добро пожаловать! пожалуйста, введите свои данные</p>
          </div>

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

            <Button className={styles.button} size={ButtonSizeVariant.BIG}>Войти</Button>
          </form>

          <p className={styles.text}>
            У вас нет учетной записи? <Link to={staticLinks.registration}>Зарегистрироваться</Link>
          </p>
        </div>
      </section>
    </PageWrapper>
  );
};