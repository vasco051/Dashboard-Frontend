import { FC, useEffect } from 'react';
import clsx from 'clsx';

import Portal from '../Portal.tsx';

import { PopupProps } from '../types.ts';

import styles from './styles.module.scss';

export const Popup: FC<PopupProps> = ({
                                        isOpen,
                                        onClose,
                                        children,
                                        className = '',
                                        ...props
                                      }) => {
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflowY = 'unset';
    }

    return () => {
      document.documentElement.style.overflowY = 'unset';
    }
  }, [isOpen])

  if (!isOpen) return null;

  const contentClasses = clsx(styles.content, {
    [className]: !!className,
  });

  return (
    <Portal>
      <div className={styles.popup} role="dialog">
        <div
          className={styles.overlay}
          role="button"
          tabIndex={0}
          onClick={onClose}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={contentClasses}
            {...props}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};