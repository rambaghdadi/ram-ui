export interface ITextInputProps {
  placeholder: string
  error?: string
  value?: string
  onChange: () => void
  required?: boolean
  disabled?: boolean
  name: string
  id: string
}
