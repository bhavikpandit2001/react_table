import React from "react";
import { useMemo } from "react";
import { useTable, useRowSelect } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json"
import { COLUMNS } from "./columns"
import './basicTable.css';
import { IndeterminateCheckbox } from "./Checkbox";

const RowSelection = () => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const { getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,
        selectedFlatRows } = useTable
            ({
                columns,
                data,
            }, useRowSelect,
                (hooks) => {
                    hooks.visibleColumns.push((columns) => {
                        return [
                            {
                                id: "selection",
                                Header: ({ getToggleAllRowsSelectedProps }) => (
                                    <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
                                ),
                                cell: ({ row }) => (
                                    <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
                                )
                            },
                            ...columns
                        ]
                    })
                })

    const firstPageRows = rows.slice(0, 10)

    return (
        <div>
            <table {...getTableProps()}>
                <thead>
                    {// Loop over the header rows
                        headerGroups.map(headerGroup => (
                            // Apply the header row props
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {// Loop over the headers in each row
                                    headerGroup.headers.map(column => (
                                        // Apply the header cell props
                                        <th {...column.getHeaderProps()}>
                                            {// Render the header
                                                column.render('Header')}
                                        </th>
                                    ))}
                            </tr>
                        ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {// Loop over the table rows
                        firstPageRows.map(row => {
                            // Prepare the row for display
                            prepareRow(row)
                            return (
                                // Apply the row props
                                <tr {...row.getRowProps()}>
                                    {// Loop over the rows cells
                                        row.cells.map(cell => {
                                            // Apply the cell props
                                            return (
                                                <td {...cell.getCellProps()}>
                                                    {// Render the cell contents
                                                        cell.render('Cell')}
                                                </td>
                                            )
                                        })}
                                </tr>
                            )
                        })}
                </tbody>
                <tfoot>
                    {
                        footerGroups.map(footerGroup => (
                            <tr {...footerGroup.getFooterGroupProps()}>
                                {
                                    footerGroup.headers.map(column => (
                                        <td {...column.getFooterProps()}>
                                            {
                                                column.render("Footer")
                                            }
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tfoot>
            </table>
            <pre>
                <code>
                    {JSON.stringify(
                        {

                            'selectedFlatRows[].original': selectedFlatRows.map(
                                d => d.original
                            ),
                        },
                        null,
                        2
                    )}
                </code>
            </pre>
        </div>
    )
}
export default RowSelection;