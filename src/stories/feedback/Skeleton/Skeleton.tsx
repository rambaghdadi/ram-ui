import classes from "./Skeleton.module.css"
import {ISkeletonProps} from "./Skeleton.types"

export default function Skeleton({width, height, isCircle}: ISkeletonProps) {
  const styles = {
    width,
    height,
    borderRadius: isCircle ? "9000px" : "var(--rounded)",
  }
  return <div style={styles} className={classes.container}></div>
}
