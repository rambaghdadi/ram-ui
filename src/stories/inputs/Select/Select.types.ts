import {HTMLProps} from "react"

export interface ISelectProps
  extends Omit<
    HTMLProps<HTMLInputElement>,
    "data" | "onChange" | "value" | "onSelect"
  > {
  data: string[]
  value: string
  onInputChange?: (data: string) => void
  onSelect: (data: string) => void
  clearSelection: () => void
  nothingFound?: string
  isLocalSearch?: boolean
  debounceSearch?: boolean
  debounceTimeInMs?: number
}
