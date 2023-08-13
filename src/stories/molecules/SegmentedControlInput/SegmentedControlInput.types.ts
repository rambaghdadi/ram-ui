import {Color} from "../../../styles/colors"

export interface ISegmentedControlInputProps {
  data: Button[]
  color: Color
}

interface Button {
  value: string
  label: string
}
