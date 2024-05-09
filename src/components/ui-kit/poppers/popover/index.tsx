import { FC, useState } from 'react';
import { usePopper } from 'react-popper';
import clsx from 'clsx';

import Portal from '../Portal.tsx';

import { PopoverProps } from '../types.ts';

import popoverStyles from './styles.module.scss';

export const Popover: FC<PopoverProps> = ({
  isOpen,
  onClose,
  placement,
  offset,
  refEl,
  children,
  className = '',
  ...props
}) => {
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  );
  const { styles, attributes } = usePopper(refEl, popperElement, {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: offset ?? [0, 15],
        },
      },
    ],
    placement: placement === 'left' ? 'bottom-start' : 'bottom-end',
  });

  const contentClasses = clsx({
    [popoverStyles.content]: true,
    [className]: !!className,
  });

  if (!isOpen) return null;
  return (
    <Portal>
      <div className={popoverStyles.headerOverlay} onClick={onClose}></div>
      <div className={popoverStyles.overlay} onClick={onClose}>
          <div
            {...props}
            style={styles.popper}
            className={contentClasses}
            ref={setPopperElement}
            onClick={(event) => event.stopPropagation()}
            {...attributes.popper}
          >
            {children}
        </div>
      </div>
    </Portal>
  );
};