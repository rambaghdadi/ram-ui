import {HTMLProps} from "react"

export interface IPasswordInputProps extends HTMLProps<HTMLInputElement> {
  placeholder: string
  passwordDetails: string
  error?: string
  value?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  disabled?: boolean
  name: string
  id: string
  includePasswordStrength: boolean
}
