import BasicInput from "../BasicInput/BasicInput"
import {ITextInputProps} from "./TextInput.types"

export default function TextInput(props: ITextInputProps) {
  return <BasicInput {...props} type="text" />
}
