import {ChangeEvent, useState} from "react"
import classes from "./PasswordInput.module.css"
import {IPasswordInputProps} from "./PasswordInput.types"
import InvisibleIcon from "./SVGs/InvisibleIcon"
import VisibleIcon from "./SVGs/VisibleIcon"
import ActionIcon from "../../buttons/ActionIcon/ActionIcon"
import Tooltip from "../../overlays/Tooltip/Tooltip"
import PasswordStrength from "./components/PasswordStrength/PasswordStrength"
import BasicInput from "../BasicInput/BasicInput"
import LockIcon from "./SVGs/LockIcon"

export default function PasswordInput({
  passwordDetails = "Password must include at least one letter, number and special character",
  includePasswordStrength = false,
  onChange,
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

    onChange && onChange(e)
  }

  return (
    <Tooltip
      label={<PasswordStrength passingCriteria={passingCriteria} />}
      placement="bottom"
      isFullWidth
      isActive={includePasswordStrength && isFocused}
      visibleOnHover={false}
    >
      <BasicInput
        {...props}
        icon={<LockIcon />}
        type={isPasswordType ? "password" : "text"}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
        onChange={onChangeHandler}
        additionalChildren={
          <ActionIcon
            variant="light"
            color="gray"
            size="sm"
            aria-label="Toggle password visibility"
            onClick={() => setIsPasswordType((prev) => !prev)}
          >
            {isPasswordType ? <InvisibleIcon /> : <VisibleIcon />}
          </ActionIcon>
        }
      />
      {<p className={classes.passwordDetails}>{passwordDetails}</p>}
    </Tooltip>
  )
}
