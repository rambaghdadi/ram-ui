import {IFlexProps} from "./Flex.types"

export default function Flex({
  id,
  className,
  children,
  flexDirection = "column",
  gap = 1,
  alignItems = "baseline",
  isFullWidth = false,
  wrap = false,
  justifyContent,
  margin,
  padding,
}: IFlexProps) {
  const styles: React.CSSProperties = {
    display: "flex",
    flexDirection: flexDirection,
    gap: `${gap}rem`,
    alignItems: alignItems,
    justifyContent: justifyContent,
    width: isFullWidth ? "100%" : "auto",
    flexWrap: wrap ? "wrap" : "nowrap",
    margin: margin ?? "",
    padding: padding ?? "",
  }
  return (
    <div style={styles} {...{className, id}}>
      {children}
    </div>
  )
}
