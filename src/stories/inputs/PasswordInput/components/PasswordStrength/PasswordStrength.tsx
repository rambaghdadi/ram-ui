import {useEffect, useState} from "react"
import ProgressBar from "../../../../feedback/ProgressBar/ProgressBar"
import TickIcon from "../../SVGs/TickIcon"
import XIcon from "../../SVGs/XIcon"
import classes from "./PasswordStrength.module.css"

export default function PasswordStrength({
  passingCriteria: {length, number, lowercase, uppercase, symbol},
}: {
  passingCriteria: {
    length: boolean
    number: boolean
    lowercase: boolean
    uppercase: boolean
    symbol: boolean
  }
}) {
  const [progressValue, setProgressValue] = useState(100)
  const attr = [
    {
      text: "Includes at least 8 characters",
      criteria: length,
    },
    {
      text: "Includes numbers",
      criteria: number,
    },
    {
      text: "Includes a lowercase letter",
      criteria: lowercase,
    },
    {
      text: "Includes an uppercase letter",
      criteria: uppercase,
    },
    {
      text: "Includes a special symbol",
      criteria: symbol,
    },
  ]

  function switchColor(item: boolean) {
    return item ? `var(--bg-green-600)` : `var(--bg-red-600)`
  }

  function switchIcon(item: boolean) {
    return item ? <TickIcon /> : <XIcon />
  }

  useEffect(() => {
    let newProgressValue = 0
    const criteria = [length, number, lowercase, uppercase, symbol]

    criteria.forEach((item) => {
      if (item) {
        newProgressValue += 20
      }
    })

    setProgressValue(newProgressValue)
  }, [length, number, symbol, lowercase, uppercase])

  return (
    <>
      <ProgressBar
        value={progressValue}
        color={
          progressValue <= 40
            ? "red"
            : progressValue >= 60 && progressValue < 100
            ? "orange"
            : "green"
        }
        size="sm"
      />
      <div className={classes.container}>
        {attr.map(({criteria, text}) => (
          <p key={text} style={{color: switchColor(criteria)}}>
            <span>{switchIcon(criteria)}</span>
            <span>{text}</span>
          </p>
        ))}
      </div>
    </>
  )
}
