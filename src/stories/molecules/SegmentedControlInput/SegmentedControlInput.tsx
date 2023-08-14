import {CSSProperties, useEffect, useRef, useState} from "react"
import classes from "./SegmentedControlInput.module.css"
import {ISegmentedControlInputProps} from "./SegmentedControlInput.types"
import {colors, darkFontColors} from "../../../styles/colors"

const LIGHT_COLOR = "var(--bg-white)"
const DARK_COLOR = "var(--bg-gray-700)"

export default function SegmentedControlInput({
  color = "white",
  data,
  value,
  onChange,
}: ISegmentedControlInputProps) {
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  const initialColor = darkFontColors.includes(color) ? DARK_COLOR : LIGHT_COLOR

  const [selectorWidth, setSelectorWidth] = useState(0)
  const [selectedButtonColor, setSelectedButtonColor] = useState(initialColor)
  const [buttonColors, setButtonColors] = useState(DARK_COLOR)
  const [selectorPosition, setSelectorPosition] = useState(0)

  useEffect(() => {
    const firstButton = buttonRefs.current[0]

    const width = firstButton?.getBoundingClientRect().width ?? 0
    setSelectorWidth(width)
  }, [])

  function handleOnClick(
    e: React.MouseEvent<HTMLButtonElement>,
    value: string
  ) {
    e.preventDefault()
    setButtonColors(DARK_COLOR)

    const {left: buttonLeft, width} = e.currentTarget.getBoundingClientRect()
    const containerLeft =
      containerRef.current?.getBoundingClientRect().left ?? 0

    setSelectedButtonColor(initialColor)
    setSelectorPosition(buttonLeft - containerLeft)
    setSelectorWidth(width)
    onChange(value)
  }

  const styles: CSSProperties = {
    backgroundColor: colors[color],
    width: selectorWidth + "px",
    left: selectorPosition,
  }

  const currentButtonIndex = data.findIndex((b) => b.value === value)

  return (
    <div aria-label="Segmented Control" className={classes.container}>
      <div ref={containerRef} className={classes.innerContainer} role="group">
        <div style={styles} className={classes.selector}></div>
        {data.map((b, i) => {
          const selectedButton = b.value === value
          const previousButtonToSelected = currentButtonIndex - 1 === i
          const lastButton = data.length - 1 === i
          const removeBorder =
            selectedButton || lastButton || previousButtonToSelected

          return (
            <div style={{zIndex: 1}} key={i}>
              <button
                style={{
                  color: value === b.value ? selectedButtonColor : buttonColors,
                  borderRight: removeBorder ? "none" : "",
                }}
                onClick={(e) => handleOnClick(e, b.value)}
                ref={(el) => (buttonRefs.current[i] = el)}
                aria-pressed={value === b.value ? "true" : "false"}
              >
                {b.label}
              </button>
              <input
                className={classes.input}
                type="radio"
                checked={value === b.value}
                value={b.value}
                onChange={() => onChange(b.value)}
                aria-hidden="true"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
