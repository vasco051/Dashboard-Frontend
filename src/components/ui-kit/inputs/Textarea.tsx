import { FC, InputHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

export interface ITextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  resizable?: boolean;
  label?: string;
  error?: string;
}

export const Textarea: FC<ITextAreaProps> = ({
  className = '',
  resizable = false,
  id,
  label,
  error,
  ...props
}) => {
  const textareaId = id ?? crypto.randomUUID()

  const textFieldStyle = clsx(styles.textarea, {
    [className]: !!className,
    [styles.hasError]: !!error,
    [styles.notResizable]: !resizable,
  });

  return (
    <div className={styles.wrapper}>
      {label && <label className={styles.label} htmlFor={textareaId}>{label}</label>}

      <textarea className={textFieldStyle}{...props}/>

      {!!error && <span className={styles.error}>{error}</span>}
    </div>
  );
};