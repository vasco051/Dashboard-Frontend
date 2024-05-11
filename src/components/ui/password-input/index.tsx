import { FC, useState } from "react";
import clsx from "clsx";

import { IInputProps, Input } from "components/ui-kit";

import IcLock from 'assets/icons/general/ic_lock.svg?react'
import IcEye from 'assets/icons/general/ic_eye.svg?react'
import IcEyeOff from 'assets/icons/general/ic_eye-off.svg?react'
import styles from './styles.module.scss'

interface IPasswordInput extends IInputProps {
}

export const PasswordInput: FC<IPasswordInput> = ({className = '', ...props}) => {
  const [isShowPassword, setIsShowPassword] = useState(false)

  const toggleIsShowPassword = () => setIsShowPassword(prev => !prev)

  const inputClasses = clsx(styles.passwordInput, {
    [className]: !!className
  })

  return (
    <Input
      {...props}
      type={isShowPassword ? 'text' : 'password'}
      className={inputClasses}
      leftIcon={{icon: <IcLock/>, colorType: 'stroke'}}
      rightIcon={isShowPassword
        ? {icon: <IcEye onClick={toggleIsShowPassword}/>, colorType: 'stroke'}
        : {icon: <IcEyeOff onClick={toggleIsShowPassword}/>, colorType: 'stroke'}
      }
    />
  );
};