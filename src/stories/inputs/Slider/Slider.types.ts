import {Color} from "../../../styles/colors"

export interface ISliderProps {
  value: number
  onChange: (value: number) => void
  showLabel: boolean
  color: Color
}
