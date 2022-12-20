import React from "react";

import { useState } from "react";

import { useAsyncDebounce } from "react-table";

const GlobalFilter = ({filter, setFilter}) => {

    const [value, setValue] = useState(filter)

    const Onchange = useAsyncDebounce((value) => 
        {
            setFilter(value || undefined)
        }, 1000)
    return (
        <span>
            search: {' '}
            <input value={value || ''} onChange = {(e) => {
            setValue(e.target.value)
            Onchange(e.target.value)
            }}></input>
        </span>
    )
}
export default GlobalFilter