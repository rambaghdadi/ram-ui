import {IBasicInputProps} from "../BasicInput/BasicInput.types"

export interface IPasswordInputProps extends IBasicInputProps {
  passwordDetails: string
  includePasswordStrength: boolean
}
