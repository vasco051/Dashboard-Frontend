import { FC, InputHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

export interface ITextAreaProps
  extends InputHTMLAttributes<HTMLTextAreaElement> {
  resizable?: boolean;
  error?: string
}


export const Textarea: FC<ITextAreaProps> = ({
  className = '',
  resizable = false,
  error,
  ...props
}) => {
  const textFieldStyle = clsx(styles.textarea, {
    [className]: !!className,
    [styles.hasError]: !!error,
    [styles.notResizable]: !resizable,
  });

  return (
    <div className={styles.wrapper}>
      <textarea className={textFieldStyle}{...props}/>
      {!!error && <span className={styles.error}>{error}</span>}
    </div>
  );
};