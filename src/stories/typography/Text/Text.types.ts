import {HTMLProps} from "react"
import {Color} from "../../../styles/colors"
import {Size} from "../../../styles/typography"

export interface ITextProps
  extends Omit<HTMLProps<HTMLParagraphElement>, "size"> {
  children: string
  color?: Color
  size: Size
  weight: number
  isCapitalized?: boolean
  isItalic?: boolean
  isUppercase?: boolean
  textDecoration?: "underline" | "line-through"
}
