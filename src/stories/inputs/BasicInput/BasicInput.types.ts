import {HTMLProps} from "react"

export interface IBasicInputProps extends HTMLProps<HTMLInputElement> {
  error?: string
  additionalChildren?: React.ReactNode
}
