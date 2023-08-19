import {CSSProperties} from "react"
import classes from "./Table.module.css"
import {ITableProps, verticalSpacing} from "./Table.types"
import Pagination from "./Pagination/Pagination"

//TODO Sorting
//TODO Resize Columns
//TODO Sticky Header / Scroll
//TODO Row selection
//TODO Expandable Rows
//TODO Column Visibility Toggle
//TODO row highlighting on importance
//TODO Row actions

export default function Table({
  columns,
  rows,
  spacing = "md",
  withBorder = true,
  isStriped = true,
  highlightOnHover = true,
  withColumnBorders = false,
  isPaginated = false,
  isLoading,

  //Pagination
  ...props
}: ITableProps) {
  const columnsCls = withColumnBorders ? classes.columns : ""
  const hoverCls = highlightOnHover ? classes.hover : ""
  const stripedCls = isStriped ? classes.striped : ""
  const borderedCls = withBorder ? classes.border : ""

  const cellStyles: CSSProperties = {
    padding: verticalSpacing[spacing],
  }

  return (
    <div className={`${classes.container} ${borderedCls}`}>
      <table className={classes.table}>
        <thead>
          <tr>
            {columns?.map((column, i) => (
              <th key={i} className={columnsCls} style={cellStyles}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {!rows.length && !isLoading && (
            <tr>
              <td
                colSpan={columns.length}
                style={cellStyles}
                className={classes.emptyTableCell}
              >
                No data available.
              </td>
            </tr>
          )}
          {isLoading
            ? Array.from({length: 7}).map((_, i) => (
                <tr key={i} className={`${hoverCls} ${stripedCls}`}>
                  {Array.from({length: columns.length}).map((_, i) => (
                    <td
                      key={i}
                      style={cellStyles}
                      className={`${columnsCls} ${classes.loadingContent}`}
                    ></td>
                  ))}
                </tr>
              ))
            : rows.map(({data, onClickHandler}, i) => (
                <tr
                  onClick={onClickHandler}
                  key={i}
                  className={`${hoverCls} ${stripedCls}`}
                >
                  {data.map((content, i) => (
                    <td key={i} style={cellStyles} className={columnsCls}>
                      {content}
                    </td>
                  ))}
                </tr>
              ))}
        </tbody>
      </table>
      {isPaginated && !!rows.length && <Pagination {...props} />}
    </div>
  )
}
