import {ElementType} from "react"

export interface IBreadcrumbsProps {
  items: Item[]
  separator?: "|" | ">" | "<" | "/" | "\\"
  AnchorTag?: ElementType
  linkProp?: "href" | "to" | (string & {})
}

type Item = {
  title: string
  href: string
}
