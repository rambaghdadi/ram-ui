import {HTMLProps} from "react"

export interface ITextInputProps extends HTMLProps<HTMLInputElement> {
  placeholder: string
  error?: string
  value?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  disabled?: boolean
  name: string
  id: string
}
