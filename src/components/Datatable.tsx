"use client";

import React from 'react';
import {DataGrid, GridColDef, GridRowsProp} from '@mui/x-data-grid';
import {Box} from "@mui/material";
import {useAppStore} from "@/stores/useAppStore";

const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        type: 'number',
        width: 180,
    },
    {
        field: 'blockchain',
        headerName: 'Blockchain',
        type: 'string',
        width: 180,
    },
    {
        field: 'date_time',
        headerName: 'Datetime',
        type: 'date',
        width: 180,
    },
    {
        field: 'tx_hash',
        headerName: 'Tx hash',
        type: 'string',
        width: 180,
    },
    {
        field: 'address_from',
        headerName: 'Address from',
        type: 'string',
        width: 180,
    },
    {
        field: 'direction',
        headerName: 'Direction',
        type: 'string',
        width: 180,
    },
    {
        field: 'address_to',
        headerName: 'Address to',
        type: 'string',
        width: 180,
    },
    {
        field: 'token_symbol',
        headerName: 'Token symbol',
        type: 'string',
        width: 180,
    },
    {
        field: 'token_address',
        headerName: 'Token address',
        type: 'string',
        width: 180,
    },
    {
        field: 'token_amount',
        headerName: 'Token amount',
        type: 'string',
        width: 180,
    },
    {
        field: 'amount_in_usd',
        headerName: 'Amount in USD',
        type: 'string',
        width: 180,
    },
    {
        field: 'tx_type',
        headerName: 'Tx type',
        type: 'string',
        width: 180,
        editable: true
    },
    {
        field: 'protocol_from',
        headerName: 'Protocol from',
        type: 'string',
        width: 180,
        editable: true
    },
    {
        field: 'position_from',
        headerName: 'Position from',
        type: 'string',
        width: 180,
        editable: true
    },
    {
        field: 'protocol_to',
        headerName: 'Protocol to',
        type: 'string',
        width: 180,
        editable: true
    },
    {
        field: 'position_to',
        headerName: 'Position to',
        type: 'string',
        width: 180,
        editable: true
    },
    {
        field: 'token_price',
        headerName: 'Token price',
        type: 'string',
        width: 180
    },
    {
        field: 'block',
        headerName: 'Block',
        type: 'string',
        width: 180
    },
    {
        field: 'edit_status',
        headerName: 'Edit status',
        type: 'string',
        width: 180
    },
    {
        field: 'comment',
        headerName: 'Comment',
        type: 'string',
        width: 180,
        editable: true
    },
    {
        field: 'type_of_account',
        headerName: 'Type of account',
        type: 'string',
        width: 180,
        editable: true
    },
    {
        field: 'subtype_of_account',
        headerName: 'Subtype of account',
        type: 'string',
        width: 180,
        editable: true
    },
    {
        field: 'name_of_account',
        headerName: 'Name of account',
        type: 'string',
        width: 180,
        editable: true
    },
];


const DataTable = () => {
    const transactions = useAppStore((state) => state.transactions);
    return (
        <Box sx={{ height: 'calc(100vh - 240px)', width: '100%' }}>
            <DataGrid
                rows={transactions}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 100,
                        },
                    },
                }}
                pageSizeOptions={[100]}
            />
        </Box>
    )
}

export default DataTable;
