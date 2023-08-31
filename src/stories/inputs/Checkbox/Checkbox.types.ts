import {Color} from "../../../styles/colors"

export interface ICheckboxProps {
  checked: boolean
  label: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  color?: Color
  error?: string
  disabled?: boolean
  id: string
  name: string
  required?: boolean
}
