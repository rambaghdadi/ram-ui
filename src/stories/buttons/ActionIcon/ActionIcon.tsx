import {colors} from "../Button/Button.types"
import classes from "./ActionIcon.module.css"
import {IActionIconProps, sizes} from "./ActionIcon.types"
import LoadingSpinner from "./SVGs/LoadingSpinner"

export default function ActionIcon({
  children,
  isLoading,
  dropShadow = false,
  variant = "filled",
  color = "blue",
  size = "md",
  style,
  disabled,
  className,
  ...props
}: IActionIconProps) {
  const styles = {
    //Color
    "--background-color": colors[color][variant].background,
    "--font-color": colors[color][variant].font,
    "--hover-bg": colors[color][variant].hover,

    //Size
    padding: sizes[size].padding,
    fontSize: sizes[size].fontSize,

    width: sizes[size].width,
    height: sizes[size].height,

    //Shadow
    boxShadow: dropShadow ? "var(--shadow-xl)" : "",
  }
  return (
    <button
      {...{...props, disabled}}
      style={{...styles, ...style}}
      className={`${classes.button} ${disabled ? classes.disabled : ""} ${
        variant === "outline" ? classes.outline : ""
      } ${className ?? ""}`}
    >
      {isLoading ? (
        <span className={classes.isLoading}>
          <LoadingSpinner stroke={isLoading && colors[color][variant].font} />
        </span>
      ) : (
        children
      )}
    </button>
  )
}
