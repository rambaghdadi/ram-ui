import {ChangeEvent, useState} from "react"
import classes from "./PasswordInput.module.css"
import {IPasswordInputProps} from "./PasswordInput.types"
import InvisibleIcon from "./SVGs/InvisibleIcon"
import VisibleIcon from "./SVGs/VisibleIcon"
import ActionIcon from "../../buttons/ActionIcon/ActionIcon"
import Tooltip from "../../overlays/Tooltip/Tooltip"
import PasswordStrength from "./components/PasswordStrength/PasswordStrength"

export default function PasswordInput({
  value,
  onChange,
  placeholder = "Placeholder",
  passwordDetails = "Password must include at least one letter, number and special character",
  error = "",
  required = false,
  disabled = false,
  name,
  id,
  includePasswordStrength = false,
  ...props
}: IPasswordInputProps) {
  const [isPasswordType, setIsPasswordType] = useState(true)
  const [isFocused, setIsFocused] = useState(false)
  const [passingCriteria, setPassingCriteria] = useState({
    length: false,
    number: false,
    lowercase: false,
    uppercase: false,
    symbol: false,
  })
  const errorCls = !!error ? classes.error : ""
  const disabledCls = disabled ? classes.disabled : ""
  const errorId = id ? `${id}-error` : undefined

  function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value

    const lengthCheck = value.length >= 8
    const numberCheck = /[0-9]/.test(value)
    const lowercaseCheck = /[a-z]/.test(value)
    const uppercaseCheck = /[A-Z]/.test(value)
    const symbolCheck = /[\W_]/.test(value)

    setPassingCriteria({
      length: lengthCheck,
      number: numberCheck,
      lowercase: lowercaseCheck,
      uppercase: uppercaseCheck,
      symbol: symbolCheck,
    })

    onChange(e)
  }

  function togglePasswordVisibility() {
    setIsPasswordType((prev) => !prev)
  }

  return (
    <Tooltip
      label={<PasswordStrength passingCriteria={passingCriteria} />}
      placement="bottom"
      isFullWidth
      isActive={includePasswordStrength && isFocused}
      visibleOnHover={false}
    >
      <div className={`${classes.container}`}>
        <label className={classes.label} htmlFor={id}>
          {placeholder}
        </label>
        <input
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          type={isPasswordType ? "password" : "text"}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          placeholder=" "
          className={`${classes.input} ${errorCls} ${disabledCls}`}
          onChange={onChangeHandler}
          {...{...props, value, required, disabled, name, id}}
        />

        <p className={`${classes.placeholder} ${errorCls}`}>
          {(error && "Invalid Input") ||
            (disabled && "Disabled") ||
            (!!required ? `${placeholder} *` : placeholder)}
        </p>

        <ActionIcon
          variant="light"
          color="gray"
          size="sm"
          aria-label="Toggle password visibility"
          className={classes.toggleIcon}
          onClick={togglePasswordVisibility}
        >
          {isPasswordType ? <InvisibleIcon /> : <VisibleIcon />}
        </ActionIcon>
      </div>
      {<p className={classes.passwordDetails}>{passwordDetails}</p>}
      {!!error && (
        <p id={errorId} className={classes.errorMessage}>
          {error}
        </p>
      )}
    </Tooltip>
  )
}
