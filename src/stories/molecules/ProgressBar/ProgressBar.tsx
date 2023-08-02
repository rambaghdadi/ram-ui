import classes from "./ProgressBar.module.css"
import {IProgressBarProps, colors, radiuses, sizes} from "./ProgressBar.types"

export default function ProgressBar({
  size = "md",
  value = 20,
  radius = "md",
  color = "blue",
}: IProgressBarProps) {
  const clampedValue = Math.min(Math.max(value, 0), 100)

  const styles: React.CSSProperties = {
    height: sizes[size],
    borderRadius: radiuses[radius],
  }

  const barStyles: React.CSSProperties = {
    height: "100%",
    width: `${clampedValue}%`,
    borderRadius: radiuses[radius],
    backgroundColor: colors[color],
  }

  return (
    <div
      style={styles}
      className={classes.container}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={clampedValue}
    >
      <div style={barStyles} className={classes.bar}></div>
    </div>
  )
}
