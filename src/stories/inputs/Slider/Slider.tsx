import {CSSProperties, useEffect, useRef, useState} from "react"
import classes from "./Slider.module.css"
import {ISliderProps} from "./Slider.types"

export default function Slider({
  value = 0,
  onChange,
  showLabel = true,
  color = "blue",
}: ISliderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isSliding, setIsSliding] = useState(false)

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

    onChange && onChange(+roundedPercentage)
  }

  function onMouseMoveHandler(e: MouseEvent) {
    if (!isSliding) return
    handleMove(e.clientX)
  }

  function onTouchMoveHandler(e: TouchEvent) {
    if (!isSliding) return
    handleMove(e.touches[0].clientX)
  }

  const bgColor = {
    "--bg": `var(--bg-${color}-600)`,
  } as CSSProperties

  return (
    <div
      className={classes.container}
      role="slider"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      tabIndex={0}
      style={{
        cursor: isSliding ? "grabbing" : "grab",
      }}
    >
      <div
        ref={containerRef}
        className={classes.slider}
        onMouseDown={() => setIsSliding(true)}
        onTouchStart={() => setIsSliding(true)}
        style={bgColor}
      >
        <div
          className={classes.slide}
          style={{
            left: `calc(${value}% - 0.6rem)`,
            ...bgColor,
          }}
        >
          {showLabel && <div className={classes.label}>{value}%</div>}
        </div>
      </div>
    </div>
  )
}
