import {Color} from "../../../styles/colors"

export interface IChipProps {
  options: Option[]
  selected: string[]
  onSelect: (selected: OnSelectType) => void
  allowMultiSelection?: boolean
  color?: Color
  required?: boolean
  disabled?: boolean
}

interface Option {
  label: string
  value: string
}

type OnSelectType = string[] | ((prev: string[]) => string[])
