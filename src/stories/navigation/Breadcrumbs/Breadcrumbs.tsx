import {Fragment} from "react"
import classes from "./Breadcrumbs.module.css"
import {IBreadcrumbsProps} from "./Breadcrumbs.types"

export default function Breadcrumbs({
  items,
  separator = "/",
  AnchorTag = "a",
  linkProp = "href",
}: IBreadcrumbsProps) {
  return (
    <nav aria-label="breadcrumb">
      <div className={classes.container}>
        {items.map(({href, title}, i) => {
          const isLastItem = items.length - 1 === i
          const linkProps = {
            [linkProp]: href,
          }

          return (
            <Fragment key={i}>
              <AnchorTag
                {...linkProps}
                aria-current={isLastItem ? "page" : undefined}
              >
                {title}
              </AnchorTag>
              {!isLastItem && <span aria-hidden="true">{separator}</span>}
            </Fragment>
          )
        })}
      </div>
    </nav>
  )
}
