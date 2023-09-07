import classes from "./BasicInput.module.css"
import {IBasicInputProps} from "./BasicInput.types"

export default function BasicInput({
  value,
  onChange,
  placeholder = "Placeholder",
  error = "",
  required = false,
  disabled = false,
  name,
  id,
  additionalChildren,
  ...props
}: IBasicInputProps) {
  const errorCls = !!error ? classes.error : ""
  const disabledCls = disabled ? classes.disabled : ""
  const errorId = id ? `${id}-error` : undefined

  return (
    <>
      <div className={`${classes.container}`}>
        <label className={classes.label} htmlFor={id}>
          {placeholder}
        </label>
        <input
          aria-describedby={error ? errorId : undefined}
          aria-invalid={!!error}
          placeholder=" "
          className={`${classes.input} ${errorCls} ${disabledCls}`}
          {...{...props, value, onChange, required, disabled, name, id}}
        />
        <p className={`${classes.placeholder} ${errorCls}`}>
          {(error && "Invalid Input") ||
            (disabled && "Disabled") ||
            (!!required ? `${placeholder} *` : placeholder)}
        </p>
        {additionalChildren}
      </div>
      {!!error && (
        <p id={errorId} className={classes.errorMessage}>
          {error}
        </p>
      )}
    </>
  )
}
