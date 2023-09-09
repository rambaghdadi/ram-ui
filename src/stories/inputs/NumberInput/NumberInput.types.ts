import {IBasicInputProps} from "../BasicInput/BasicInput.types"

export interface INumberInputProps
  extends Omit<IBasicInputProps, "onChange" | "step" | "min" | "max"> {
  value: string | number
  onChange: (updateFn: (prevValue: any) => any) => void
  min: number
  max: number
  step?: number
}
