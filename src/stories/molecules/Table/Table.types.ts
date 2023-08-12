import {ReactElement} from "react"

export interface ITableProps {
  columns: string[]
  rows: Row[]
  spacing?: VerticalSpacing
  withBorder?: boolean
  isStriped?: boolean
  highlightOnHover?: boolean
  withColumnBorders?: boolean
}

export const verticalSpacing = {
  xs: "var(--p-1)",
  sm: "var(--p-2)",
  md: "var(--p-3)",
  lg: "var(--p-4)",
} as const

type VerticalSpacing = keyof typeof verticalSpacing
type Row = (ReactElement | string)[]
