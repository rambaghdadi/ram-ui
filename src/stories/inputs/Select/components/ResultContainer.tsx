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
  currentSelection,
  setCurrentSelection,
}: IResultContainerProps) {
  return (
    <div className={`${classes.resultContainer}`}>
      {!!filteredData.length ? (
        filteredData.map((item, i) => (
          <p
            onMouseDown={() => {
              setIsFocused(true)
              setPreviousSelection(item)
              setCurrentSelection(item)
              onSelect(item)
            }}
            onMouseUp={() => {
              setIsFocused(false)
              setIsActive(false)
            }}
            key={i}
            style={{
              backgroundColor:
                currentSelection === item
                  ? `var(--bg-blue-500)`
                  : item === previousSelection
                  ? `var(--bg-orange-500)`
                  : undefined,
            }}
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
