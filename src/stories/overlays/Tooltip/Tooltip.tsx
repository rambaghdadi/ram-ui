import classes from "./Tooltip.module.css"
import {createPortal} from "react-dom"
import {ITooltipProps} from "./Tooltip.types"
import {CSSProperties, useEffect, useState} from "react"
import {usePopper} from "react-popper"
import {colors} from "../../../styles/colors"

const virtualReference = {
  getBoundingClientRect: generateBoundingClientRect(),
}

export function generateBoundingClientRect(x = 0, y = 0): () => DOMRect {
  return () => ({
    width: 0,
    height: 0,
    top: y,
    right: x,
    bottom: y,
    left: x,
    x: 0,
    y: 0,
    toJSON: () => null,
  })
}

export default function Tooltip({
  children,
  label,
  color = "white",
  placement = "top",
  offset = 15,
  isActive = false,
  visibleOnHover = true,
  followMouse = false,
}: ITooltipProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(
    null
  )
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null)
  const [arrowElement, setArrowElement] = useState<HTMLElement | null>(null)

  const {styles, attributes, update} = usePopper(
    followMouse ? virtualReference : referenceElement,
    popperElement,
    {
      placement: placement,
      modifiers: [
        {name: "arrow", options: {element: arrowElement}},
        {
          name: "offset",
          options: {
            offset: [0, offset],
          },
        },
      ],
    }
  )

  useEffect(() => {
    function updatePosition(e: MouseEvent) {
      let x = e.clientX
      let y = e.clientY

      virtualReference.getBoundingClientRect = generateBoundingClientRect(x, y)
      update?.()
    }

    referenceElement?.addEventListener("mousemove", updatePosition)

    return () =>
      referenceElement?.removeEventListener("mousemove", updatePosition)
  }, [referenceElement, update])

  const tooltipStyles: CSSProperties = {
    backgroundColor: colors[color],
    color: color === "white" ? "var(--bg-black)" : "var(--bg-white)",
  }

  return (
    <div
      ref={setReferenceElement}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {((visibleOnHover && isHovered) || isActive) &&
        createPortal(
          <div
            ref={setPopperElement}
            style={{...styles.popper, ...tooltipStyles}}
            {...attributes.popper}
            className={`${classes.tooltip}`}
            id="tooltip"
            role="tooltip"
          >
            {label}
            <div
              ref={setArrowElement}
              id="arrow"
              data-popper-arrow
              style={styles.arrow}
            />
          </div>,
          document.body
        )}
      {children}
    </div>
  )
}
