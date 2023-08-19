import {ITableProps} from "../Table.types"
import classes from "./Pagination.module.css"
import ChevronIcon from "./SVGs/ChevronIcon"

interface PaginationProps
  extends Pick<
    ITableProps,
    "upper" | "lower" | "totalItems" | "nextPage" | "previousPage"
  > {}

export default function Pagination({
  nextPage,
  previousPage,
  lower = 1,
  upper = 1,
  totalItems = 1,
}: PaginationProps) {
  return (
    <div className={classes.paginationContainer}>
      <div className={classes.pageDetails}>
        <p>
          {lower} - {upper} of
        </p>
        <p className={classes.totalCount}>{totalItems}</p>
      </div>
      <div className={classes.chevronContainer}>
        <ChevronIcon
          isActive={lower > 1}
          onClick={previousPage}
          direction="left"
        />
        <ChevronIcon
          isActive={upper !== totalItems}
          onClick={nextPage}
          direction="right"
        />
      </div>
    </div>
  )
}
