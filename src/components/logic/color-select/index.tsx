import { useCallback, useEffect } from "react";
import { observer } from "mobx-react";

import { useStore } from "hooks/useStore.ts";
import { optionSelectStyles, Select, singleValueSelectStyles } from "components/ui-kit";

import { getColorByName } from "utils/getColorByName.ts";

import { InferProps } from "types/entities/TAPP.ts";
import { IColorSelectProps } from "./types.ts";

export const ColorSelect = observer(({placeholder, value, onChange, ...props}: InferProps<typeof Select> & IColorSelectProps) => {
  const {colors, isLoading, getAll} = useStore().colorStore

  useEffect(() => {
    getAll()
  }, [])

  const options = useCallback(() => {
    return colors.map(color => ({label: color.title, value: color.name}))
  }, [colors])

  const customPlaceholder = isLoading ? 'Загрузка...' : placeholder

  const dot = (color: string) => ({
    display: 'flex',
    alignItems: 'center',
    gap: 12,

    ':before': {
      content: '" "',
      display: 'block',
      backgroundColor: getColorByName(color),
      borderRadius: '50%',
      height: 14,
      width: 14,
    },
  });

  const colorStyles = {
    option: (provided: any, state: any) => ({
      ...optionSelectStyles(provided, state),
      ...dot(state.data.value)
    }),
    singleValue: (provided: any, state: any) => ({
      ...singleValueSelectStyles(provided),
      ...dot((state.data.value))
    })
  };

  return (
    <Select
      placeholder={customPlaceholder}
      value={value}
      options={options()}
      onChange={onChange}
      styles={colorStyles}
      {...props}
    />
  )
})