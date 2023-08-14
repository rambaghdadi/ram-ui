import classes from "./TextArea.module.css"
import {ITextAreaProps} from "./TextArea.types"

export default function TextArea({
  value,
  onChange,
  placeholder = "Placeholder",
  error = "",
  required = false,
  disabled = false,
  name,
  id,
  ...props
}: ITextAreaProps) {
  const errorCls = !!error ? classes.error : ""
  const disabledCls = disabled ? classes.disabled : ""

  return (
    <>
      <div className={classes.container}>
        <label className={classes.label} htmlFor={id}>
          {placeholder}
        </label>
        <textarea
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
      </div>
      {!!error && <p className={classes.errorMessage}>{error}</p>}
    </>
  )
}
