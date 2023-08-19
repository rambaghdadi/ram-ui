export interface IAccordionProps {
  variant?: Variant
  items: Item[]
  allowMultipleOpen?: boolean
}

export interface Item {
  title: string
  content: React.ReactNode
  iconSrc?: string
  iconAlt?: string
}

type Variant = "default" | "contained" | "seperated"
