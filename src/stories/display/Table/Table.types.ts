import {ReactElement} from "react"

export interface ITableProps {
  columns: string[]
  rows: Row[]
  spacing?: VerticalSpacing
  withBorder?: boolean
  isStriped?: boolean
  highlightOnHover?: boolean
  withColumnBorders?: boolean
  isPaginated?: boolean
  isLoading?: boolean
  isSortingEnabled?: boolean
  maxHeight?: string
  isResizingEnable?: boolean
  id?: number

  sortAscending: (i: number) => void
  sortDescending: (i: number) => void

  upperPage?: number
  lowerPage?: number
  totalItems?: number
  nextPage: () => void
  previousPage: () => void
}

export const verticalSpacing = {
  xs: "var(--p-1)",
  sm: "var(--p-2)",
  md: "var(--p-3)",
  lg: "var(--p-4)",
} as const

type VerticalSpacing = keyof typeof verticalSpacing
interface Row {
  data: (ReactElement | string)[]
  onClickHandler?: () => void
}
