export interface ITextInputProps {
  placeholder: string
  error?: string
  value?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  disabled?: boolean
  name: string
  id: string
}
