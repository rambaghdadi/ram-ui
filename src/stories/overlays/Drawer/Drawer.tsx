import {CSSProperties, useEffect} from "react"
import Backdrop from "../Backdrop/Backdrop"
import classes from "./Drawer.module.css"
import {IDrawerProps} from "./Drawer.types"
import useMediaQuery from "../../../hooks/useMediaQuery"
import X from "./SVGs/X"

export default function Drawer({
  isVisible,
  onBackdropClick,
  onXClick,
  children,
  withHeader = true,
  drawerTitle = "Drawer title",
  width = "30vw",
  height = "100%",
  position = "left",
}: IDrawerProps) {
  const device = useMediaQuery()
  const visibilityCls = isVisible ? classes.visible : ""

  const styles = {
    "--width": device === "mobile" ? "90vw" : width,
    "--height": height,
  }

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onXClick()
      }
    }

    if (isVisible) {
      document.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isVisible, onXClick])

  return (
    <Backdrop
      className={`${classes.backdrop} ${visibilityCls}`}
      onClick={onBackdropClick}
    >
      <div
        aria-modal="true"
        role="dialog"
        aria-label="drawer"
        onClick={(e) => e.stopPropagation()}
        className={`${classes.drawer} ${visibilityCls} ${classes[position]}`}
        style={styles as CSSProperties}
      >
        {withHeader && (
          <div className={classes.drawerHead}>
            <p>{drawerTitle}</p>
            <X onClick={onXClick} aria-label="Close modal" />
          </div>
        )}
        {children}
      </div>
    </Backdrop>
  )
}
