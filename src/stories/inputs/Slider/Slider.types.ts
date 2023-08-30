import {Color} from "../../../styles/colors"

export interface ISliderProps {
  value: number[]
  onChange: (prev: number[]) => void
  showLabel?: boolean
  color?: Color
  isRange?: boolean
}
