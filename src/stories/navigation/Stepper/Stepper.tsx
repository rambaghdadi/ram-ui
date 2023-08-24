import {CSSProperties} from "react"
import classes from "./Stepper.module.css"
import {IStepperProps} from "./Stepper.types"
import TickIcon from "./svgs/TickIcon"

export default function Stepper({
  steps,
  active = 1,
  color = "blue",
  goToStep,
}: IStepperProps) {
  if (active < 1) {
    console.error("The 'active' prop cannot be less than 1.")
    return null
  }
  const activeStep = active - 1

  const iconColors = {
    "--user-color": `var(--bg-${color}-500)`,
  }

  return (
    <div className={classes.container}>
      {steps.map(({title, description}, i) => {
        const iconCls =
          i < activeStep
            ? classes.iconCompleted
            : activeStep > i || activeStep === i
            ? classes.iconActive
            : classes.iconInactive

        const dividerStyles = {
          backgroundColor:
            activeStep > i ? `var(--bg-${color}-500)` : "var(--bg-gray-200)",
        }

        return (
          <div key={i} className={classes.step}>
            <div
              role="button"
              tabIndex={0}
              onClick={() => goToStep(i + 1)}
              style={iconColors as CSSProperties}
              className={`${classes.icon} ${iconCls}`}
            >
              <TickIcon
                className={
                  activeStep > i
                    ? `${classes.tickIcon} ${classes.visible}`
                    : classes.tickIcon
                }
              />

              {activeStep <= i && <p>{i + 1}</p>}
            </div>
            <div className={classes.text}>
              <p className={classes.title}>{title}</p>
              <p className={classes.description}>{description}</p>
            </div>
            {steps.length - 1 > i && (
              <div style={dividerStyles} className={classes.divider} />
            )}
          </div>
        )
      })}
    </div>
  )
}
