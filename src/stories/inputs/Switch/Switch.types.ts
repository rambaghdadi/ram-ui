import {Color} from "../../../styles/colors"

export interface ISwitchProps {
  value: boolean
  onChange: (value: boolean) => void
  label: string
  disabled: boolean
  color: Color
}
