import {HTMLProps} from "react"
import {Color} from "../../../styles/colors"

export interface IRadioProps
  extends Omit<HTMLProps<HTMLInputElement>, "selected" | "data"> {
  legend: string
  selected: string
  color: Color
  data: {
    label: string
    id: string
    value: string
  }[]
}
