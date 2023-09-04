import {useEffect, useState} from "react"
import classes from "./Rating.module.css"
import {IRatingProps} from "./Rating.types"
import StarIcon from "./SVGs/StarIcon"

export default function Rating({
  color = "blue",
  count = 5,
  value = 0,
  onChange,
  id = "rating",
  name = "starRating",
}: IRatingProps) {
  const [hoveredStar, setHoveredStar] = useState<null | number>(null)
  const mainColor = `var(--bg-${color}-600)`
  const accentColor = `var(--bg-${color}-300)`

  const clampedCount = Math.min(Math.max(0, count), 15)

  useEffect(() => {
    setHoveredStar(null)
  }, [value])

  return (
    <div className={classes.container}>
      {Array.from({length: clampedCount}).map((_, i) => {
        const isFilled = hoveredStar !== null ? hoveredStar >= i : value > i
        const colorShade = isFilled ? mainColor : accentColor
        const inputId = `${id}-${i}`

        return (
          <div
            key={i}
            aria-label={`Rate as ${i + 1} star`}
            onMouseEnter={() => setHoveredStar(i)}
            onMouseLeave={() => setHoveredStar(null)}
            onClick={() => onChange(i + 1)}
          >
            <label htmlFor={inputId} className={classes.hidden}>
              Rating: {i + 1}
            </label>
            <input
              name={name}
              id={inputId}
              type="radio"
              checked={i === value}
              onChange={() => onChange(i + 1)}
              className={classes.hidden}
            />

            <StarIcon
              aria-hidden="true"
              className={classes.icon}
              fill={colorShade}
            />
          </div>
        )
      })}
    </div>
  )
}
