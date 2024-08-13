import React from 'react'
import { DataGrid } from '@mui/x-data-grid'

export const LatestTransaction = () => {

    const rows = [
        {
            id: 1,
            'to/from': 'Elevate Agency',
            'Date': '2 Oct 2023',
            'Description': 'Monthly salary',
            'Amount': '+1500,00€',
            'Status': 'Sucess',
            'Action': '',
        },
    ];

    return (
        <div>
            <DataGrid
                columns={[
                    {
                        field: 'to/from', flex: 1, renderCell: (params) => (
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img src={'https://media.licdn.com/dms/image/v2/D4D0BAQFt2xkhOz2IoQ/company-logo_200_200/company-logo_200_200/0/1686651304478?e=1731542400&v=beta&t=3hX7KrOOXIKIXox5EB-pep4YqpaNch7LqABSi-As7GQ'} alt="Elevate Agency Logo" style={{ width: 24, height: 24, marginRight: 8 }} />
                                {params.value}
                            </div>
                        ),
                    },
                    { field: 'Date', flex: 1 },
                    { field: 'Description', flex: 1 },
                    { field: 'Amount', flex: 1, cellClassName: 'custom-amount-col' },
                    {
                        field: 'Status', flex: 1, renderCell: (params) => (
                            <span className='text-green-500 border-2 p-2 rounded-xl border-green-500'>Success</span>
                        ),
                    },
                    {
                        field: 'Action', flex: 1, renderCell: (params) => (
                            <div className='flex h-full gap-2 items-center my-auto text-gray-400'>
                                <i className="fa-solid fa-link"></i>
                                <i className="fa-solid fa-trash "></i>
                                <i className="fa-solid fa-ellipsis"></i>
                                {params.value}
                            </div>
                        ),
                    }]}
                rows={rows}
                // slots={{}}
                autosizeOnMount={true}
                checkboxSelection={true}
                density='confortable'
                hideFooterPagination={true}
                sx={{
                    '& .MuiDataGrid-row': {
                        backgroundColor: '#fff',
                        textAlign: 'center',
                        '&:hover': {
                            backgroundColor: '#e0e0e0',
                        },
                    },
                    '& .MuiDataGrid-cell.custom-amount-col': {
                        color: '#00A57C',
                    },
                }}
            />
        </div>
    )
}
