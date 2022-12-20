

export const COLUMNS = [
    {
        Header: "id",
        Footer: "id",
        accessor: "id",
        sticky: 'left'
        
    },
    {
        Header: "firstname",
        Footer: "firstname",
        accessor: "first_name",
        sticky: 'left'
        
    },
    {
        Header: "lastname",
        Footer: "lastname",
        accessor: "last_name",
        sticky: 'left'
        
    },
    {
        Header: "Email",
        Footer: "Email",
        accessor: "email",
        
    },
    {
        Header: "date of birth",
        Footer: "date of birth",
        accessor: "date_of_birth",
        
    },
    {
        Header: "age",
        Footer: "age",
        accessor: "age",
        
    },
    {
        Header: "country",
        Footer: "country",
        accessor: "country",
        
    },
    {
        Header: "Phone",
        Footer: "Phone",
        accessor: 'phone',
        
    }
]

export const GROUPED_COLUMN = [
    {
        Header: "id",
        Footer: "id",
        accessor: "id"
    },
    {
        Header: "name",
        Footer: "name",
        columns: [
            {
                Header: "firstname",
                Footer: "firstname",
                accessor: "first_name"
            },
            {
                Header: "lastname",
                Footer: "lastname",
                accessor: "last_name"
            }
        ]

    },
    {
        Header: "Details",
        Footer: "Details",
        columns: [
            {
                Header: "Email",
                Footer: "Email",
                accessor: "email"
            },
            {
                Header: "date of birth",
                Footer: "date of birth",
                accessor: "date_of_birth"
            },
            {
                Header: "age",
                Footer: "age",
                accessor: "age"
            },
            {
                Header: "country",
                Footer: "country",
                accessor: "country"
            },
            {
                Header: "Phone",
                Footer: "Phone",
                accessor: 'phone'
            }
        ]
    }
]