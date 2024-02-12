import { FC, PropsWithChildren } from 'react';
import { Link } from "react-router-dom";
import clsx from "clsx";

import { ButtonSizeVariant, ButtonThemeVariant } from "./types.ts";

import styles from './styles.module.scss'

export interface ILinkButtonProps {
  to: string,
  size?: ButtonSizeVariant,
  theme?: ButtonThemeVariant,
  className?: string
}

export const LinkButton: FC<PropsWithChildren<ILinkButtonProps>> = ({
                                                                      to,
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
    <Link {...props} to={to} className={buttonClasses}>
      {children}
    </Link>
  );
};