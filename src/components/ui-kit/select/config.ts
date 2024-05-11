export const optionSelectStyles = (provided: any, state: any) => ({
  ...provided,
  cursor: 'pointer',
  padding: '12px 16px',
  borderRadius: 12,
  transition: 'all .7s ease-out 0s',

  fontSize: 16,
  fontWeight: 400,
  lineHeight: '24px',

  color: state.isSelected ? 'var(--Greyscale-900)' : 'var(--Greyscale-900)',

  backgroundColor: state.isSelected
    ? 'var(--Greyscale-100)'
    : state.isFocused
      ? 'var(--Greyscale-50)'
      : 'transparent',
})

export const singleValueSelectStyles = (provided: any) => ({
  ...provided,
  fontSize: 16,
  fontWeight: 400,
  color: 'var(--Greyscale-900)',
})