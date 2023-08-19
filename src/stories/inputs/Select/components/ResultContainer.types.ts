import {ISelectProps} from "../Select.types"

export interface IResultContainerProps
  extends Pick<ISelectProps, "nothingFound" | "onSelect"> {
  filteredData: string[]
  previousSelection: string
  setPreviousSelection: (data: string) => void
  setIsFocused: (data: boolean) => void
  setIsActive: (data: boolean) => void
}
