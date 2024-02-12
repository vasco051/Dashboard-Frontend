import { FC, InputHTMLAttributes, ReactNode } from 'react';

import styles from './styles.module.scss'
import clsx from "clsx";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

export const Input: FC<IInputProps> = ({ className = '', error, leftIcon, rightIcon, ...props }) => {
  const inputClasses = clsx(styles.input, {
    [className]: !!className,
    [styles.hasLeftSlot]: !!leftIcon,
    [styles.hasRightSlot]: !!rightIcon,
    [styles.hasError]: !!error
  })

  return (
    <div className={styles.wrapper}>
      <label className={styles.inputWrapper}>
        <div className={styles.leftSlot}>{leftIcon}</div>
        <input {...props} className={inputClasses}/>
        <div className={styles.rightSlot}>{rightIcon}</div>
      </label>
      {!!error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default Input;