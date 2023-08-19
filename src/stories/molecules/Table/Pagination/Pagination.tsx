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
  lower,
  upper,
  totalItems,
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
        <ChevronIcon onClick={previousPage} direction="left" />
        <ChevronIcon onClick={nextPage} direction="right" />
      </div>
    </div>
  )
}
