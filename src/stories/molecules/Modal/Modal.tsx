import Backdrop from "./Components/Backdrop/Backdrop"
import X from "./SVGs/X"
import classes from "./Modal.module.css"
import {IModalProps} from "./Modal.types"

export default function Modal({
  withHeader = true,
  isBlured = false,
  isVisible,
  title,
  children,
  onXClick,
  onBackdropClick,
}: IModalProps) {
  const visibleClass = isVisible ? classes.visible : ""

  return (
    <Backdrop
      isBlured={isBlured}
      className={visibleClass}
      onClick={onBackdropClick}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${classes.container} ${visibleClass}`}
      >
        {withHeader && (
          <div className={classes.header}>
            <p>{title}</p>
            <X onClick={onXClick} />
          </div>
        )}
        {children}
      </div>
    </Backdrop>
  )
}
