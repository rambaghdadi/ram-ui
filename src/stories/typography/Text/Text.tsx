import {CSSProperties} from "react"
import classes from "./Text.module.css"
import {ITextProps} from "./Text.types"
import {colors} from "../../../styles/colors"
import {sizes} from "../../../styles/typography"

export default function Text({
  children,
  color = "black",
  size = "md",
  isCapitalized = false,
  isUppercase = false,
  isItalic = false,
  textDecoration,
  weight = 400,
  style,
  className,
}: ITextProps) {
  const styles: CSSProperties = {
    color: colors[color],
    fontSize: sizes[size],
    fontWeight: weight,
    textTransform: isUppercase
      ? "uppercase"
      : isCapitalized
      ? "capitalize"
      : undefined,

    fontStyle: isItalic ? "italic" : undefined,
    textDecoration: textDecoration,
  }

  return (
    <p style={{...styles, ...style}} className={`${classes.text} ${className}`}>
      {children}
    </p>
  )
}
