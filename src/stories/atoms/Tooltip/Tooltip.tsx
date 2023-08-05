import classes from "./Tooltip.module.css"
import {createPortal} from "react-dom"
import {ITooltipProps, Placement} from "./Tooltip.types"
import {CSSProperties, useEffect, useRef, useState} from "react"
import useElementPosition from "../../../hooks/useElementPosition"

export default function Tooltip({children, label}: ITooltipProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [placement, setPlacement] = useState<Placement>("top")
  const tooltipParentRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)

  const parentPostion = useElementPosition(tooltipParentRef)
  const tooltipPosition = useElementPosition(tooltipRef)

  if (tooltipPosition.top < 0) console.log("hello")

  const visible = isHovered ? classes.visible : ""

  const styles: CSSProperties = {
    top:
      parentPostion.top - parentPostion.height - tooltipPosition.height + "px",
    left:
      parentPostion.left -
      Math.floor(tooltipPosition.width / 2) +
      Math.floor(parentPostion.width / 2) +
      "px",
  }

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={tooltipParentRef}
    >
      {createPortal(
        <div
          ref={tooltipRef}
          style={styles}
          className={`${classes.tooltip} ${visible}`}
        >
          {label}
        </div>,
        document.body
      )}
      {children}
    </div>
  )
}
