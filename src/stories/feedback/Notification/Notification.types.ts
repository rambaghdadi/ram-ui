import {HTMLAttributes} from "react"

export interface INotificationProps extends HTMLAttributes<HTMLDivElement> {
  isVisible: boolean
  color: Color
  title: string
  message: string
  position?: Position
  onXClick?: () => void
}

export const colors = {
  success: "var(--bg-green-600)",
  pending: "var(--bg-orange-600)",
  fail: "var(--bg-red-600)",
} as const

interface Position {
  top?: string | number
  left?: string | number
  bottom?: string | number
  right?: string | number
}
type Color = keyof typeof colors
