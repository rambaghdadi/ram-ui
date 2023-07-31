import LoadingSpinner from "./SVGs/LoadingSpinner"
import classes from "./Button.module.css"
import {ButtonProps, colors, sizes} from "./Button.types"

export default function Button({
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
}: ButtonProps) {
  const styles = {
    //Color
    "--background-color": colors[color][variant].background,
    "--font-color": colors[color][variant].font,
    "--hover-bg": colors[color][variant].hover,

    //Size
    padding: sizes[size].padding,
    fontSize: sizes[size].fontSize,

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
          {children}
        </span>
      ) : (
        children
      )}
    </button>
  )
}
