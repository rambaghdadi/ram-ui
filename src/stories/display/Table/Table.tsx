import {CSSProperties, useEffect, useRef, useState} from "react"
import classes from "./Table.module.css"
import {ITableProps, verticalSpacing} from "./Table.types"
import Pagination from "./Pagination/Pagination"
import ChevronIcon from "./Pagination/SVGs/ChevronIcon"
import Flex from "../../layout/Flex/Flex"

//TODO Row selection
//TODO Expandable Rows
//TODO Column Visibility Toggle
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
  isSortingEnabled = false,
  isResizingEnable = false,
  maxHeight,
  id,

  sortAscending,
  sortDescending,

  //Pagination
  ...props
}: ITableProps) {
  const tableHeadRowRef = useRef<HTMLTableRowElement>(null)

  const columnsCls = withColumnBorders ? classes.columns : ""
  const hoverCls = highlightOnHover ? classes.hover : ""
  const stripedCls = isStriped ? classes.striped : ""
  const borderedCls = withBorder ? classes.border : ""

  const [columnWidths, setColumnWidths] = useState<number[] | null>(null)

  const [isDragging, setIsDragging] = useState(false)
  const [currentColumnDragged, setCurrentColumnDragged] = useState<
    number | null
  >(null)

  const [startX, setStartX] = useState(0)

  useEffect(() => {
    if (!tableHeadRowRef.current) return

    const savedWidths = localStorage.getItem(`ram-ui-table-${id}-columns-width`)
    if (savedWidths) {
      const parsedWidths: number[] = JSON.parse(
        localStorage.getItem("ram-ui-table-columns-width") ?? "[]"
      )
      if (!!parsedWidths.length) {
        setColumnWidths(parsedWidths)
        return
      }
    }

    const columnsWidths: number[] = []
    const columns = tableHeadRowRef.current?.children
    Array.from(columns).forEach((node) =>
      columnsWidths.push(node.getBoundingClientRect().width)
    )
    setColumnWidths(columnsWidths)
  }, [])

  function onMouseDownHandler(e: React.MouseEvent, columnIndex: number) {
    setIsDragging(true)
    setCurrentColumnDragged(columnIndex)
    setStartX(e.clientX)
  }

  function onMouseUpHandler() {
    setIsDragging(false)
    setCurrentColumnDragged(null)
  }

  function onMouseMoveHandler(e: React.MouseEvent) {
    if (!isDragging || currentColumnDragged === null || !columnWidths) return

    const newWidth = columnWidths[currentColumnDragged] + (e.clientX - startX)

    setColumnWidths((prevWidths) => {
      if (!prevWidths) return prevWidths
      const newWidths = [...prevWidths]
      newWidths[currentColumnDragged] = newWidth
      return newWidths
    })
    setStartX(e.clientX)

    localStorage.setItem(
      "ram-ui-table-columns-width",
      JSON.stringify(columnWidths)
    )
  }

  const tableContainerStyles: CSSProperties = {
    maxHeight: maxHeight || undefined,
  }

  const cellStyles: CSSProperties = {
    padding: verticalSpacing[spacing],
  }

  return (
    <div
      style={tableContainerStyles}
      className={`${classes.container} ${borderedCls}`}
      onMouseUp={onMouseUpHandler}
      onMouseMove={onMouseMoveHandler}
      onMouseLeave={() => {
        setIsDragging(false)
        setCurrentColumnDragged(null)
      }}
    >
      <table className={classes.table}>
        <thead>
          <tr ref={tableHeadRowRef}>
            {columns?.map((column, i) => (
              <th
                key={i}
                className={columnsCls}
                style={{
                  width: columnWidths ? `${columnWidths[i]}px` : "auto",
                }}
              >
                <Flex
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Flex
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    isFullWidth={true}
                    padding={verticalSpacing[spacing]}
                  >
                    {column}
                    {isSortingEnabled && (
                      <Flex gap={0}>
                        <ChevronIcon
                          isActive={true}
                          onClick={() => sortAscending(i)}
                          direction="top"
                          translate="translate(-3px,0)"
                        />
                        <ChevronIcon
                          isActive={true}
                          onClick={() => sortDescending(i)}
                          direction="bottom"
                          translate="translate(-3px,0)"
                        />
                      </Flex>
                    )}
                  </Flex>
                  {isResizingEnable && (
                    <div
                      className={classes.columnResizer}
                      onMouseDown={(e) => onMouseDownHandler(e, i)}
                    ></div>
                  )}
                </Flex>
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
