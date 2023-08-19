import {ITableProps} from "../Table.types"
import classes from "./Pagination.module.css"
import ChevronIcon from "./SVGs/ChevronIcon"

interface PaginationProps
  extends Pick<
    ITableProps,
    "upperPage" | "lowerPage" | "totalItems" | "nextPage" | "previousPage"
  > {}

export default function Pagination({
  nextPage,
  previousPage,
  lowerPage = 1,
  upperPage = 1,
  totalItems = 1,
}: PaginationProps) {
  return (
    <div className={classes.paginationContainer}>
      <div className={classes.pageDetails}>
        <p>
          {lowerPage} - {upperPage} of
        </p>
        <p className={classes.totalCount}>{totalItems}</p>
      </div>
      <div className={classes.chevronContainer}>
        <ChevronIcon
          isActive={lowerPage > 1}
          onClick={previousPage}
          direction="left"
        />
        <ChevronIcon
          isActive={upperPage !== totalItems}
          onClick={nextPage}
          direction="right"
        />
      </div>
    </div>
  )
}
