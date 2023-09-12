import {HTMLProps} from "react"

export interface IRadioProps
  extends Omit<HTMLProps<HTMLInputElement>, "selected" | "data"> {
  legend: string
  selected: string
  data: {
    label: string
    id: string
    value: string
  }[]
}
