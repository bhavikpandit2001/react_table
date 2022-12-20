import React from "react";

import { useMemo } from "react";

import { useTable } from "react-table";

import MOCK_DATA from "./MOCK_DATA.json"

import { COLUMNS } from "./columns"

import './basicTable.css'


const ColumnOrder = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,

        rows,
        prepareRow,
        setColumnOrder
        } = useTable({
        columns,
        data,
    }, ColumnOrder)

    const ChangeOrder = () =>{
        setColumnOrder([
            'id',
            'first_name',
            'last_name',
            'email',
            'date_of_birth',
            'age',
            'country',
            'phone'
        ])
    }

    return (
    <div>
        <button onClick={ChangeOrder}>change column</button>
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
                    rows.map(row => {
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
            
        </table>
    </div>
    )
}
export default ColumnOrder;