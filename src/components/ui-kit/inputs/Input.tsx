import { FC, InputHTMLAttributes, ReactNode } from 'react';
import clsx from "clsx";

import styles from './styles.module.scss'

type TIcon = {
  icon: ReactNode;
  colorType: 'fill' | 'stroke'
}

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  leftIcon?: TIcon
  rightIcon?: TIcon
}

export const Input: FC<IInputProps> = ({id, label, error, leftIcon, rightIcon, className = '', ...props}) => {
  const inputId = id ?? crypto.randomUUID()

  const inputClasses = clsx(styles.input, {
    [className]: !!className,
    [styles.hasLeftSlot]: !!leftIcon?.icon,
    [styles.hasRightSlot]: !!rightIcon?.icon,
    [styles.hasError]: !!error
  })

  const getIconClasses = (icon: TIcon, slot: 'left' | 'right') => clsx({
    [styles.leftSlot]: slot === 'left',
    [styles.rightSlot]: slot === 'right',
    [styles.fillIcon]: icon.colorType === 'fill',
    [styles.strokeIcon]: icon.colorType === 'stroke',
  })

  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label} htmlFor={inputId}>{label}</label>}

      <div className={styles.inputWrapper}>
        {leftIcon && <div className={getIconClasses(leftIcon, "left")}>{leftIcon?.icon}</div>}
        <input id={inputId} className={inputClasses} {...props}/>
        {rightIcon && <div className={getIconClasses(rightIcon, 'right')}>{rightIcon?.icon}</div>}
      </div>

      {!!error && <span className={styles.error}>{error}</span>}
    </div>
  );
};