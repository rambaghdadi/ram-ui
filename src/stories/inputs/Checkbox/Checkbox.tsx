import {CSSProperties} from "react"
import classes from "./Checkbox.module.css"
import {ICheckboxProps} from "./Checkbox.types"
import TickIcon from "./SVGs/TickIcon"

export default function Checkbox({
  error,
  checked,
  label,
  onChange,
  color = "blue",
  disabled,
  id,
  name,
  required,
}: ICheckboxProps) {
  const inputStyles = {
    "--bg": `var(--bg-${color}-600)`,
  }

  return (
    <div className={classes.container}>
      <div
        className={`${classes.checkboxContainer} ${
          disabled ? classes.disabled : ""
        }`}
      >
        <div className={classes.inputContainer}>
          <input
            required={required}
            id={id}
            name={name}
            style={inputStyles as CSSProperties}
            className={classes.input}
            type="checkbox"
            checked={checked}
            aria-checked={checked}
            aria-label={label}
            aria-invalid={!!error}
            aria-describedby={error ? `${id}-error` : undefined}
            onChange={onChange}
            disabled={disabled}
          />
          {checked && <TickIcon className={classes.icon} />}
        </div>
        <label className={classes.label} htmlFor={id}>
          {required && <span>* </span>}
          {label}
        </label>
      </div>
      {!!error && (
        <p id={`${id}-error`} className={classes.error}>
          {error}
        </p>
      )}
    </div>
  )
}
