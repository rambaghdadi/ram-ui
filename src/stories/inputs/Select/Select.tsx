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
  const [currentSelection, setCurrentSelection] = useState("")
  const [previousSelection, setPreviousSelection] = useState("")

  const isValidSelection = data.includes(value)

  const onInputChangeDebounced =
    onInputChange && useCallback(debounce(onInputChange, debounceTimeInMs), [])

  const filteredData = isLocalSearch
    ? data.filter((item) => item.toLowerCase().includes(value.toLowerCase()))
    : data

  function revertValueToSelection() {
    onSelect(currentSelection)
    closeDropdown()
    return
  }

  function closeDropdown() {
    setIsActive(false)
  }

  function onBlurHandler() {
    //If focused, then don't close it
    if (isFocused) return

    //If value is empty, check if there's a selected item, if there is, revert, if not, then close
    if (!value) {
      if (currentSelection) {
        revertValueToSelection()
      }
      closeDropdown()
      return
    }

    //If the value AND the current selection are the same, then close
    if (value === currentSelection) {
      closeDropdown()
      return
    }

    //If the value is wrong, AND there's a current value, then revert to current selection and close
    if (!isValidSelection && currentSelection) {
      revertValueToSelection()
    }

    //If no current selection AND something wrong is in it, then close
    if (!isValidSelection && !currentSelection) {
      onSelect("")
      closeDropdown()
    }

    //If there's a current selection, AND something right was written but not selected, then revert to current selection and close
    if (currentSelection && isValidSelection) {
      revertValueToSelection()
    }
  }

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
          onBlur={onBlurHandler}
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
          <XIcon
            className={classes.icon}
            onClick={() => {
              setCurrentSelection("")
              clearSelection()
            }}
          />
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
            currentSelection,
            onSelect,
            setIsActive,
            setIsFocused,
            filteredData,
            nothingFound,
            previousSelection,
            setPreviousSelection,
            setCurrentSelection,
          }}
        />
      )}
    </div>
  )
}
