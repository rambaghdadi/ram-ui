import Backdrop from "./Components/Backdrop/Backdrop"
import X from "./SVGs/X"
import classes from "./Modal.module.css"
import {IModalProps} from "./Modal.types"
import {useEffect, useRef} from "react"

export default function Modal({
  withHeader = true,
  isBlured = false,
  isVisible,
  title,
  children,
  onXClick,
  onBackdropClick,
}: IModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prevActiveElement = document.activeElement
    if (isVisible) {
      modalRef?.current?.focus()
    } else {
      if (prevActiveElement) {
        ;(prevActiveElement as HTMLElement).focus()
      }
    }
  }, [isVisible])

  const visibleClass = isVisible ? classes.visible : ""

  return (
    <Backdrop
      isBlured={isBlured}
      className={visibleClass}
      onClick={onBackdropClick}
      aria-label="Click backdrop to close modal"
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className={`${classes.container} ${visibleClass}`}
        role="dialog"
        aria-labelledby={title ? "modalTitle" : undefined}
        aria-label={title ? undefined : "Dialog"}
        tabIndex={-1}
      >
        {withHeader && (
          <div className={classes.header}>
            <p>{title}</p>
            <X onClick={onXClick} aria-label="Close modal" />
          </div>
        )}
        {children}
      </div>
    </Backdrop>
  )
}
