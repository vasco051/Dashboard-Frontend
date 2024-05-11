import clsx from "clsx";

import { EHeadingLevel, IHeadingProps, THeadingConfig } from "./types.ts";

import styles from './styles.module.scss'

export const Heading = ({level, children, className, ...props}: IHeadingProps) => {
  const headingClasses = (level: EHeadingLevel) => clsx(styles.heading, {
    [styles.h1]: level === EHeadingLevel.H1,
    [styles.h2]: level === EHeadingLevel.H2,
    [styles.h3]: level === EHeadingLevel.H3,
    [styles.h4]: level === EHeadingLevel.H4,
    [styles.h5]: level === EHeadingLevel.H5,
    [styles.h6]: level === EHeadingLevel.H6,
    [className ?? '']: !!className
  })

  const config: THeadingConfig = {
    [EHeadingLevel.H1]: <h1 className={headingClasses(EHeadingLevel.H1)} {...props}>{children}</h1>,
    [EHeadingLevel.H2]: <h2 className={headingClasses(EHeadingLevel.H2)} {...props}>{children}</h2>,
    [EHeadingLevel.H3]: <h3 className={headingClasses(EHeadingLevel.H3)} {...props}>{children}</h3>,
    [EHeadingLevel.H4]: <h4 className={headingClasses(EHeadingLevel.H4)} {...props}>{children}</h4>,
    [EHeadingLevel.H5]: <h5 className={headingClasses(EHeadingLevel.H5)} {...props}>{children}</h5>,
    [EHeadingLevel.H6]: <h6 className={headingClasses(EHeadingLevel.H6)} {...props}>{children}</h6>,
  }

  return config[level]
}