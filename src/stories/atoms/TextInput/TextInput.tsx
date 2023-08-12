import classes from "./TextInput.module.css"
import {ITextInputProps} from "./TextInput.types"

export default function TextInput({
  value,
  onChange,
  placeholder = "Placeholder",
  error = "",
  required = false,
  disabled = false,
  name,
  id,
}: ITextInputProps) {
  const errorCls = !!error ? classes.error : ""
  const disabledCls = disabled ? classes.disabled : ""

  return (
    <>
      <div className={`${classes.container}`}>
        <label className={classes.label} htmlFor={id}>
          {placeholder}
        </label>
        <input
          aria-invalid={!!error}
          placeholder=" "
          className={`${classes.input} ${errorCls} ${disabledCls}`}
          {...{value, onChange, required, disabled, name, id}}
        />
        <p className={`${classes.placeholder} ${errorCls}`}>
          {(error && "Invalid Input") ||
            (disabled && "Disabled") ||
            (!!required ? `${placeholder} *` : placeholder)}
        </p>
      </div>
      {!!error && <p className={classes.errorMessage}>{error}</p>}
    </>
  )
}
