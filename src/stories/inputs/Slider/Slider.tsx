import {CSSProperties, useEffect, useRef, useState} from "react"
import classes from "./Slider.module.css"
import {ISliderProps} from "./Slider.types"

export default function Slider({
  isRange = false,
  value = [0, 100],
  onChange,
  showLabel = true,
  color = "blue",
}: ISliderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isSliding, setIsSliding] = useState(false)
  const [currentSlider, setCurrentSlider] = useState(0)

  if (value.length > 2)
    throw new Error("Array of values must not exceed a length of two.")

  if (value[0] >= value[1])
    throw new Error("Secondary value must be larger than primary value.")

  useEffect(() => {
    function mouseUpHandler() {
      setIsSliding(false)
    }

    function touchEndHandler() {
      setIsSliding(false)
    }

    window.addEventListener("mousemove", onMouseMoveHandler)
    window.addEventListener("mouseup", mouseUpHandler)
    window.addEventListener("touchmove", onTouchMoveHandler)
    window.addEventListener("touchend", touchEndHandler)

    return () => {
      window.removeEventListener("mousemove", onMouseMoveHandler)
      window.removeEventListener("mouseup", mouseUpHandler)
      window.removeEventListener("touchmove", onTouchMoveHandler)
      window.removeEventListener("touchend", touchEndHandler)
    }
  }, [isSliding])

  function handleMove(clientX: number) {
    const width = containerRef?.current?.getBoundingClientRect().width ?? 0
    const left = containerRef?.current?.getBoundingClientRect().left ?? 0
    const mouseRelativePosition = clientX - left

    const percentage = (Math.floor(mouseRelativePosition) / width) * 100
    const roundedPercentage = Math.min(Math.max(0, Math.floor(percentage)), 100)

    if (currentSlider === 1 && roundedPercentage <= value[0]) return
    if (currentSlider === 0 && roundedPercentage >= value[1]) return

    const newValue = [...value]
    newValue[currentSlider] = +roundedPercentage
    onChange && onChange(newValue)
  }

  function onMouseMoveHandler(e: MouseEvent) {
    e.preventDefault()
    if (!isSliding) return
    console.log(e)
    handleMove(e.clientX)
  }

  function onTouchMoveHandler(e: TouchEvent) {
    if (!isSliding) return
    handleMove(e.touches[0].clientX)
  }

  const styles = {
    "--bg": `var(--bg-${color}-600)`,
    cursor: isSliding ? "grabbing" : "grab",
  } as CSSProperties

  return (
    <div
      className={classes.container}
      role="slider"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value[0]}
      tabIndex={0}
      style={styles}
    >
      <div ref={containerRef} className={classes.slider} style={styles}>
        {Array.from({length: isRange ? value.length : 1}).map((_, i) => {
          return (
            <div
              onMouseDown={() => {
                setCurrentSlider(i)
                setIsSliding(true)
              }}
              onTouchStart={() => {
                setCurrentSlider(i)
                setIsSliding(true)
              }}
              className={classes.slide}
              style={{
                left: `calc(${value[i]}% - 0.6rem)`,
                ...styles,
              }}
            >
              {(showLabel || isSliding) && (
                <div className={classes.label}>{value[i]}</div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
