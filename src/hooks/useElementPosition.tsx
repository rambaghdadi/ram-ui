import {RefObject, useEffect, useState} from "react"

const DEFAULT_POSITION = {
  top: 0,
  left: 0,
  height: 0,
  width: 0,
}

export default function useElementPosition(
  elementRef: RefObject<HTMLElement | null>
) {
  const [position, setPosition] = useState(DEFAULT_POSITION)

  function getPosition() {
    const {top, left, height, width} =
      elementRef.current?.getBoundingClientRect() ?? DEFAULT_POSITION

    setPosition({
      top,
      left,
      width,
      height,
    })
  }

  useEffect(() => {
    getPosition()

    window.addEventListener("resize", getPosition)
    window.addEventListener("scroll", getPosition)

    return () => {
      window.removeEventListener("resize", getPosition)
      window.removeEventListener("scroll", getPosition)
    }
  }, [elementRef.current])

  return position
}
