import {Color} from "../../../styles/colors"

export interface IRatingProps {
  color?: Color
  count?: number
  value: number
  onChange: (value: number) => void
  id: string
  name: string
}
