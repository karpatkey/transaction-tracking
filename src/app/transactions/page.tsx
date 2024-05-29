'use client';
import DataTable from "@/components/Datatable";
import CustomTypography from "@/components/CustomTypography";

export default function Page() {
    const data = [
        {name: 'John Doe', position: 'Developer', office: 'New York', age: 30},
        {name: 'Jane Smith', position: 'Designer', office: 'London', age: 27},
    ];

    const columns = [
        {title: 'Name', data: 'name'},
        {title: 'Position', data: 'position'},
        {title: 'Office', data: 'office'},
        {title: 'Age', data: 'age'},
    ];


    return (
        <>
            <CustomTypography variant={'body2'}>DataTables Example</CustomTypography>
            <DataTable>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>$320,800</td>
                </tr>
                {/* ...más datos... */}
                </tbody>
            </DataTable>
        </>
    )
}
