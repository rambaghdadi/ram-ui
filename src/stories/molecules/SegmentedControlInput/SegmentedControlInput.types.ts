import {Color} from "../../../styles/colors"

export interface ISegmentedControlInputProps {
  data: Button[]
  color: Color
  value: string
  onChange: (e: string) => void
}

interface Button {
  value: string
  label: string
}
