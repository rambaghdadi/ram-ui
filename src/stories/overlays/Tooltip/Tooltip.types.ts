import {Color} from "../../../styles/colors"

export interface ITooltipProps {
  children: React.ReactNode
  label: string | JSX.Element
  visibleOnHover?: boolean
  isActive?: boolean
  followMouse?: boolean
  placement?: Placement
  offset?: number
  color?: Color
  isFullWidth?: boolean
}

type Placement = "top" | "bottom" | "left" | "right"
