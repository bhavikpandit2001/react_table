import React from "react";
const ColumnFilter = ({ column }) =>{
    const {filtervalue, setFilter} = column
    return(
        <span>
            search: {' '}
            <input value={filtervalue || ''} onChange= {e => setFilter(e.target.value)}></input>
        </span>
    )
}
export default ColumnFilter;