import classes from "./Timeline.module.css"
import {ITimelineProps} from "./Timeline.types"

export default function Timeline({
  data,
  active,
  color = "violet",
}: ITimelineProps) {
  return (
    <div className={classes.container} role="list">
      {data.map(({branchDetails, branchName, branchTime}, i) => {
        const lineColor =
          i < active ? `var(--bg-${color}-500)` : `var(--bg-gray-300)`
        const circleColor =
          i <= active ? `var(--bg-${color}-500)` : `var(--bg-gray-300)`

        return (
          <div
            style={{
              borderLeftColor: lineColor,
            }}
            className={classes.individualTime}
            role="listitem"
            aria-label={`${branchName}: ${branchDetails}`}
          >
            <div
              aria-hidden="true"
              style={{
                borderColor: circleColor,
              }}
              className={classes.iconContainer}
            />
            <div className={classes.text}>
              <p aria-label="Branch Name" className={classes.branchName}>
                {branchName}
              </p>
              <p aria-label="Branch Details" className={classes.branchDetails}>
                {branchDetails}
              </p>
              <p aria-label="Branch Time" className={classes.branchTime}>
                {branchTime}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
