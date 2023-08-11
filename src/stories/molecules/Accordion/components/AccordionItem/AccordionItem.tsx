import {KeyboardEvent} from "react"
import classes from "./AccordionItem.module.css"
import {IAccordionItemProps} from "./AccordionItem.types"
import Chevron from "./SVGs/Chevron"

export default function AccordionItem({
  title,
  children,
  iconSrc,
  iconAlt,
  isOpen = false,
  variant = "default",
  onClick,
}: IAccordionItemProps) {
  function onKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter" || e.key === "Spacebar" || e.key === " ") {
      e.preventDefault()
      onClick()
    }
  }
  return (
    <div className={`${classes.container} ${classes[variant]}`}>
      <div
        role="button"
        onClick={onClick}
        className={classes.header}
        tabIndex={0}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${title}`}
        onKeyDown={onKeyDown}
      >
        <div className={classes.headerPrimary}>
          {!!iconSrc && <img src={iconSrc} alt={iconAlt} />}
          <p className={classes.title}>{title}</p>
        </div>
        <Chevron
          className={`${classes.chevron} ${isOpen ? classes.active : ""}`}
        />
      </div>
      <div className={`${classes.body} ${isOpen ? classes.visible : ""}`}>
        {children}
      </div>
    </div>
  )
}
