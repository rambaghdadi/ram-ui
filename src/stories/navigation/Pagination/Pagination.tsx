import useMediaQuery from "../../../hooks/useMediaQuery"
import {colors} from "../../../styles/colors"
import classes from "./Pagination.module.css"
import {IPaginationProps, sizes} from "./Pagination.types"
import PageButton from "./components/PageButton/PageButton"
import PaginationLeftArrow from "./components/PaginationArrows/PaginationLeftArrow"
import PaginationRightArrow from "./components/PaginationArrows/PaginationRightArrow"
import PaginationDots from "./components/PaginationDots/PaginationDots"

export default function Pagination({
  size = "md",
  color = "blue",
  totalPages = 10,
  activePage = 1,
  siblings = 2,
  onPageChange,
  style,
}: IPaginationProps) {
  const device = useMediaQuery()

  const styles = {
    "--background-color": colors[color],
  }

  const buttonStyles = {
    padding: sizes[device][size].padding,
    minWidth: sizes[device][size].width,
    height: sizes[device][size].height,
    fontSize: sizes[device][size].fontSize,
  }

  return (
    <div
      style={{...styles, ...style}}
      className={`${classes.container}`}
      aria-label="Page navigation"
    >
      <PageButton
        style={buttonStyles}
        disabled={activePage === 1}
        onClick={() => onPageChange(1)}
        aria-label="Go to the first page"
        aria-aria-disabled={activePage === 1}
      >
        <PaginationLeftArrow />
      </PageButton>
      <PageButton
        style={buttonStyles}
        onClick={() => onPageChange(1)}
        className={1 === activePage ? classes.active : ""}
        aria-current={1 === activePage ? "page" : undefined}
      >
        {1}
      </PageButton>
      {activePage > siblings + 2 && <PaginationDots />}
      {Array.from({length: totalPages})
        .map((_, i) => {
          if (i === 0 || i === totalPages - 1) return null
          return (
            <PageButton
              style={buttonStyles}
              onClick={() => onPageChange(i + 1)}
              key={i}
              className={i + 1 === activePage ? classes.active : ""}
              aria-current={i + 1 === activePage ? "page" : undefined}
            >
              {i + 1}
            </PageButton>
          )
        })
        .slice(
          activePage <= siblings ? 0 : activePage - 3,
          activePage + siblings
        )}
      {activePage + siblings + 1 < totalPages && <PaginationDots />}
      <PageButton
        style={buttonStyles}
        onClick={() => onPageChange(totalPages)}
        className={totalPages === activePage ? classes.active : ""}
        aria-current={totalPages === activePage ? "page" : undefined}
      >
        {totalPages}
      </PageButton>
      <PageButton
        style={buttonStyles}
        disabled={activePage === totalPages}
        onClick={() => onPageChange(totalPages)}
        aria-label="Go to the last page"
        aria-disabled={activePage === totalPages}
      >
        <PaginationRightArrow />
      </PageButton>
    </div>
  )
}
