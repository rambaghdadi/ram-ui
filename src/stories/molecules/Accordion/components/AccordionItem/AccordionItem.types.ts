import {IAccordionProps} from "../../Accordion.types"

export interface IAccordionItemProps extends Pick<IAccordionProps, "variant"> {
  title: string
  children: React.ReactNode
  isOpen: boolean
  onClick: () => void
  iconSrc?: string
  iconAlt?: string
}
