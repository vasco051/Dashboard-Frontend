import { components, DropdownIndicatorProps } from 'react-select';

import IcArrowDown from 'assets/icons/general/ic_arrow-down.svg?react';

export const DropdownIndicator = (props: DropdownIndicatorProps<typeof components.DropdownIndicator>) => {
  return (
    <components.DropdownIndicator {...props}>
      <IcArrowDown />
    </components.DropdownIndicator>
  );
};