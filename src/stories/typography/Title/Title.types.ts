import {HTMLProps} from "react"
import {Color} from "../../../styles/colors"

export interface ITitleProps
  extends Omit<HTMLProps<HTMLHeadingElement>, "size"> {
  color?: Color
  size?: 1 | 2 | 3 | 4 | 5 | 6
  isCapitalized?: boolean
  isItalic?: boolean
  isUppercase?: boolean
  textDecoration?: "underline" | "line-through"
}
