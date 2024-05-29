"use client";
import React, { useEffect, useRef, ReactNode } from 'react';

interface DataTableProps {
    children: ReactNode;
}

const DataTable = ({ children }: DataTableProps): JSX.Element => {
    const tableRef = useRef<HTMLTableElement>(null);

    useEffect(() => {
        if (tableRef.current) {
            $(tableRef.current).DataTable();
        }
    }, [])

    return <table ref={tableRef} className="display">{children}</table>;
}

export default DataTable;
