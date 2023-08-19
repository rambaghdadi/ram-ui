import {CSSProperties} from "react"
import classes from "./Table.module.css"
import {ITableProps, verticalSpacing} from "./Table.types"
import Pagination from "./Pagination/Pagination"

//TODO Sorting
//TODO Resize Columns
//TODO Sticky Header / Scroll
//TODO Row selection
//TODO Expandable Rows
//TODO OnClick Rows
//TODO Column Visibility Toggle
//TODO row highlighting on importance
//TODO Row actions
//TODO Loading / Empty States

export default function Table({
  columns,
  rows,
  spacing = "md",
  withBorder = true,
  isStriped = true,
  highlightOnHover = true,
  withColumnBorders = false,
  isPaginated = false,

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
          {rows.map((row, i) => (
            <tr key={i} className={`${hoverCls} ${stripedCls}`}>
              {row.map((content, i) => (
                <td key={i} style={cellStyles} className={columnsCls}>
                  {content}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {isPaginated && <Pagination {...props} />}
    </div>
  )
}
