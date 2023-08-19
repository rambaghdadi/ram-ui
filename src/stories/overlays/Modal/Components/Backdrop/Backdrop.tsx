import classes from "./Backdrop.module.css"
import {IBackdropProps} from "./Backdrop.types"

export default function Backdrop({
  children,
  onClick,
  className = "",
  isBlured,
}: IBackdropProps) {
  const styles = {
    backdropFilter: isBlured ? `blur(4px)` : "",
  }
  return (
    <div
      style={styles}
      onClick={onClick}
      className={`${classes.backdrop} ${className}`}
    >
      {children}
    </div>
  )
}
