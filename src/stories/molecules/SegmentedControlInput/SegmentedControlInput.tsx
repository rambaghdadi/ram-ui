import {CSSProperties, useEffect, useRef, useState} from "react"
import classes from "./SegmentedControlInput.module.css"
import {ISegmentedControlInputProps} from "./SegmentedControlInput.types"
import {colors} from "../../../styles/colors"

export default function SegmentedControlInput({
  color = "blue",
  data,
}: ISegmentedControlInputProps) {
  const firstButtonRef = useRef<HTMLButtonElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const [value, setValue] = useState("")
  const [selectorWidth, setSelectorWidth] = useState(0)
  const [selectorPosition, setSelectorPosition] = useState(0)

  useEffect(() => {
    if (firstButtonRef.current) {
      firstButtonRef.current.style.color = "white"
    }

    const width = firstButtonRef.current?.getBoundingClientRect().width ?? 0
    setSelectorWidth(width)
  }, [firstButtonRef.current])

  function handleOnClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    containerRef.current?.childNodes.forEach((node) => {
      if (node instanceof HTMLElement) {
        node.style.color = "#333"
      }
    })
    const {left: buttonLeft, width} = e.currentTarget.getBoundingClientRect()
    const containerLeft =
      containerRef.current?.getBoundingClientRect().left ?? 0

    e.currentTarget.style.color = "white"
    setSelectorPosition(buttonLeft - containerLeft)
    setSelectorWidth(width)
  }

  const styles: CSSProperties = {
    backgroundColor: colors[color],
    width: selectorWidth + "px",
    left: selectorPosition,
  }

  return (
    <div className={classes.container}>
      <div ref={containerRef} className={classes.innerContainer}>
        <div style={styles} className={classes.selector}></div>
        {data.map(({label}, i) => (
          <button onClick={handleOnClick} ref={i === 0 ? firstButtonRef : null}>
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}
