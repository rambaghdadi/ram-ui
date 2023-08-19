import {CSSProperties, createElement} from "react"
import {ITitleProps} from "./Title.types"
import {colors} from "../../../styles/colors"

export default function Title({
  size = 1,
  children,
  style,
  color = "dark",
  isUppercase,
  isCapitalized,
  isItalic,
  textDecoration,
  className,
}: ITitleProps) {
  if (size < 1 || size > 6)
    throw new Error("Size prop should be between 1 and 6.")

  const styles: CSSProperties = {
    color: colors[color],
    textTransform: isUppercase
      ? "uppercase"
      : isCapitalized
      ? "capitalize"
      : undefined,

    fontStyle: isItalic ? "italic" : undefined,
    textDecoration: textDecoration,
  }

  return createElement(
    `h${size}`,
    {
      className: className,
      style: {...styles, ...style},
    },
    children
  )
}
