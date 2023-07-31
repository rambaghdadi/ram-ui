import classes from "./Notification.module.css"
import {INotificationProps, colors} from "./Notification.types"
import X from "./SVGs/X"

export default function Notification({
  isVisible = false,
  position = {
    top: 0,
    right: 0,
  },
  color = "success",
  message,
  onXClick,
  title = "Success",
  style,
}: INotificationProps) {
  const visible = isVisible ? classes.visible : ""
  const styles = {
    "--notification-color": colors[color],
  }

  return (
    <div
      style={{...styles, ...style, ...position}}
      className={`${classes.container} ${visible}`}
    >
      <div className={classes.color}></div>
      <div className={classes.text}>
        <p className={classes.title}>{title}</p>
        {message && <p className={classes.message}>{message}</p>}
      </div>
      <X onClick={onXClick} />
    </div>
  )
}
