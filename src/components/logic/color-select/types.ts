import { SingleValue } from "react-select";

import { TOption } from "components/ui-kit";

export interface IColorSelectProps {
  value: TOption | null
  onChange: (option: SingleValue<TOption>) => void
}