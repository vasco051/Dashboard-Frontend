import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import clsx from "clsx";

import { ButtonSizeVariant, ButtonThemeVariant } from "./types.ts";

import styles from './styles.module.scss'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSizeVariant,
  theme?: ButtonThemeVariant
}

export const Button: FC<PropsWithChildren<IButtonProps>> = ({
                                                              children,
                                                              size = ButtonSizeVariant.DEFAULT,
                                                              theme = ButtonThemeVariant.PRIMARY,
                                                              className = '',
                                                              ...props
                                                            }) => {
  const buttonClasses = clsx(styles.button, {
    [styles.primary]: theme === ButtonThemeVariant.PRIMARY,
    [styles.secondary]: theme === ButtonThemeVariant.SECONDARY,
    [styles.small]: size === ButtonSizeVariant.SMALL,
    [styles.default]: size === ButtonSizeVariant.DEFAULT,
    [styles.big]: size === ButtonSizeVariant.BIG,
    [className]: !!className
  })

  return (
    <button {...props} className={buttonClasses}>
      {children}
    </button>
  );
};