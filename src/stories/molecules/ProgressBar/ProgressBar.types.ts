import {Color} from "../../../styles/colors"

export interface IProgressBarProps {
  size?: Size
  radius?: Radius
  color?: Color
  value: number
}

export const sizes = {
  sm: "0.5rem",
  md: "0.8rem",
  lg: "1rem",
} as const

export const radiuses = {
  sm: "var(--rounded)",
  md: "var(--rounded-md)",
  lg: "var(--rounded-2xl)",
} as const

type Size = keyof typeof sizes
type Radius = keyof typeof radiuses
