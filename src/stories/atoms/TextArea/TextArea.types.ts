import {HTMLProps} from "react"

export interface ITextAreaProps extends HTMLProps<HTMLTextAreaElement> {
  placeholder: string
  error?: string
  value?: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  required?: boolean
  disabled?: boolean
  name: string
  id: string
}
