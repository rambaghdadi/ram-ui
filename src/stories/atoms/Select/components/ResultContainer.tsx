import classes from "./ResultContainer.module.css"
import {IResultContainerProps} from "./ResultContainer.types"

export default function ResultContainer({
  filteredData,
  nothingFound,
  previousSelection,
  setPreviousSelection,
  setIsActive,
  setIsFocused,
  onSelect,
}: IResultContainerProps) {
  return (
    <div className={`${classes.resultContainer}`}>
      {!!filteredData.length ? (
        filteredData.map((item, i) => (
          <p
            onPointerDown={() => {
              setIsFocused(true)
              setPreviousSelection(item)
              onSelect(item)
            }}
            onPointerUp={() => {
              setIsFocused(false)
              setIsActive(false)
            }}
            key={i}
            className={`${classes.result} ${
              previousSelection === item ? classes.selected : ""
            }`}
          >
            {item}
          </p>
        ))
      ) : (
        <p className={classes.noResults}>{nothingFound}</p>
      )}
    </div>
  )
}
