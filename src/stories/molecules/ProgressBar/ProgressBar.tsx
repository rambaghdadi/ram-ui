import Tooltip from "../../atoms/Tooltip/Tooltip"
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

  const barParentStyles: React.CSSProperties = {
    width: `${clampedValue}%`,
  }

  const barStyles: React.CSSProperties = {
    height: sizes[size],
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
      <div style={barParentStyles}>
        <Tooltip label={value + "%"} followMouse>
          <div style={barStyles} className={classes.bar} />
        </Tooltip>
      </div>
    </div>
  )
}
