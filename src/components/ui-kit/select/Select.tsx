import { default as ReactSelect, GroupBase } from 'react-select';
import clsx from 'clsx';

import { DropdownIndicator } from './DropdownIndicator.tsx';

import { optionSelectStyles, singleValueSelectStyles } from "./config.ts";

import { TSelectProps } from './types.ts';

import selectStyles from './styles.module.scss';

const Select = <Option, IsMulti extends boolean = false, Group extends GroupBase<Option> = GroupBase<Option>>({
  placeholder = '',
  selectClassName = '',
  wrapperClassName = '',
  id,
  label,
  noOptionsMessage,
  styles,
  error,
  ...props
}: TSelectProps<Option, IsMulti, Group>) => {
  const selectId = id ?? crypto.randomUUID()

  const customStyles = {
    control: (provided: any, state: any) => {
      return {
        ...provided,
        height: 56,
        width: '100%',
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 12,
        background: 'transparent',
        cursor: 'pointer',
        boxShadow: 'none',
        border: error
          ? '1px solid var(--Secondary-Glamour-pink-500-base)'
          : state.hasValue
            ? '1px solid var(--Greyscale-400)'
            : '1px solid var(--Greyscale-200)',
        transition: 'all .7s ease-out 0s',
      };
    },
    dropdownIndicator: (provided: any, state: any) => {
      return {
        ...provided,
        padding: 4,
        transition: 'all 0.4s ease-out',
        transform: `rotate(${state.selectProps.menuIsOpen ? '180deg' : '0deg'})`,
      };
    },
    valueContainer: (provided: any) => ({
      ...provided,
      padding: 0,
    }),
    indicatorSeparator: () => ({
      isDisabled: true,
    }),
    menu: (provided: any) => ({
      ...provided,
      position: 'absolute',
      overflow: 'hidden',
      marginTop: 4,

      borderRadius: 12,
      padding: 4,
      border: '1px solid var(--Greyscale-200)',
      background: 'var(--Additional-white)'
    }),
    menuList: (provided: any) => ({
      ...provided,
      padding: 0,
      height: '100%',

      display: 'flex',
      flexDirection: 'column',
      gap: 4,
    }),
    placeholder: (provided: any) => ({
      ...provided,
    }),
    input: (provided: any) => ({
      ...provided,
      fontSize: 16,
      fontWeight: 400,
      letterSpacing: '-0.01em',
      color: 'var(--Greyscale-900)',
    }),
    noOptionsMessage: (provided: any) => ({
      ...provided,
      padding: 12
    }),
    option: optionSelectStyles,
    singleValue: singleValueSelectStyles,
    ...styles
  };

  const selectWrapperClasses = clsx(selectStyles.selectWrapper, {
    [wrapperClassName]: !!wrapperClassName,
  });

  const noAsyncNoOptionsMessage = () => 'Ничего не найдено';

  return (
    <div className={selectWrapperClasses}>
      {label && <label htmlFor={selectId} className={selectStyles.label}>{label}</label>}

      <ReactSelect
        id={selectId}
        styles={customStyles}
        maxMenuHeight={204}
        placeholder={placeholder}
        className={selectClassName}
        // @ts-expect-error
        components={{DropdownIndicator}}
        noOptionsMessage={noOptionsMessage ? noOptionsMessage : noAsyncNoOptionsMessage}
        {...props}
      />

      {!!error && <span className={selectStyles.error}>{error}</span>}
    </div>
  );
};

export default Select;
