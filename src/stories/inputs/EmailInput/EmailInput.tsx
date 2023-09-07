import BasicInput from "../BasicInput/BasicInput"
import {IEmailInputProps} from "./EmailInput.types"
import EmailIcon from "./SVGs/EmailIcon"

export default function EmailInput(props: IEmailInputProps) {
  return <BasicInput {...props} type="email" icon={<EmailIcon />} />
}
