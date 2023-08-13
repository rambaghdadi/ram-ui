import {CSSProperties, useEffect, useRef, useState} from "react"
import classes from "./SegmentedControlInput.module.css"
import {ISegmentedControlInputProps} from "./SegmentedControlInput.types"
import {colors} from "../../../styles/colors"

export default function SegmentedControlInput({
  color = "white",
  data,
  value,
  onChange,
}: ISegmentedControlInputProps) {
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  const [selectorWidth, setSelectorWidth] = useState(0)
  const [selectedButtonColor, setSelectedButtonColor] =
    useState("var(--bg-white)")
  const [buttonColors, setButtonColors] = useState("var(--bg-dark)")
  const [selectorPosition, setSelectorPosition] = useState(0)

  useEffect(() => {
    const firstButton = buttonRefs.current[0]

    if (color === "white") {
      setSelectedButtonColor("var(--bg-dark)")
    } else {
      setSelectedButtonColor("var(--bg-white)")
    }

    const width = firstButton?.getBoundingClientRect().width ?? 0
    setSelectorWidth(width)
  }, [color])

  function handleOnClick(
    e: React.MouseEvent<HTMLButtonElement>,
    value: string
  ) {
    e.preventDefault()
    setButtonColors("var(--bg-dark)")

    const {left: buttonLeft, width} = e.currentTarget.getBoundingClientRect()
    const containerLeft =
      containerRef.current?.getBoundingClientRect().left ?? 0

    if (color === "white") {
      setSelectedButtonColor("var(--bg-dark)")
    } else {
      setSelectedButtonColor("var(--bg-white)")
    }
    setSelectorPosition(buttonLeft - containerLeft)
    setSelectorWidth(width)
    onChange(value)
  }

  const styles: CSSProperties = {
    backgroundColor: colors[color],
    width: selectorWidth + "px",
    left: selectorPosition,
  }

  return (
    <div aria-label="Segmented Control" className={classes.container}>
      <div ref={containerRef} className={classes.innerContainer} role="group">
        <div style={styles} className={classes.selector}></div>
        {data.map((b, i) => (
          <div style={{zIndex: 1}} key={i}>
            <button
              style={{
                color: value === b.value ? selectedButtonColor : buttonColors,
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
        ))}
      </div>
    </div>
  )
}
