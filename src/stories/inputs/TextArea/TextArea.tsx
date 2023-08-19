import {useRef} from "react"
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
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const errorCls = !!error ? classes.error : ""
  const disabledCls = disabled ? classes.disabled : ""

  function onChangeHandler(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const textArea = textAreaRef.current
    if (textArea) {
      textArea.style.height = "auto"
      textArea.style.height = `${textArea.scrollHeight}px`
    }
    onChange(e)
  }

  return (
    <>
      <div className={classes.container}>
        <label className={classes.label} htmlFor={id}>
          {placeholder}
        </label>
        <textarea
          ref={textAreaRef}
          aria-invalid={!!error}
          placeholder=" "
          onChange={onChangeHandler}
          className={`${classes.input} ${errorCls} ${disabledCls}`}
          {...{...props, value, required, disabled, name, id}}
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
