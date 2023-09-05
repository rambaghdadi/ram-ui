import {ButtonHTMLAttributes} from "react"
import {colors} from "../Button/Button.types"

export const sizes = {
  sm: {
    padding: "var(--p-1)",
    fontSize: "var(--text-sm)",
    width: "var(--w-4)",
    height: "var(--w-4)",
  },
  md: {
    padding: "var(--p-1)",
    fontSize: "var(--text-base)",
    width: "var(--w-6)",
    height: "var(--w-6)",
  },
  lg: {
    padding: "var(--p-1)",
    fontSize: "var(--text-lg)",
    width: "var(--w-8)",
    height: "var(--w-8)",
  },
} as const

type Size = keyof typeof sizes
type Color = keyof typeof colors
type Variant = keyof typeof colors.blue

export interface IActionIconProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  isLoading?: boolean
  color?: Color
  size?: Size
  variant?: Variant
  dropShadow?: boolean
}
