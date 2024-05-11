import { GroupBase, Props } from 'react-select';

export type TSelectProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> = Props<Option, IsMulti, Group> & IBaseSelectProps;

export interface IBaseSelectProps {
  label?: string;
  error?: string;
  selectClassName?: string;
  wrapperClassName?: string;
}

export type TOption = {
  label: string;
  value: string;
}