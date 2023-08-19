import {useCallback, useState} from "react"
import SelectIcon from "./SVGs/SelectIcon"
import classes from "./Select.module.css"
import {ISelectProps} from "./Select.types"
import XIcon from "./SVGs/XIcon"
import {debounce} from "../../../utils/helperFunctions"
import ResultContainer from "./components/ResultContainer"

export default function Select({
  data,
  value,
  onInputChange,
  onSelect,
  id,
  name,
  placeholder,
  clearSelection,
  nothingFound = "No results found",
  disabled,
  isLocalSearch = true,
  debounceSearch = true,
  debounceTimeInMs = 250,
}: ISelectProps) {
  const [isActive, setIsActive] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const [previousSelection, setPreviousSelection] = useState("")

  const isValidSelection = data.includes(value)

  const onInputChangeDebounced =
    onInputChange && useCallback(debounce(onInputChange, debounceTimeInMs), [])

  const filteredData = isLocalSearch
    ? data.filter((item) => item.toLowerCase().includes(value.toLowerCase()))
    : data

  return (
    <div className={classes.container}>
      <div
        className={`${classes.inputContainer} ${
          disabled ? classes.disabled : ""
        }`}
      >
        <input
          onFocus={() => {
            setIsActive(true)
          }}
          onBlur={() => {
            if (!isFocused && isValidSelection) {
              setIsActive(false)
            } else {
              if (isLocalSearch) onSelect(previousSelection)
              setIsActive(false)
            }
          }}
          className={classes.input}
          value={value}
          onChange={(e) => {
            debounceSearch
              ? onInputChangeDebounced?.(e.target.value)
              : onInputChange?.(e.target.value)
            onSelect(e.target.value)
          }}
          id={id}
          name={name}
          type="search"
          disabled={disabled}
          placeholder={placeholder}
        />
        {value ? (
          <XIcon className={classes.icon} onClick={() => clearSelection()} />
        ) : (
          <SelectIcon
            className={classes.icon}
            onClick={() => setIsActive(true)}
          />
        )}
      </div>
      {isActive && (
        <ResultContainer
          {...{
            onSelect,
            setIsActive,
            setIsFocused,
            filteredData,
            nothingFound,
            previousSelection,
            setPreviousSelection,
          }}
        />
      )}
    </div>
  )
}
