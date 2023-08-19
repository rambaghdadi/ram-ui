import {useState} from "react"
import classes from "./Accordion.module.css"
import {IAccordionProps} from "./Accordion.types"
import AccordionItem from "./components/AccordionItem/AccordionItem"

export default function Accordion({
  variant = "default",
  allowMultipleOpen = true,
  items,
}: IAccordionProps) {
  const [openTitles, setOpenTitles] = useState<string[]>([])

  function handleClick(title: string) {
    setOpenTitles((prev) => {
      if (prev.includes(title)) {
        return prev.filter((item) => item !== title)
      } else {
        return allowMultipleOpen ? [...prev, title] : [title]
      }
    })
  }

  return (
    <div role="region" className={`${classes.container} ${classes[variant]}`}>
      {items.map(({content, title, iconAlt, iconSrc}) => (
        <AccordionItem
          key={title}
          isOpen={openTitles.includes(title)}
          onClick={() => handleClick(title)}
          {...{variant, iconAlt, iconSrc, title}}
        >
          {content}
        </AccordionItem>
      ))}
    </div>
  )
}
