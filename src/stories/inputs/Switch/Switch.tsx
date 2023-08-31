import {CSSProperties} from "react"
import classes from "./Switch.module.css"
import {ISwitchProps} from "./Switch.types"

export default function Switch({
  value = false,
  onChange,
  label,
  disabled,
  color = "blue",
}: ISwitchProps) {
  const activeCls = value ? classes.active : ""

  const containerStyles: CSSProperties = {
    backgroundColor: value
      ? `var(--bg-${color}-500)`
      : disabled
      ? `var(--bg-gray-200)`
      : `var(--bg-gray-300)`,
    pointerEvents: disabled ? "none" : "all",
  }

  return (
    <div className={classes.parent}>
      <input
        checked={value}
        className={classes.input}
        type="checkbox"
        disabled={disabled}
        onChange={() => onChange(!value)}
      />
      <div
        role="switch"
        aria-checked={value}
        onClick={() => onChange(!value)}
        className={`${classes.container} ${activeCls}`}
        style={containerStyles}
      >
        <div className={`${classes.switch} ${activeCls}`} />
      </div>
      <label className={classes.label}>{label}</label>
    </div>
  )
}
