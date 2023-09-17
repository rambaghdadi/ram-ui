import {CSSProperties, Fragment} from "react"
import classes from "./Chip.module.css"
import {IChipProps} from "./Chip.types"
import TickIcon from "./SVGs/TickIcon"

export default function Chip({
  options,
  selected,
  allowMultiSelection = false,
  onSelect,
  color = "blue",
  required = false,
  disabled = false,
}: IChipProps) {
  function onClickHandler(item: string) {
    if (selected.includes(item)) {
      onSelect((prev: string[]) => prev.filter((items) => items !== item))
    } else if (allowMultiSelection) {
      onSelect((prev: string[]) => [...prev, item])
    } else {
      onSelect([item])
    }
  }

  return (
    <div className={classes.container}>
      {options.map(({label, value}) => {
        const isSelected = selected.includes(value)
        return (
          <Fragment key={value}>
            <input
              required={required}
              className={classes.input}
              type="checkbox"
              disabled={disabled}
            />
            <div
              role="button"
              aria-selected={isSelected}
              aria-disabled={disabled}
              style={{"--bg": `var(--bg-${color}-600)`} as CSSProperties}
              onClick={() => onClickHandler(value)}
              className={`${classes.chip} ${
                isSelected ? classes.selected : ""
              } ${disabled ? classes.disabled : ""}`}
            >
              {isSelected && <TickIcon className={classes.tickIcon} />}
              <p>{label}</p>
            </div>
          </Fragment>
        )
      })}
    </div>
  )
}
