import {Color} from "../../../styles/colors"

export interface ITooltipProps {
  children: React.ReactNode
  label: string
  visibleOnHover?: boolean
  isActive?: boolean
  followMouse?: boolean
  placement?: Placement
  offset?: number
  color?: Color
}

type Placement = "top" | "bottom" | "left" | "right"
