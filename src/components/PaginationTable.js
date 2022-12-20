import React from "react";
import { useMemo } from "react";
import { useTable, usePagination } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json"
import { COLUMNS } from "./columns"
import './basicTable.css'

const PaginationTable = () => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const { 
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state,
        gotoPage,
        setPageSize,
        pageCount,
        prepareRow } = useTable({
            columns,
            data,
    
        }, usePagination)

    const {pageIndex, pageSize} = state

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
                        page.map(row => {
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
            <div>
                <span>
                    page {' '}
                    <strong>{pageIndex + 1} of {pageOptions.length}</strong> {' '}
                </span>
                <span>
                    | Go to Page: { ' '}
                    <input type='number' defaultValue ={pageIndex + 1}
                    onChange={e =>{
                        const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                        gotoPage(pageNumber)
                    }} style={{width: '50px'}}></input>
                    <select value={pageSize} onChange= {e => setPageSize(Number(e.target.value))}>
                        {
                        [10,20,30].map(pageSize =>(
                            <option key={pageSize} value={pageSize}> 
                                show{pageSize}
                            </option>
                        ))
                        }
                    </select>
                </span>
                <button onClick={() => gotoPage(0)} disabled= {!canPreviousPage}>{'<<'}</button>
                <button className="btn1" onClick={() => previousPage()} disabled= {!canPreviousPage}>Previous</button>
                <button className="btn2" onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
                <button onClick={() => gotoPage(pageCount - 1)} disabled= {!canNextPage}>{'>>'}</button>
            </div>
        </div>
    )
}
export default PaginationTable;