import {useRef} from "react"
import BasicInput from "../BasicInput/BasicInput"
import classes from "./NumberInput.module.css"
import {INumberInputProps} from "./NumberInput.types"
import ChevronIcon from "./SVGs/ChevronIcon"

export default function NumberInput({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  ...props
}: INumberInputProps) {
  const countInterval = useRef<any>(null)
  const countTimeout = useRef<any>(null)

  function getScaleFactor(num: number) {
    const str = num.toString()
    return str.includes(".") ? str.split(".")[1].length : 0
  }

  const v = Number(value)

  function increment() {
    if (typeof v === "number") {
      if (max <= v) return
      onChange((prev: number) => {
        const scaleFactor = Math.pow(10, getScaleFactor(step))
        return Math.min(
          (Math.round(prev * scaleFactor) + Math.round(step * scaleFactor)) /
            scaleFactor,
          max
        )
      })
    }
  }

  function decrement() {
    if (typeof v === "number") {
      if (min >= v) return
      onChange((prev: number) => {
        const scaleFactor = Math.pow(10, getScaleFactor(step))
        return Math.max(
          (Math.round(prev * scaleFactor) - Math.round(step * scaleFactor)) /
            scaleFactor,
          min
        )
      })
    }
  }

  function mouseDownHandler(cb: () => void) {
    countTimeout.current = setTimeout(() => {
      if (countInterval.current) {
        clearInterval(countInterval.current)
      }
      countInterval.current = setInterval(() => {
        cb()
      }, 300)
    }, 500)
  }

  function mouseUpHandler() {
    if (countTimeout.current) clearTimeout(countTimeout.current)
    if (countInterval.current) {
      clearInterval(countInterval.current)
    }
  }

  return (
    <BasicInput
      {...props}
      value={value}
      type="number"
      className={classes.numberInput}
      onChange={(e) => {
        const target = e.target as HTMLInputElement
        onChange(() => target.value)
      }}
      additionalChildren={
        <div className={classes.arrowButtons}>
          <div
            className={classes.arrowButton}
            onPointerDown={() => mouseDownHandler(increment)}
            onPointerUp={mouseUpHandler}
            onClick={increment}
          >
            <ChevronIcon key={0} isActive direction="top" />
          </div>
          <div
            className={classes.arrowButton}
            onPointerDown={() => mouseDownHandler(decrement)}
            onPointerUp={mouseUpHandler}
            onClick={decrement}
          >
            <ChevronIcon key={1} isActive direction="bottom" />
          </div>
        </div>
      }
    />
  )
}
