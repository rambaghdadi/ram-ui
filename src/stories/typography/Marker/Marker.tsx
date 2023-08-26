import {CSSProperties} from "react"
import classes from "./Marker.module.css"
import {IMarkerProps} from "./Marker.types"

export default function Marker({children, color = "yellow"}: IMarkerProps) {
  const styles: CSSProperties = {
    backgroundColor: `var(--bg-${color}-300)`,
    display: "inline",
  }
  return (
    <div style={styles} className={classes.container}>
      {children}
    </div>
  )
}
