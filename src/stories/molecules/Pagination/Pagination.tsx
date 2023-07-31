import classes from "./Pagination.module.css"
import {IPaginationProps, colors, sizes} from "./Pagination.types"
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
  const styles = {
    //Color
    "--background-color": colors[color],
  }

  const buttonStyles = {
    //Size
    padding: sizes[size].padding,
    minWidth: sizes[size].width,
    height: sizes[size].height,
    fontSize: sizes[size].fontSize,
  }

  return (
    <div style={{...styles, ...style}} className={`${classes.container}`}>
      <PageButton
        style={buttonStyles}
        disabled={activePage === 1}
        onClick={() => onPageChange(1)}
      >
        <PaginationLeftArrow />
      </PageButton>
      <PageButton
        style={buttonStyles}
        onClick={() => onPageChange(1)}
        className={1 === activePage ? classes.active : ""}
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
      >
        {totalPages}
      </PageButton>
      <PageButton
        style={buttonStyles}
        disabled={activePage === totalPages}
        onClick={() => onPageChange(totalPages)}
      >
        <PaginationRightArrow />
      </PageButton>
    </div>
  )
}
